import { useCallback, useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { todoCountAtom } from "../../store/todoCountAtom"
import { todosDataAtom } from "../../store/todosDataAtom"

function useFetchTodos() {
  const [todos, setTodos] = useRecoilState(todosDataAtom)
  const [todoKey, setTodoKey] = useState(0)
  const setTodoCount = useSetRecoilState(todoCountAtom)

  const loadTodos = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        const result = json.filter((item) => item.userId === 1)
        setTodos(result)
        setTodoKey(result.length + 1)
        setTodoCount({
          total: result.length,
          done: result.filter((todo) => todo.completed === true).length,
          none: result.filter((todo) => todo.completed === false).length,
        })
      })
  }, [])

  return { todos, setTodos, todoKey, setTodoKey, loadTodos }
}

export default useFetchTodos
