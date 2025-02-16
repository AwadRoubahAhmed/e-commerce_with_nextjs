//  Checking the types
export type DataType = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
};
