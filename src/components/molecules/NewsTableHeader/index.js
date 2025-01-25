import { TableCell, TableHead, TableRow } from "@mui/material"

export default function NewsTableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">index</TableCell>
        <TableCell>title</TableCell>
        <TableCell align="right">comment count</TableCell>
        <TableCell align="right">user</TableCell>
        <TableCell align="right">points</TableCell>
        <TableCell align="right">time ago</TableCell>
      </TableRow>
    </TableHead>
  )
}
