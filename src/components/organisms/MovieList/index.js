import React from "react"
import MovieItem from "../../molecules/MovieItem"
import { useTranslation } from "react-i18next"

const MovieList = ({ movies }) => {
  const { t } = useTranslation("movies")
  return movies.map((movie) => <MovieItem key={movie.id} movie={movie} t={t} />)
}

export default React.memo(MovieList)
