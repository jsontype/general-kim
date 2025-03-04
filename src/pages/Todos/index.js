import React, { useState, useEffect } from "react"
import TextField from "@mui/material/TextField"
import Label from "../../components/atoms/Label"
import NormalButton from "../../components/atoms/NormalButton"
import { useTranslation } from "react-i18next"
import TodosList from "../../components/organisms/TodosList"
import TodosCounter from "../../components/molecules/Todos/TodosCounter"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { todoCountAtom } from "../../store/todoCountAtom"
import { Box } from "@mui/material"
import { todoStateAtom } from "../../store/todoStateAtom"
import useGetTodos from "../../util/useGetTodos"

export default function Todos() {
  const [renderTodos, setRenderTodos] = useState([])
  const setTodoCount = useSetRecoilState(todoCountAtom)
  const { state } = useRecoilValue(todoStateAtom)
  const [inputText, setInputText] = useState("")
  const { t } = useTranslation("todos")
  const { loadTodos, todoKey, todos } = useGetTodos()

  // todos data가져오기
  useEffect(() => {
    loadTodos()
  }, [])

  // render할 데이터를 filtering하여 데이터 세팅
  useEffect(() => {
    if (state === "total") setRenderTodos(todos)
    else if (state === "done")
      setRenderTodos(todos.filter((todo) => todo.completed === true))
    else if (state === "none")
      setRenderTodos(todos.filter((todo) => todo.completed === false))
  }, [state, todos])

  // 삭제, 변경 등에 따라 갯수를 다시 읽기
  useEffect(() => {
    const { done, none } = todos.reduce(
      (acc, todo) => {
        todo.completed ? acc.done++ : acc.none++
        return acc
      },
      { done: 0, none: 0 }
    )
    setTodoCount({ total: done + none, done: done, none: none })
  }, [setTodoCount, todos])

  // Insert
  // 메모화 o/x = props로 넘겨서 새로 생성되는 함수가 아니며 항상 값에 상관없이 todo를 추가 하므로 메모화는 불필요.
  const addTodo = (inputText) => {
    const addItem = { id: todoKey + 1, title: inputText, completed: false }
    todos.push(addItem)
    localStorage.setItem("todos", JSON.stringify(todos))
    setInputText("")
    loadTodos()
  }

  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Label text={t("title")} />
        <TodosCounter />
      </Box>

      <div className="mb-[20px]">
        <span className="mr-[5px]">
          <TextField
            value={inputText}
            size="small"
            required
            placeholder={t("inputPlaceHolder")}
            onChange={(e) => {
              setInputText(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTodo(inputText)
            }}
          />
        </span>
        <NormalButton
          buttonText={t("sendButton")}
          onClick={() => addTodo(inputText)}
        />
      </div>
      <div>
        <TodosList
          todos={todos}
          renderTodos={renderTodos}
          loadTodos={loadTodos}
        />
      </div>
    </div>
  )
}
