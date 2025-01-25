import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"
import NewsTableHeader from "../../molecules/NewsTableHeader"
import NewsTableContent from "../../molecules/NewsTableContent"

export default function NewsTable({ news }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <NewsTableHeader />
        <TableBody>
          {news.map((item, index) => (
            <NewsTableContent item={item} index={index} key={item.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
