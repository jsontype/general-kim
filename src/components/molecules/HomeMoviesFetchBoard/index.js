import { Button, Typography } from "@mui/material"
import RefreshIcon from "@mui/icons-material/Refresh"
import { useSetRecoilState } from "recoil"
import { moviesFetchTriggerAtom } from "../../../store/moviesFetchTriggerAtom"
import HomeBoardBox from "../../atoms/HomeBoardBox"

const HomeMoviesFetchBoard = ({ titleText }) => {
  const setIsFetchRequired = useSetRecoilState(moviesFetchTriggerAtom)

  return (
    <HomeBoardBox>
      <Typography variant="h4">{titleText}</Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => setIsFetchRequired(true)}
      >
        Load Fetch
        <RefreshIcon
          sx={{
            color: "white",
            fontSize: "10px",
            width: "20px",
            height: "20px",
            marginLeft: "5px",
          }}
        />
      </Button>
    </HomeBoardBox>
  )
}

export default HomeMoviesFetchBoard
