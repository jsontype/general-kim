import { atom } from "recoil"

export const moviesApiParamsAtom = atom({
  key: "moviesApiParamsAtom",
  default: {
    sort: "",
    limit: "",
  },
})
