import { Button, Typography } from "@mui/material"
import RefreshIcon from "@mui/icons-material/Refresh"
import { useSetRecoilState } from "recoil"
import { newsFetchTriggerAtom } from "../../../../store/newsFetchTriggerAtom"
import HomeBoardBox from "../../../atoms/HomeBoardBox"
import { newsPageNumberAtom } from "../../../../store/newsPageNumberAtom"

const HomeNewsFetchBoard = ({ titleText }) => {
  const setIsFetchRequired = useSetRecoilState(newsFetchTriggerAtom)
  const setPageNumber = useSetRecoilState(newsPageNumberAtom)

  // news api를 refetch, page를 1로 초기화
  const onFetchTrigger = () => {
    setIsFetchRequired(true)
    setPageNumber(1)
  }

  return (
    <HomeBoardBox>
      <Typography variant="h4">{titleText}</Typography>
      <Button variant="contained" color="success" onClick={onFetchTrigger}>
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

export default HomeNewsFetchBoard
