import React from "react"
import Label from "../../components/atoms/Label"
import { useTranslation } from "react-i18next"
import HomeBoard from "../../components/organisms/HomeBoard"

export default function Home() {
  const { t } = useTranslation("home")

  return (
    <div>
      <Label text={t("title")} />
      <HomeBoard />
    </div>
  )
}
