export interface Offer {
  ID: number;
  brand: string;
  model: string;
  category: string;
  engine: string;
  power: string;
  photo1: string;
  photo2: string;
  photo3: string;
  pricePerDay: number;
  tags: string[];
  status: string;
  slug: string;
  description: string;
  deposit: number;
}