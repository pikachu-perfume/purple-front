"use client";
import { Box, Typography } from "@mui/material";
import { useNoticeStore } from "@/store/noticeStore";

function MyNoticeList() {
  const { noticeArr } = useNoticeStore();
  return (
    <Box display={"flex"} flexDirection={"column"}>
      {noticeArr.map(eachData => (
        <Box display={"flex"} key={eachData.id} gap={10}>
          <Typography>{eachData.id}</Typography>
          <Typography>{eachData.title}</Typography>
          <Typography>{eachData.description}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default MyNoticeList;
