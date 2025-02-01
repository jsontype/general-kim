import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Todos from "./index.js"
import "@testing-library/jest-dom"

// 비어있는 fetch 데이터를 set
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
)

describe("todo list test", () => {
  test("todo 추가", async () => {
    render(<Todos />)
    // i18n로 텍스트 설정의 되어있지만 t("i18text")면 "i18text"로 텍스트값 찾기 가능
    const input = screen.getByPlaceholderText("inputPlaceHolder")
    fireEvent.change(input, { target: { value: "Add Todo" } })
    fireEvent.click(screen.getByText("sendButton"))
    // 추가된 todo의 텍스트가 개행이 많아 정규식으로 찾도록 지시
    expect(screen.getByText(/Add Todo/)).toBeInTheDocument()
  })
})
