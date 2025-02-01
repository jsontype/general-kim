import React from "react"
import Label from "../../components/atoms/Label"
import { useState, useEffect } from "react"
import NewsTable from "../../components/organisms/NewsTable"
import { useTranslation } from "react-i18next"

export default function News() {
  const [news, setNews] = useState([])
  const { t } = useTranslation("news")

  // mounted
  useEffect(() => {
    fetch("https://api.hnpwa.com/v0/news.json")
      .then((res) => res.json())
      .then((json) => {
        setNews(json)
      })
  }, [])

  return (
    <div>
      <Label text={t("title")} />

      <NewsTable news={news} />
    </div>
  )
}
