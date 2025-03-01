import { atom } from "recoil"

export const todoStateAtom = atom({
  key: "todoStateAtom",
  default: {
    // total, none, done
    state: "total",
  },
})
