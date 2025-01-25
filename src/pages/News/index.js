import React from "react"
import Label from "../../components/atoms/Label"
import { useState, useEffect } from "react"
import NewsTable from "../../components/organisms/NewsTable"

export default function News() {
  const [news, setNews] = useState([])

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
      <Label text="News" />

      <NewsTable news={news} />
    </div>
  )
}
