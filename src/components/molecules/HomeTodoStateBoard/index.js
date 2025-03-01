import { useRecoilState, useRecoilValue } from "recoil"
import { Box, Button, Typography } from "@mui/material"
import { todoCountAtom } from "../../../store/todoCountAtom"
import { todoStateAtom } from "../../../store/todoStateAtom"
import { useCallback, useEffect } from "react"
import useFetchTodos from "../../../util/fetchAPI/useFetchTodos"
import { todoFetchTriggerAtom } from "../../../store/todoFetchTriggerAtom"
import RefreshIcon from "@mui/icons-material/Refresh"
import HomeBoardBox from "../../atoms/HomeBoardBox"
import { useTranslation } from "react-i18next"

const HomeTodoStateBoard = ({ titleText }) => {
  const [{ state: todoState }, setTodoState] = useRecoilState(todoStateAtom)
  const [isFetchRequired, setIsFetchRequired] =
    useRecoilState(todoFetchTriggerAtom)
  const { total, done, none } = useRecoilValue(todoCountAtom)
  const { loadTodos } = useFetchTodos()
  const { t } = useTranslation("home")

  // load fetch
  useEffect(() => {
    if (isFetchRequired) {
      loadTodos()
      setIsFetchRequired(false)
    }
  }, [isFetchRequired])

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
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
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
          <RefreshIcon
            sx={{
              color: "white",
              fontSize: "10px",
              backgroundColor: "gray",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => setIsFetchRequired({ trigger: true })}
          />
        </Box>
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
