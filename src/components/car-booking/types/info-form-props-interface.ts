import { UseFormRegister, FieldErrors, Control } from "react-hook-form";
import { FormInput } from "./form-input-types";


export interface PersonalInfoFormProps {
  register: UseFormRegister<FormInput>;
  errors?: FieldErrors<FormInput>;
  control?: Control<FormInput>
}