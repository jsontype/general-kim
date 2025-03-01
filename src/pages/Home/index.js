import React from "react"
import Label from "../../components/atoms/Label"
import { useTranslation } from "react-i18next"
import HomeCounterScoreBoard from "../../components/molecules/HomeCounterSroreBoard"
import HomeTodoStateBoard from "../../components/molecules/HomeTodoStateBoard"

export default function Home() {
  const { t } = useTranslation("home")

  return (
    <div>
      <Label text={t("title")} />
      <div>
        <HomeCounterScoreBoard titleText={t("counter")} />
        <HomeTodoStateBoard titleText={t("todos")} />
      </div>
    </div>
  )
}
