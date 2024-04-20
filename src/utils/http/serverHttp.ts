"use server";
import axios from "axios";

const serverHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
});

serverHttp.interceptors.response.use(
  response => response.data,
  () => {},
);

export default serverHttp;
