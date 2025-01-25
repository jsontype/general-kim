import * as React from "react"
import Box from "@mui/material/Box"
import NavbarItem from "../../atoms/NavbarItem"

export default function Navbar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          paddingBottom: "10px",
          gap: "10px",
        }}
      >
        <NavbarItem link={"/"} text={"Home"} />
        <NavbarItem link={"/movie"} text={"Movies"} />
        <NavbarItem link={"/count"} text={"Count"} />
        <NavbarItem link={"/news"} text={"News"} />
        <NavbarItem link={"/todos"} text={"Todos"} />
      </Box>
      <hr />
    </>
  )
}
