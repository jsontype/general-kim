import { atom } from "recoil"

export const newsDataAtom = atom({
  key: "newsDataAtom",
  default: {
    currentPage: 1,
    lastPage: 10, // api에서 제공되는 최대 페이지
    data: [],
  },
})
