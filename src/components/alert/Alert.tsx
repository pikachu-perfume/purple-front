import { AlertType } from "@/types/alertTypes";
import ModalLayout from "../modalLayout/modalLayout";
import { S } from "./styles";
import { useRouter } from "next/navigation";

const Alert = ({
  message,
  setOpenAlert,
}: {
  message: AlertType;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  return (
    <ModalLayout>
      <S.AlertWrapper>
        <S.AlertContents>
          <div>{message.message}</div>
        </S.AlertContents>
        <S.AlertButtonWrap>
          <button onClick={() => setOpenAlert(false)}>{message.ok}</button>
        </S.AlertButtonWrap>
      </S.AlertWrapper>
    </ModalLayout>
  );
};
export default Alert;
