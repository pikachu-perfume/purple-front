import Radio from "./Radio";
import { RadioBtnGroupProps, RadioBtnOption } from "./radio.type";
import { S } from "./styles";

const RadioBtnGroup = ({ options, onChange, value }: RadioBtnGroupProps) => {
  function renderOptions() {
    return options.map(({ label, value: optionValue }: RadioBtnOption) => {
      const optionId = label;
      const isChecked = value === optionValue;

      return (
        <Radio
          value={optionValue}
          label={label}
          key={label}
          id={optionId}
          onChange={onChange}
          checked={isChecked}
        />
      );
    });
  }
  return <S.Wrapper>{renderOptions()}</S.Wrapper>;
};

export default RadioBtnGroup;
