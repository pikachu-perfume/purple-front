"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import { S } from "./styles";
import Product from "./_components/Product/Product";
import {
  CommentType,
  FieldDefinitions,
  GenderOptions,
  PersistenceOptions,
} from "@/constant/comment.const";
import Rating from "@/components/atom/Rating/Rating";
import Button from "@/components/atom/Button";
import { TEXTAREA_LENGTH } from "@/constant/common/textLength";
import { ChangeEvent, useState } from "react";
import RadioBtnGroup from "@/components/Radio/RadioGroup";
import { RadioForm } from "./_components/CheckLists/RadioType/RadioForm";
import { useForm } from "react-hook-form";
import { FieldDefinitionsType } from "@/types/commentTypes";
import { validationMessages } from "@/constant/validation/commentValidation";

const CommentPage = () => {
  const [textAreaLength, setTextAreaLength] = useState("");

  const {
    handleSubmit,
    control,
    register,
    watch,
    getValues,
    formState: { errors },
  } = useForm<FieldDefinitionsType>();

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaLength(e.target.value);
  };

  // const radioBtnGroupHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedValue(event.target.value);
  // };

  const onSubmit = async (data: FieldDefinitionsType) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <>
      <NavHeader>
        <div
          style={{
            fontSize: "1.8rem",
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          코멘트 작성
        </div>
      </NavHeader>
      <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Product />
        <S.CommentWrap>
          {Object.values(CommentType).map((comment, idx) => (
            <div key={idx}>{comment}</div>
          ))}
        </S.CommentWrap>
        <S.EvaluationWrap>
          <span>이 향수 어때요?</span>
          <S.RatingWrap>
            <Rating />
            <div>향이 마음에 들어요</div>
          </S.RatingWrap>
        </S.EvaluationWrap>
        <S.ReviewWrap>
          <S.ReviewTitle>
            <span>리뷰 한줄평</span>
          </S.ReviewTitle>
          <S.TextAreaWrap>
            <textarea
              maxLength={TEXTAREA_LENGTH}
              onChange={handleTextArea}
              placeholder="개인이 느낀 향의 설명,어울리는 스타일이나 분위기 등을 작성하세요. "
            />
            <div>
              {textAreaLength.length} / {TEXTAREA_LENGTH}자
            </div>
          </S.TextAreaWrap>
        </S.ReviewWrap>
        <RadioForm
          control={control}
          options={FieldDefinitions.persistence.options}
          name="persistence"
          rules={validationMessages.persistence}
          label={FieldDefinitions.persistence.label}
          errors={errors}
        />
        <RadioForm
          control={control}
          options={FieldDefinitions.residualScent.options}
          name="residualScent"
          rules={validationMessages.residualScent}
          label={FieldDefinitions.residualScent.label}
          errors={errors}
        />
        <RadioForm
          control={control}
          options={FieldDefinitions.gender.options}
          name="gender"
          rules={validationMessages.gender}
          label={FieldDefinitions.gender.label}
          errors={errors}
        />
        <S.CommentButton>
          <Button
            type="submit"
            buttonText="코멘트 등록"
            styleProps={{ fontWeight: "bold" }}
            size="primary"
          />
        </S.CommentButton>
      </S.Wrapper>
    </>
  );
};
export default CommentPage;
