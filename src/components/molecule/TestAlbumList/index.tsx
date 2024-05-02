"use client";

import { useQuery } from "@tanstack/react-query";
import { TestDTO } from "@/dto/test";
import { getAlbums } from "@/service/test";
import { Box, Typography } from "@mui/material";

export default function TestAlbumList() {
  const { data } = useQuery<TestDTO[]>({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => getAlbums(),
    staleTime: 5 * 1000,
  });

  return (
    <div>
      {data?.map(eachData => (
        <Box display={"flex"} key={eachData.id}>
          <Typography>{eachData.title} </Typography>
          <Typography>{eachData.id} </Typography>
          <Typography>{eachData.userId} </Typography>
          <Box>Test Bg</Box>
        </Box>
      ))}
    </div>
  );
}
