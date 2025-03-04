import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useRecoilState, useSetRecoilState } from "recoil"
import { moviesApiParamsAtom } from "../../../../store/moviesApiParamsAtom"
import { moviesFetchTriggerAtom } from "../../../../store/moviesFetchTriggerAtom"

const MovieSelectLimit = () => {
  const [apiParams, setApiParams] = useRecoilState(moviesApiParamsAtom)
  const setIsFetchRequired = useSetRecoilState(moviesFetchTriggerAtom)
  const { t } = useTranslation("movies")

  const handleChange = (event) => {
    setApiParams({ ...apiParams, limit: event.target.value })
    setIsFetchRequired(true)
  }

  return (
    <FormControl
      variant="standard"
      sx={{ marginRight: "20px", minWidth: 110 }}
      size="small"
    >
      <InputLabel id="select-movie-api-params-limit">{t("limit")}</InputLabel>
      <Select
        labelId="select-movie-params-limit"
        id="select"
        value={apiParams.limit === "" ? 20 : apiParams.limit}
        label="limit"
        onChange={handleChange}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={40}>40</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </FormControl>
  )
}

export default MovieSelectLimit
