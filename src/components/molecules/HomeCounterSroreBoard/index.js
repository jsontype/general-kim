import { useRecoilValue } from "recoil"
import { countAtom } from "../../../store/countAtom"
import { Typography } from "@mui/material"

const HomeCounterScoreBoard = ({ counterText }) => {
  const count = useRecoilValue(countAtom)

  return (
    <>
      <Typography variant="h4">{counterText}</Typography>
      <div>
        <span>{count}</span>
      </div>
    </>
  )
}

export default HomeCounterScoreBoard
