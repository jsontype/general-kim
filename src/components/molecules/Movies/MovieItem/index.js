import React from "react"
import Rating from "@mui/material/Rating"
import Tooltip from "@mui/material/Tooltip"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Box } from "@mui/material"
import DetailsStory from "../../../atoms/Movies/DetailsStory"
import DetailsLink from "../../../atoms/Movies/DetailsLink"

const MovieItem = ({ movie, t }) => {
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
              {`${t("item.runtime")}: `} {movie.runtime}分
            </div>
            <div>
              {`${t("item.download")}: `}
              {movie.torrents.map((torrent, i) => {
                const isLastData = i === movie.torrents.length - 1

                return (
                  <DetailsLink
                    key={i}
                    index={i}
                    url={torrent.url}
                    isLastData={isLastData}
                  />
                )
              })}
            </div>
            <div>
              {`${t("item.story")}: `}
              <DetailsStory movie={movie} t={t} />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default React.memo(MovieItem)
