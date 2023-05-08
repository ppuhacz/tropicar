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
}