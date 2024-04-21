import clientHttp from "@/utils/http/clientHttp";
import { OauthType } from "@/app/constant/session";
import { AuthLoginTryDTO } from "@/dto/authDTO";

export async function clientCreateLoginTry(type: OauthType) {
  return await clientHttp.post<never, AuthLoginTryDTO>(
    `/perpicks/auth/login-try/${type}`,
  );
}
