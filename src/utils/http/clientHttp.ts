"use client";
import axios from "axios";
import { httpConfigHelper, httpParserHelper } from "@/utils/http/helper";

const clientHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
});

clientHttp.interceptors.request.use(httpConfigHelper, () => {});
clientHttp.interceptors.response.use(httpParserHelper, () => {});

export default clientHttp;
