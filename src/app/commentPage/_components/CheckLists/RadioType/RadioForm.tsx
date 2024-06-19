import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { AllFields } from "@/constant/comment.const";
import { ReactNode } from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";

type FormData = {
  persistence?: string;
  residualScent?: string;
  gender?: string;
};

interface RadioProps {
  name: keyof FormData;
  style: string;
  label: string;
  value: string | number;
  control: Control<AllFields>;
  errors: FieldErrors<FormData>;
  children?: ReactNode;
}

export const RadioForm: React.FC<RadioProps> = ({
  name,
  control,
  style,
  value,
  label,
  errors,
  ...children
}) => {
  return (
    <div>
      <div>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <div className={style} {...field} {...children}>
              <div></div>
              <label>{label}</label>
            </div>
          )}
        />
      </div>

      {errors && (
        <div>
          <ErrorMessage error={errors} />
        </div>
      )}
    </div>
  );
};
