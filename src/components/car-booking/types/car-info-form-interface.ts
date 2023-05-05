interface CarInfo {
  brand: string;
  ID: number;
  model: string;
  photo1: string;
  pricePerDay: number;
  status: string;
  slug: string;
}

export interface CarInfoType {
  carInfo: CarInfo
}