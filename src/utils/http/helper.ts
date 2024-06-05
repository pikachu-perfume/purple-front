import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { RestResponseType } from "@/types/response";
import { TOKEN_SAVE_KEY } from "@/constant/session";

export function httpConfigHelper(config: InternalAxiosRequestConfig) {
  const token = window.localStorage.getItem(TOKEN_SAVE_KEY);
  config.headers.set("x-authentication-header", token);
  return config;
}

export function httpParserHelper(response: AxiosResponse<RestResponseType>) {
  const code = response.data.responseStatus;
  if (code != 200) {
    const error = new Error();
    error.name = code;
    error.message = "Internal Error";
    error.cause = "DEFINED";
    throw error;
  }
  return response.data;
}
