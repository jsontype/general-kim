import React from "react"
import { render, screen } from "@testing-library/react"
import Count from "./index.js"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

describe("Counter Page Test", () => {
  test("+ 버튼 클릭시 count가 1증가", async () => {
    render(<Count />)
    const incrementButton = screen.getByRole("button", { name: "+" })
    userEvent.click(incrementButton)
    expect(await screen.findByText("1")).toBeInTheDocument()
  })

  test("- 버튼 클릭시 count가 1감소", async () => {
    render(<Count />)
    const decrementButton = screen.getByRole("button", { name: "-" })
    userEvent.click(decrementButton)
    expect(await screen.findByText("-1")).toBeInTheDocument()
  })
})
