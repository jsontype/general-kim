import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
// routerを使うための準備１
import { BrowserRouter } from "react-router-dom"
import i18n from "./i18n"
import "./tailwind.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // routerを使うための準備２
  <BrowserRouter>
    <App i18n={i18n} />
  </BrowserRouter>
)
