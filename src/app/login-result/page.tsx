import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { TOKEN_SAVE_KEY } from "@/constant/session";

export default function LoginSuccess() {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const tokenValue = params.get("token");
    if (tokenValue) {
      window.localStorage.setItem(TOKEN_SAVE_KEY, tokenValue);
      return router.replace("/"); // go to main page if login success
    } else {
      // error case when failed login
    }
  }, []);
  return null;
}
