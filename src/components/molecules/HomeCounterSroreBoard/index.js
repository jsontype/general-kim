import { useRecoilValue } from "recoil"
import { countAtom } from "../../../store/countAtom"
import { Typography } from "@mui/material"
import HomeBoardBox from "../../atoms/HomeBoardBox"

const HomeCounterScoreBoard = ({ titleText }) => {
  const count = useRecoilValue(countAtom)

  return (
    <HomeBoardBox>
      <Typography variant="h4">{titleText}</Typography>
      <Typography variant="h4" paddingRight={"15px"}>
        {count}
      </Typography>
    </HomeBoardBox>
  )
}

export default HomeCounterScoreBoard
