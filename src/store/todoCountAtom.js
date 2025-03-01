import { atom } from "recoil"

export const todoCountAtom = atom({
  key: "todocountAtom",
  default: {
    total: 0,
    none: 0,
    done: 0,
  },
})
