import React from "react"
import { render, screen } from "@testing-library/react"
import Counter from "../pages/Count"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom" // (선택 사항)

describe("Counter 앱 테스트 모음", () => {
  test("+ 버튼을 클릭하면 count가 1 증가한다.", async () => {
    render(<Counter />)
    const incrementButton = screen.getByRole("button", { name: "+" })
    userEvent.click(incrementButton)
    expect(await screen.findByText("1")).toBeInTheDocument()
  })

  test("- 버튼을 클릭하면 count가 1 감소한다.", async () => {
    render(<Counter />)
    const decrementButton = screen.getByRole("button", { name: "-" })
    userEvent.click(decrementButton)
    expect(await screen.findByText("-1")).toBeInTheDocument()
  })
})
