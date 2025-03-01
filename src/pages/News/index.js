import React from "react"
import Label from "../../components/atoms/Label"
import { useState, useEffect } from "react"
import NewsTable from "../../components/organisms/NewsTable"
import { useTranslation } from "react-i18next"
import Loading from "../../components/molecules/Loading"
import { useRecoilState } from "recoil"
import { newsFetchTriggerAtom } from "../../store/newsFetchTriggerAtom"
import { newsDataAtom } from "../../store/newsDataAtom"

export default function News() {
  const [news, setNews] = useRecoilState(newsDataAtom)
  const [isLoading, setIsLoading] = useState(false)
  const [isFetchRequired, setIsFetchRequired] =
    useRecoilState(newsFetchTriggerAtom)
  const { t } = useTranslation("news")

  useEffect(() => {
    if (isFetchRequired === true) {
      setIsLoading(true)
      fetch("https://api.hnpwa.com/v0/news.json")
        .then((res) => res.json())
        .then((json) => {
          setIsLoading(false)
          setNews(json)
        })
      setIsFetchRequired(false)
    }
  }, [isFetchRequired])

  return (
    <div>
      <Label text={t("title")} />
      <div>{isLoading ? <Loading /> : <NewsTable news={news} />}</div>
    </div>
  )
}
