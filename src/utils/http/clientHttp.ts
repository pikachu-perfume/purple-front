"use client";
import axios from "axios";
import { httpConfigHelper, httpParserHelper } from "@/utils/http/helper";

const clientHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_EXTERNAL,
});

clientHttp.interceptors.request.use(httpConfigHelper, () => {});
clientHttp.interceptors.response.use(httpParserHelper, error => {
  /*
   * if(error.status === 401) {
   *   window.localStorage.removeItem(TOKEN_SAVE_KEY);
   * }
   * 401(아마도) 에러 발생했을때 로컬 스토리지에서 jwt 토큰삭제.
   * UI 적인건 개별 컴포넌트 혹은 페이지에서 처리.
   * */
});

export default clientHttp;
