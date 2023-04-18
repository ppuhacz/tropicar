export interface Offer {
  offer: Car;
}

interface Car {
  brand: string;
  category: string;
  engine: string;
  ID: number;
  model: string;
  power: string;
  photo1: string;
  photo2: string;
  photo3: string;
  pricePerDay: number;
  tags: string[];
  status: string;
  slug: string;
}
