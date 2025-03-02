import React, { useEffect } from "react"
import Label from "../../components/atoms/Label"
import NewsTable from "../../components/organisms/NewsTable"
import { useTranslation } from "react-i18next"
import Loading from "../../components/molecules/Loading"
import useFetchNews from "../../util/fetchAPI/useFetchNews"
import { useRecoilState, useRecoilValue } from "recoil"
import { newsPageNumberAtom } from "../../store/newsPageNumberAtom"
import { newsFetchTriggerAtom } from "../../store/newsFetchTriggerAtom"

export default function News() {
  const { t } = useTranslation("news")
  const { isLoading, loadNews, news } = useFetchNews()
  const pageNumberParams = useRecoilValue(newsPageNumberAtom)
  const [isFetchRequired, setIsFetchRequired] =
    useRecoilState(newsFetchTriggerAtom)

  useEffect(() => {
    if (isFetchRequired === true) {
      loadNews(pageNumberParams)
      setIsFetchRequired(false)
    }
  }, [isFetchRequired, pageNumberParams])

  return (
    <div>
      <Label text={t("title")} />
      <div>{isLoading ? <Loading /> : <NewsTable news={news} />}</div>
    </div>
  )
}
