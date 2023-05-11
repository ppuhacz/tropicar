export interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
  cityTown: string;
  pesel: string;
  startDate: Date;
  endDate: Date;
  totalPrice: string | number;
  totalDays: string;
  deposit: string;
  pricePerDay: string;
  totalMileageLimit: string;
  paymentMethod: string;
  creditCardNumber: string;
  creditCardExpirationDate: string;
  creditCardSecurityCode: string;
  userMessage: string;
  termsOfService: boolean;
  content: any;
}