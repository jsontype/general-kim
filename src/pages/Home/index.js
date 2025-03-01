import React from "react"
import Label from "../../components/atoms/Label"
import HomeCounterScoreBoard from "../../components/molecules/HomeCounterSroreBoard"
import HomeTodoStateBoard from "../../components/molecules/HomeTodoStateBoard"
import HomeMoviesFetchBoard from "../../components/molecules/HomeMoviesFetchBoard"
import HomeNewsFetchBoard from "../../components/molecules/HomeNewsFetchBoard"
import { useTranslation } from "react-i18next"

export default function Home() {
  const { t } = useTranslation("home")

  return (
    <div>
      <Label text={t("title")} />
      <div>
        <HomeCounterScoreBoard titleText={t("counter")} />
        <HomeTodoStateBoard titleText={t("todos")} />
        <HomeMoviesFetchBoard titleText={t("movies")} />
        <HomeNewsFetchBoard titleText={t("news")} />
      </div>
    </div>
  )
}
