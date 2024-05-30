// Alert 예시

import { ConfirmAlertType } from "@/types/alertTypes";

// export const ALERT_EXAMPLE: Alert = {
//   title: "제목",
//   message: "메세지",
//   ok: "확인",
// };

export const ONBOARDING_ALERT: ConfirmAlertType = {
  title: "온보딩을 건너뛰시겠어요?",
  message: `취향에 맞는 향수 추천 정확도가 \n 떨어질 수도 있어요.`,
  ok: "건너뛰기",
  cancel: "취소하기",
};
