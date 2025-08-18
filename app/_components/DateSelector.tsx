"use client";

import { differenceInDays, isPast, isSameDay, isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import { BookedDate, CabinType, ReservationRange } from "../_types";
import { useReservation } from "../_contexts/ReservationContext";

function isAlreadyBooked(range: ReservationRange, datesArr: BookedDate[]) {
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
  bookedDates: BookedDate[],
  settings: any,
 }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice! - discount!);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        // className="rdp"
        className={`rdp pt-12 place-self-center`}
        mode="range"
        // onSelect={(range) => setRange(range)}
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        hidden={{ before: new Date() }}
        // toYear={new Date().getFullYear() + 5}
        endMonth={new Date(new Date().getFullYear() + 5, 0)}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date: Date) => isSameDay(date, curDate))
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
