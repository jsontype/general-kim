import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"
import NewsTableHeader from "../../molecules/News/NewsTableHeader"
import NewsTableContent from "../../molecules/News/NewsTableContent"
import { Box } from "@mui/material"
import NewsPagination from "../../molecules/News/NewsPagination"

function NewsTable({ news }) {
  const { data, lastPage, currentPage } = news

  // 지정된 index가 없기에 페이지에 맞춰서 index값을 재생성
  const newIndex = (index) => {
    const pagesStartIndex = (currentPage - 1) * 30
    const pageIndex = index + 1
    return pagesStartIndex + pageIndex
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <NewsTableHeader />
          <TableBody>
            {data.map((item, index) => (
              <NewsTableContent
                item={item}
                index={newIndex(index)}
                key={item.id}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box justifySelf={"center"}>
        <NewsPagination currentPage={currentPage} lastPage={lastPage} />
      </Box>
    </div>
  )
}

export default React.memo(NewsTable)
