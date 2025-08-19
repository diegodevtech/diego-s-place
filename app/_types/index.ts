export type ReservationRange = { from: Date | undefined; to: Date | undefined };

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

export type SettingsType = {
  id: number;
  created_at: string | Date;
  minBookingLength: number | null;
  maxBookingLength: number | null;
  maxGuestsPerBooking: number | null;
  breakfastPrice: number | null;
}