import * as React from "react"
import Box from "@mui/material/Box"
import NavbarItem from "../../atoms/NavbarItem"
import { useTranslation } from "react-i18next"
import i18n from "i18next"

export default function Navbar() {
  const { t } = useTranslation()
  console.log("t: ", t("movies:title"))  

  const onClickKorean = () => {
    i18n.changeLanguage("ko")
  }

  const onClickEnglish = () => {
    i18n.changeLanguage("en")
  }

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

        <button onClick={onClickKorean}>KO</button>
        <button onClick={onClickEnglish}>EN</button>
      </Box>
      <hr />
    </>
  )
}
