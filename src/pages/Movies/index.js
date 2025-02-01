import React from "react"
import Box from "@mui/material/Box"
import Rating from "@mui/material/Rating"
import CircularProgress from "@mui/material/CircularProgress"
import Tooltip from "@mui/material/Tooltip"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState, useEffect } from "react"
import Label from "../../components/atoms/Label"
import { useTranslation } from "react-i18next"

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation("movies")

  // mounted
  useEffect(() => {
    // Loading中のフラグ
    setIsLoading(true)
    // fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false)
        setMovies(json.data.movies)
      })
  }, [])

  console.log("movies: ", movies)

  const loading = (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  )

  const render = movies.map((movie) => {
    return (
      <div key={movie.id}>
        <a
          className="block text-gray-500 text-[24px] font-bold no-underline p-[5px] m-[10px] border-[1px] border-white rounded-[5px] hover:bg-red-300 hover:text-white"
          href={movie.url}
        >
          {movie.title} ({movie.year})
        </a>

        <img
          className="block w-[300px]"
          src={movie.large_cover_image}
          alt={movie.title}
        ></img>

        <div className="my-[10px]">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {t("showDetail")}
            </AccordionSummary>
            <AccordionDetails>
              <div>
                {`${t("item.rating")}: `}
                <Tooltip title={movie.rating + "/10点"} placement="right">
                  <Box
                    display="inline"
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating
                      size="small"
                      name="simple-controlled"
                      readOnly
                      value={movie.rating / 2}
                    />
                  </Box>
                </Tooltip>
              </div>
              <div>
                {`${t("item.genre")}: `}
                {Array.isArray(movie.genres) ? movie.genres.join(", ") : ""}
              </div>
              <div>
                {" "}
                {`${t("item.runtime")}: `} {movie.runtime}分
              </div>
              <div>
                {`${t("item.story")}: `}
                {`${movie.synopsis || t("item.noInfo")} `}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    )
  })

  return (
    <div>
      <Label text={t("title")} />

      <div>{isLoading ? loading : render}</div>
    </div>
  )
}
