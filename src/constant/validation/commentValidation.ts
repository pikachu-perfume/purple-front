import { COMMON_TEXTS } from "../../hook/ErrorMsg/commonMsg";
import { TEXT_LENGTH } from "../common/textLength";

export const validationMessages = {
  rating: {
    required: "별점을 선택해주세요",
  },
  textReview: {
    required: "리뷰를 작성해주세요",
    minLength: {
      value: TEXT_LENGTH,
      message: COMMON_TEXTS.minTextLength(TEXT_LENGTH),
    },
    // TODO : maxLength 에러 메세지 정해지면 작성할 예정
    // maxLength: { value: 300, message: "최대 300자입니다" },
  },
  persistence: {
    required: "지속력을 선택해주세요",
  },
  residualScent: {
    required: "시야주를 선택해주세요",
  },
  season: {
    required: "계절감/시간을 선택해주세요",
  },
  gender: {
    required: "성별을 선택해주세요",
  },
  mood: {
    required: "분위기를 선택해주세요",
  },
};
