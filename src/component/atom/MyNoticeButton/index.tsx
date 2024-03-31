"use client";
import { Box, Button } from "@mui/material";
import { useNoticeStore } from "@/store/noticeStore";
import { faker } from "@faker-js/faker";

function MyNoticeButton() {
  const { add, remove, removeAll } = useNoticeStore();
  return (
    <Box>
      <Button
        onClick={() =>
          add({
            title: faker.string.sample(),
            id: faker.number.int(),
            description: faker.lorem.text(),
          })
        }
      >
        add
      </Button>
      <Button onClick={remove}>remove</Button>
      <Button onClick={removeAll}>remove All</Button>
    </Box>
  );
}

export default MyNoticeButton;
