import { useMemo, useState } from "react"

function useGetTodos() {
  const [todos, setTodos] = useState([])

  const loadTodos = () => {
    const getData = JSON.parse(localStorage.getItem("todos")) || []
    setTodos(getData)
  }
  const todoKey = useMemo(() => {
    return todos.length !== 0 ? todos[todos.length - 1].id : 0
  }, [todos])

  return { loadTodos, todoKey, todos }
}
export default useGetTodos
