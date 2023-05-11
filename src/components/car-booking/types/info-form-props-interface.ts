import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormInput } from "./form-input-types";


export interface PersonalInfoFormProps {
  register: UseFormRegister<FormInput>;
  errors: FieldErrors<FormInput>;
}