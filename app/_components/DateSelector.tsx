"use client";

import { differenceInDays, isPast, isSameDay, isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { CabinType, ReservationRange, SettingsType } from "../_types";
import { useReservation } from "../_contexts/ReservationContext";

function isAlreadyBooked(range: ReservationRange, datesArr: Date[]) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ cabin, bookedDates, settings }: { 
  cabin: CabinType,
  bookedDates: Date[],
  settings: SettingsType,
 }) {
  const emptyRange: ReservationRange = { from: undefined, to: undefined }

  const { range, setRange, resetRange } = useReservation();

  const displayRange: ReservationRange = isAlreadyBooked(range, bookedDates) ? emptyRange : range;

  const { regularPrice, discount } = cabin;

  const numNights =
    displayRange.from && displayRange.to
      ? differenceInDays(displayRange.to, displayRange.from)
      : 0;
  const cabinPrice = numNights * (regularPrice! - discount!);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className={`rdp pt-12 place-self-center`}
        mode="range"
        onSelect={(range) => {
          if (range) {
            setRange({ from: range.from, to: range.to });
          } else {
            setRange({ from: undefined, to: undefined });
          }
        }}
        selected={displayRange}
        min={minBookingLength ? minBookingLength + 1 : 1}
        max={maxBookingLength || undefined}
        fromMonth={new Date()}
        hidden={{ before: new Date() }}
        // toYear={new Date().getFullYear() + 5}
        toMonth={new Date(new Date().getFullYear() + 5, 0)}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((bookedDate) => isSameDay(new Date(bookedDate), curDate))
        }
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount! > 0 ? (
              <>
                <span className="text-2xl">${regularPrice! - discount!}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
