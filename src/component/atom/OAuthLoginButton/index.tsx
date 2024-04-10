import { OauthType } from "@/app/constant/session";
import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface PropTypes {
  type: OauthType;
}

type ButtonAssetTypes = {
  [key in OauthType]: {
    text: string;
    color: string;
    img: string;
  };
};

const buttonAsset: ButtonAssetTypes = {
  [OauthType.KAKAO]: {
    text: "카카오 로그인",
    color: "#fee500",
    img: "/assets/images/kakao_logo.png",
  },
};

const OAuthLoginButton: FC<PropTypes> = ({ type }) => {
  const { img, color, text } = buttonAsset[type];
  return (
    <Box
      borderRadius={"0.6rem"}
      padding={"11px 14px"}
      display={"flex"}
      alignItems={"center"}
      bgcolor={color}
      maxWidth={"24rem"}
      width={"100%"}
    >
      <img
        src={img}
        alt={text}
        style={{
          maxWidth: "1.8rem",
          maxHeight: "1.8rem",
          objectFit: "cover",
        }}
      />
      <Typography
        fontSize={"1.5rem"}
        lineHeight={"2.2rem"}
        flex={1}
        textAlign={"center"}
      >
        {text}
      </Typography>
    </Box>
  );
};
export default OAuthLoginButton;
