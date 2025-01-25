import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Count from "./pages/Count"
import News from "./pages/News"
import Todos from "./pages/Todos"
import Navbar from "./components/molecules/Navbar"

export default function App() {
  return (
    <div className="m-[20px]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/count" element={<Count />} />
        <Route path="/news" element={<News />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  )
}
