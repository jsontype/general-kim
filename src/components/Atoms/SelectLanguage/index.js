import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function SelectLanguage() {
  const [language, setLanguage] = useState("en")
  const { t } = useTranslation("navbar")
  const { i18n } = useTranslation()

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value)
    setLanguage(event.target.value)
  }

  return (
    <FormControl sx={{ marginRight: "20px", minWidth: 110 }} size="small">
      <InputLabel id="select-language">{t("language.select")}</InputLabel>
      <Select
        labelId="select-language"
        id="select"
        value={language}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem value={"en"}>{t("language.en")}</MenuItem>
        <MenuItem value={"ja"}>{t("language.ja")}</MenuItem>
        <MenuItem value={"ko"}>{t("language.ko")}</MenuItem>
      </Select>
    </FormControl>
  )
}
