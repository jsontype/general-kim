import React from "react"
import Button from "@mui/material/Button"
import Label from "../../components/atoms/Label"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Count() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation("count")

  return (
    <>
      <Label text={t("title")} />

      <h1>{count}</h1>

      <Button
        size="small"
        variant="outlined"
        color="success"
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>
      <Button
        size="small"
        variant="outlined"
        color="error"
        onClick={() => setCount(count - 1)}
      >
        -
      </Button>
    </>
  )
}
