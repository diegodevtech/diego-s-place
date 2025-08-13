export type FilterTypes = "all" | "small" | "medium" | "large";
export type CabinType = {
  id: number;
  name: string | null;
  maxCapacity: number | null;
  regularPrice: number | null;
  discount: number | null;
  image: string | null;
  description: string | null;
};