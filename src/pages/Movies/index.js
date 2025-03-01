import React from "react"
import { useState, useEffect } from "react"
import Label from "../../components/atoms/Label"
import { useTranslation } from "react-i18next"
import MovieList from "../../components/organisms/MovieList"
import { useRecoilState } from "recoil"
import { moviesFetchTriggerAtom } from "../../store/moviesFetchTriggerAtom"
import { moviesDataAtom } from "../../store/moviesDataAtom"
import Loading from "../../components/molecules/Loading"

export default function Movies() {
  const [movies, setMovies] = useRecoilState(moviesDataAtom)
  const [isFetchRequired, setIsFetchRequired] = useRecoilState(
    moviesFetchTriggerAtom
  )
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation("movies")

  // mounted
  useEffect(() => {
    if (isFetchRequired === true) {
      // Loading中のフラグ
      setIsLoading(true)
      // fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      fetch("https://yts.mx/api/v2/list_movies.json")
        .then((res) => res.json())
        .then((json) => {
          setIsLoading(false)
          setMovies(json.data.movies)
        })
      setIsFetchRequired(false)
    }
  }, [isFetchRequired])

  return (
    <div>
      <Label text={t("title")} />

      <div>{isLoading ? <Loading /> : <MovieList movies={movies} />}</div>
    </div>
  )
}
