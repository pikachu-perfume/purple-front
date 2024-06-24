import { RadioBtnProps } from "./radio.type";
import { S } from "./styles";

const Radio = ({ label, id, value, ...rest }: RadioBtnProps) => {
  return (
    <S.RadioWrapper>
      <S.RadioBtn type="radio" id={id} value={value} {...rest} />
      <S.Label htmlFor={id}>
        <div>{label}</div>
      </S.Label>
    </S.RadioWrapper>
  );
};

export default Radio;
