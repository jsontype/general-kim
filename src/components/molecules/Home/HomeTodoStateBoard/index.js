import { useRecoilState, useRecoilValue } from "recoil"
import { Box, Button, Typography } from "@mui/material"
import { todoCountAtom } from "../../../../store/todoCountAtom"
import { todoStateAtom } from "../../../../store/todoStateAtom"
import { useCallback } from "react"
import HomeBoardBox from "../../../atoms/HomeBoardBox"
import { useTranslation } from "react-i18next"

const HomeTodoStateBoard = ({ titleText }) => {
  const [{ state: todoState }, setTodoState] = useRecoilState(todoStateAtom)
  const { total, done, none } = useRecoilValue(todoCountAtom)
  const { t } = useTranslation("home")

  // state change
  const onChangeTodoState = useCallback(
    (state) => {
      setTodoState({ state })
    },
    [setTodoState]
  )

  return (
    <HomeBoardBox>
      <Typography variant="h4">{titleText}</Typography>
      <Box>
        <Typography variant="h6">
          <Typography component="span">{t("todoState")} </Typography>
          <Typography
            component="span"
            color={
              todoState === "total"
                ? "blue"
                : todoState === "done"
                ? "green"
                : "red"
            }
          >
            {" "}
            {todoState.toUpperCase()}
          </Typography>
        </Typography>
        <Box>
          <Button
            variant={todoState === "total" ? "contained" : undefined}
            onClick={() => onChangeTodoState("total")}
          >{`Total: ${total}`}</Button>
          <Button
            variant={todoState === "none" ? "contained" : undefined}
            color="error"
            onClick={() => onChangeTodoState("none")}
          >{`None: ${none}`}</Button>
          <Button
            variant={todoState === "done" ? "contained" : undefined}
            color="success"
            onClick={() => onChangeTodoState("done")}
          >{`Done: ${done}`}</Button>
        </Box>
      </Box>
    </HomeBoardBox>
  )
}

export default HomeTodoStateBoard
