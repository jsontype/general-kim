// 기본 버튼
export const itemStyle = {
  padding: 0,
  border: "1px solid black",
  borderLeft: "none",
  "&:hover": { cursor: "pointer", backgroundColor: "#90EE90" },
}

// 제일 왼쪽의 기본 버튼
export const firstItemStyle = {
  ...itemStyle,
  borderLeft: "1px solid black",
}

// 현재 페이지의 버튼
export const currentPageStyle = {
  padding: 0,
  backgroundColor: "#EBBDE0",
  border: "3px solid #BC97B3",
  borderLeft: "none",
  "&:hover": { cursor: "pointer", backgroundColor: "#90EE90" },
}

// 현재 페이지의 버튼이 제일 왼쪽의 버튼인 경우
export const firstCurrentPageStyle = {
  ...currentPageStyle,
  borderLeft: "3px solid #BC97B3",
}
