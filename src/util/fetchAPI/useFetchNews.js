import { useState } from "react"
import { useRecoilState } from "recoil"
import { newsDataAtom } from "../../store/newsDataAtom"

function useFetchNews() {
  const [news, setNews] = useRecoilState(newsDataAtom)
  const [isLoading, setIsLoading] = useState(false)

  const loadNews = (params) => {
    setIsLoading(true)
    //TEST: api load상태를 보기위해 setTimeout설정
    setTimeout(() => {
      fetch(`https://api.hnpwa.com/v0/news/${params}.json`)
        .then((res) => res.json())
        .then((json) => {
          setIsLoading(false)
          setNews({ data: json, currentPage: params, lastPage: 10 }) // api에서 제공되는 최대 페이지는 10
        })
    }, 500)
  }

  return { news, isLoading, loadNews }
}

export default useFetchNews
