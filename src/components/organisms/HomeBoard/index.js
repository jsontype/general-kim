import { Grid2 } from "@mui/material"
import HomeCounterScoreBoard from "../../molecules/HomeCounterSroreBoard"
import HomeTodoStateBoard from "../../molecules/HomeTodoStateBoard"
import HomeMoviesFetchBoard from "../../molecules/HomeMoviesFetchBoard"
import HomeNewsFetchBoard from "../../molecules/HomeNewsFetchBoard"
import { useTranslation } from "react-i18next"

const HomeBoard = () => {
  const { t } = useTranslation("home")

  const itemStyle = {
    border: "4px solid black",
    borderRadius: "20px",
    padding: "8px",
  }

  return (
    <Grid2 container spacing={4}>
      <Grid2 size={6} sx={itemStyle}>
        <HomeCounterScoreBoard titleText={t("counter")} />
      </Grid2>
      <Grid2 size={6} sx={itemStyle}>
        <HomeTodoStateBoard titleText={t("todos")} />
      </Grid2>
      <Grid2 size={6} sx={itemStyle}>
        <HomeMoviesFetchBoard titleText={t("movies")} />
      </Grid2>
      <Grid2 size={6} sx={itemStyle}>
        <HomeNewsFetchBoard titleText={t("news")} />
      </Grid2>
    </Grid2>
  )
}

export default HomeBoard
