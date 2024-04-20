import { TestDTO } from "@/types/test";

export async function getAlbums() {
  return (await fetch("https://jsonplaceholder.typicode.com/albums").then(res =>
    res.json(),
  )) as TestDTO[];
}
