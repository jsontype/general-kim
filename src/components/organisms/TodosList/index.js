import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import React from "react"

function TodosList({ todos, renderTodos, loadTodos }) {
  // Delete
  // 메모화 o/x = TodosList자체가 메모화되고 todos에 따라 함수가 변하므로 변화는 조건이 동일.. 그러므로 메모화는 불필요.
  const delTodo = (id) => {
    const delItem = todos.filter((item) => {
      return item.id !== id
    })
    localStorage.setItem("todos", JSON.stringify(delItem))
    loadTodos()
  }

  // Update
  const modTodo = (id) => {
    const modItem = todos.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item
    })
    localStorage.setItem("todos", JSON.stringify(modItem))
    loadTodos()
  }

  return renderTodos.map((todo) => {
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
}

export default React.memo(TodosList)
