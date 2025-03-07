import { List, ListItem, ListItemButton } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useSetRecoilState } from "recoil"
import { newsPageNumberAtom } from "../../../../store/newsPageNumberAtom"
import { newsFetchTriggerAtom } from "../../../../store/newsFetchTriggerAtom"
import {
  currentPageStyle,
  firstCurrentPageStyle,
  firstItemStyle,
  itemStyle,
} from "./index.style"

const NewsPagination = ({ currentPage, lastPage }) => {
  const [isOnLeftArrow, setIsOnLeftArrow] = useState(false)
  const [isOnRightArrow, setIsOnRightArrow] = useState(true)
  const setPageNumberParams = useSetRecoilState(newsPageNumberAtom)
  const setIsFetchRequired = useSetRecoilState(newsFetchTriggerAtom)
  const [pageNumberList, setPageNumberList] = useState([])

  // 페이지번호 클릭으로 페이지 이동
  const onChangePage = (number) => {
    setPageNumberParams(number)
    setIsFetchRequired(true)
  }

  // ← 버튼 클릭으로 페이지 이동
  const onChangePageLeftArrow = (number) => {
    setPageNumberParams(number - 1)
    setIsFetchRequired(true)
  }

  // → 버튼 클릭으로 페이지 이동
  const onChangePageRightArrow = (number) => {
    setPageNumberParams(number + 1)
    setIsFetchRequired(true)
  }

  // ←← 버튼 클릭으로 쳇 페이지로 이동
  const onChangePageLeftMaxArrow = () => {
    setPageNumberParams(1)
    setIsFetchRequired(true)
  }

  // →→ 버튼 클릭으로 페이지 끝으로 이동
  const onChangePageRightMaxArrow = () => {
    setPageNumberParams(lastPage)
    setIsFetchRequired(true)
  }

  // button의 style설정
  const getListItemStyle = (pageNumber, pageIndex) => {
    const isFirstItem = !isOnLeftArrow && pageIndex === 0
    const isCurrentPage = pageNumber === currentPage

    if (isFirstItem)
      return isCurrentPage ? firstCurrentPageStyle : firstItemStyle
    return isCurrentPage ? currentPageStyle : itemStyle
  }

  // left arrow, right arrow trigger
  useEffect(() => {
    if (lastPage < 6) {
      setIsOnLeftArrow(false)
      setIsOnRightArrow(false)
    } else {
      currentPage < 4 ? setIsOnLeftArrow(false) : setIsOnLeftArrow(true)
      currentPage > lastPage - 3
        ? setIsOnRightArrow(false)
        : setIsOnRightArrow(true)
    }
  }, [currentPage, lastPage])

  // pagiNation버튼의 숫자 생성
  useEffect(() => {
    if (lastPage <= 5 && currentPage <= lastPage) {
      setPageNumberList(Array.from({ length: lastPage }, (_, i) => i + 1))
    } else if (currentPage <= 3) {
      setPageNumberList(Array.from({ length: 5 }, (_, i) => i + 1))
    } else if (currentPage > lastPage - 3) {
      setPageNumberList(Array.from({ length: 5 }, (_, i) => i + lastPage - 4))
    } else {
      setPageNumberList(
        Array.from({ length: 5 }, (_, i) => i + currentPage - 2)
      )
    }
  }, [currentPage, lastPage])

  return (
    <List sx={{ display: "flex" }}>
      {isOnLeftArrow && (
        <>
          <ListItem sx={firstItemStyle}>
            <ListItemButton
              onClick={() => onChangePageLeftMaxArrow(currentPage)}
            >
              ←←
            </ListItemButton>
          </ListItem>
          <ListItem sx={itemStyle}>
            <ListItemButton onClick={() => onChangePageLeftArrow(currentPage)}>
              ←
            </ListItemButton>
          </ListItem>
        </>
      )}
      {pageNumberList.map((pageNumber, i) => {
        return (
          <ListItem sx={getListItemStyle(pageNumber, i)} key={pageNumber}>
            <ListItemButton onClick={() => onChangePage(pageNumber)}>
              {pageNumber}
            </ListItemButton>
          </ListItem>
        )
      })}
      {isOnRightArrow && (
        <>
          <ListItem sx={itemStyle}>
            <ListItemButton onClick={() => onChangePageRightArrow(currentPage)}>
              →
            </ListItemButton>
          </ListItem>
          <ListItem sx={itemStyle}>
            <ListItemButton
              onClick={() => onChangePageRightMaxArrow(currentPage)}
            >
              →→
            </ListItemButton>
          </ListItem>
        </>
      )}
    </List>
  )
}

export default React.memo(NewsPagination)
