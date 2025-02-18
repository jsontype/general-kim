import React from "react"
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import { useState, useEffect } from "react"
import Label from "../../components/atoms/Label"
import { useTranslation } from "react-i18next"
import MovieList from "../../components/organisms/MovieList"

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

  const loading = (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  )

  return (
    <div>
      <Label text={t("title")} />

      <div>{isLoading ? loading : <MovieList movies={movies} />}</div>
    </div>
  )
}
