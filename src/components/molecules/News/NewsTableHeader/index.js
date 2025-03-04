import { TableCell, TableHead, TableRow } from "@mui/material"
import { useTranslation } from "react-i18next"

export default function NewsTableHeader() {
  const { t } = useTranslation("news")

  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">{t("labels.index")}</TableCell>
        <TableCell>{t("labels.title")}</TableCell>
        <TableCell align="right">{t("labels.commentCount")}</TableCell>
        <TableCell align="right">{t("labels.user")}</TableCell>
        <TableCell align="right">{t("labels.points")}</TableCell>
        <TableCell align="right">{t("labels.timeAgo")}</TableCell>
      </TableRow>
    </TableHead>
  )
}
