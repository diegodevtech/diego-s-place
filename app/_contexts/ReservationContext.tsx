"use client";
import { createContext, useContext, useState } from "react";
import { ReservationRange } from "../_types";

type ReservationContextType = {
  range: ReservationRange;
  setRange: (range: ReservationRange) => void;
  resetRange: () => void;
};

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

// CONTEXT TO BE USED BETWEEN THE SIBLING COMPONENTS: DATESELECTOR AND RESERVATIONFORM
function ReservationProvider({ children }: { children: React.ReactNode }) {
  const initialState: ReservationRange = { from: undefined, to: undefined };
  const [range, setRange] = useState<ReservationRange>(initialState);
  function resetRange() {
    setRange(initialState);
  }
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) throw new Error("Context used outside scope.");
  return context;
}

export { ReservationProvider, useReservation };
