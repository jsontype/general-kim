import React from "react"
import Button from "@mui/material/Button"
import Label from "../../components/atoms/Label"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useRecoilState } from "recoil"
import { countAtom } from "../../store/countAtom"

export default function Count() {
  const [countState, setCountState] = useRecoilState(countAtom)
  const [count, setCount] = useState(countState)
  const { t } = useTranslation("count")

  const addCount = () => {
    setCount(count + 1)
    setCountState(count + 1)
  }

  const subCount = () => {
    setCount(count - 1)
    setCountState(count - 1)
  }

  return (
    <>
      <Label text={t("title")} />

      <h1>{count}</h1>

      <Button
        size="small"
        variant="outlined"
        color="success"
        onClick={() => addCount()}
      >
        +
      </Button>
      <Button
        size="small"
        variant="outlined"
        color="error"
        onClick={() => subCount()}
      >
        -
      </Button>
    </>
  )
}
