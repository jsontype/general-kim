import React from "react"
import Label from "../../components/Atoms/Label"
import { useState, useEffect } from "react"

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

  console.log("news: ", news)

  const render = news.map((item) => {
    return (
      <div key={item.id}>
        <a
          className="no-underline text-black hover:bg-pink-500 hover:text-white"
          target="_blank"
          href={item.url}
          rel="noreferrer"
        >
          {item.title}
        </a>
        <span> / ID: {item.user}</span>
      </div>
    )
  })

  return (
    <div>
      <Label text="News" />

      <div>{render}</div>
    </div>
  )
}
