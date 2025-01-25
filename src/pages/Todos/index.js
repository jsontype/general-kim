import React, { useState, useEffect } from "react"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import TextField from "@mui/material/TextField"
import Label from "../../components/Atoms/Label"
import NormalButton from "../../components/Atoms/NormalButton"

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState("")
  const [todoKey, setTodoKey] = useState(0)

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

  const render = todos.map((todo) => {
    return (
      <div key={todo.id}>
        <div>
          <span
            className={
              todo.completed ? "text-gray-500 line-through" : "font-bold"
            }
            onClick={() => modTodo(todo.id)}
          >
            #{todo.id} / {todo.title}
          </span>
          <Checkbox
            checked={todo.completed}
            onChange={() => modTodo(todo.id)}
          />
          <IconButton aria-label="delete" onClick={() => delTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    )
  })

  // Insert
  const addTodo = (inputText) => {
    const addItem = [
      ...todos,
      { id: todoKey, title: inputText, completed: false },
    ]
    setTodoKey(todoKey + 1)
    setTodos(addItem)
    setInputText("")
  }

  // Delete
  const delTodo = (id) => {
    const delItem = todos.filter((item) => {
      return item.id !== id
    })
    setTodos(delItem)
  }

  // Update
  const modTodo = (id) => {
    const modItem = todos.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item
    })
    setTodos(modItem)
  }

  return (
    <div>
      <Label text="Todos" />

      <div className="mb-[20px]">
        <span className="mr-[5px]">
          <TextField
            value={inputText}
            size="small"
            required
            placeholder="New Todo"
            onChange={(e) => {
              setInputText(e.target.value)
            }}
          />
        </span>
        <NormalButton buttonText="SEND" onClick={() => addTodo(inputText)} />
      </div>
      <div>{render}</div>
    </div>
  )
}
