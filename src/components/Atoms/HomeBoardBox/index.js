import { Box } from "@mui/material"

const HomeBoardBox = ({ children }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"90px"}
    >
      {children}
    </Box>
  )
}

export default HomeBoardBox
