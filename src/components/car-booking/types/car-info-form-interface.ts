import { UseFormRegister, FieldErrors, UseFormSetValue, UseFormWatch} from "react-hook-form";
import { FormInput } from "./form-input-types";

interface CarInfo {
  brand: string;
  ID: number;
  model: string;
  photo1: string;
  pricePerDay: number;
  status: string; // delete later if not used
  slug: string;
  deposit: number;
  dailyMileageLimitKM: number;
}

export interface CarInfoType {
  carInfo: CarInfo
  register: UseFormRegister<FormInput>;
  errors: FieldErrors<FormInput>;
  setTotalPrice: React.Dispatch<React.SetStateAction<string | number>>;
  setTotalMileageLimit: React.Dispatch<React.SetStateAction<string | number>>;
  setTotalDays: React.Dispatch<React.SetStateAction<string | number>>;
}