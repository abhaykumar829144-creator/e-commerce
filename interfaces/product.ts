export interface ICategory {
  id: number;
  name: string;
  image: string;
}
export interface IProduct {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  images: string;
  category: string;
}