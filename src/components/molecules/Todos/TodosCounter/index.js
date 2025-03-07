import { useRecoilState, useRecoilValue } from "recoil"
import { todoStateAtom } from "../../../../store/todoStateAtom"
import React, { useCallback } from "react"
import { todoCountAtom } from "../../../../store/todoCountAtom"
import { Box, Button } from "@mui/material"

const TodosCounter = () => {
  const [{ state: todoState }, setTodoState] = useRecoilState(todoStateAtom)
  const { total, none, done } = useRecoilValue(todoCountAtom)

  const onChangeTodoState = useCallback(
    (state) => {
      setTodoState({ state })
    },
    [setTodoState]
  )

  return (
    <Box>
      <Button
        variant={todoState === "total" ? "contained" : undefined}
        onClick={() => onChangeTodoState("total")}
      >{`total: ${total}`}</Button>
      <Button
        variant={todoState === "none" ? "contained" : undefined}
        color="error"
        onClick={() => onChangeTodoState("none")}
      >{`none: ${none}`}</Button>
      <Button
        variant={todoState === "done" ? "contained" : undefined}
        color="success"
        onClick={() => onChangeTodoState("done")}
      >{`done: ${done}`}</Button>
    </Box>
  )
}

export default React.memo(TodosCounter)
