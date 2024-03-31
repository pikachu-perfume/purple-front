"use client";

import { useQuery } from "@tanstack/react-query";
import { TestDTO } from "@/dto/test";
import { getAlbums } from "@/service/test";
import { Box, Typography } from "@mui/material";
import useThemeStyles from "@/hook/useThemeStyles";

export default function TestAlbumList() {
  const styles = useThemeStyles();
  const { data } = useQuery<TestDTO[]>({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => getAlbums(),
    staleTime: 5 * 1000,
  });

  return (
    <div>
      {data?.map(eachData => (
        <Box display={"flex"} key={eachData.id}>
          <Typography className={styles.textMainColor}>
            {eachData.title}{" "}
          </Typography>
          <Typography className={styles.textSubColor}>
            {eachData.id}{" "}
          </Typography>
          <Typography>{eachData.userId} </Typography>
          <Box className={styles.bgMainColor}>Test Bg</Box>
        </Box>
      ))}
    </div>
  );
}
