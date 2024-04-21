"use client";
import axios from "axios";

const clientHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
});

clientHttp.interceptors.response.use(
  response => response.data,
  () => {},
);

export default clientHttp;
