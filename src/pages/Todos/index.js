import React, { useState, useEffect, useCallback } from "react"
import TextField from "@mui/material/TextField"
import Label from "../../components/atoms/Label"
import NormalButton from "../../components/atoms/NormalButton"
import { useTranslation } from "react-i18next"
import TodosList from "../../components/organisms/TodosList"

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState("")
  const [todoKey, setTodoKey] = useState(0)
  const { t } = useTranslation("todos")

  // Mounted
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        const result = json.filter((item) => item.userId === 1)
        setTodos(result)
        setTodoKey(result.length + 1)
      })
  }, [])

  // Insert
  // 메모화 o/x = props로 넘겨서 새로 생성되는 함수가 아니며 항상 값에 상관없이 todo를 추가 하므로 메모화는 불필요.
  const addTodo = (inputText) => {
    const addItem = [
      ...todos,
      { id: todoKey, title: inputText, completed: false },
    ]
    setTodoKey(todoKey + 1)
    setTodos(addItem)
    setInputText("")
  }

  return (
    <div>
      <Label text={t("title")} />

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
          />
        </span>
        <NormalButton
          buttonText={t("sendButton")}
          onClick={() => addTodo(inputText)}
        />
      </div>
      <div>
        <TodosList setTodos={setTodos} todos={todos} />
      </div>
    </div>
  )
}
