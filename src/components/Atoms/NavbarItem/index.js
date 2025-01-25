import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

export default function NavbarItem({ link, text }) {
  return (
    <Typography
      sx={{
        minWidth: 100,
        border: 1,
        borderColor: "grey.500",
        borderRadius: "16px",
        "&:hover": { backgroundColor: "#dddddd" },
      }}
    >
      <Link to={link}>{text}</Link>
    </Typography>
  )
}
