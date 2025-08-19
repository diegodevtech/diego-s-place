"use client";

import { differenceInDays } from "date-fns";
import Image from "next/image";
// import { createBooking } from "../_service/actions";
import { useState } from "react";
import { useReservation } from "../_contexts/ReservationContext";
import { CabinType } from "../_types";
import SubmitButton from "./SubmitButton";

function ReservationForm({ cabin, user }: {
  cabin: CabinType,
  user
}) {
  const [numOfGuests, setNumOfGuests] = useState("");

  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id: cabinId } = cabin;
  const startDate = range.from;
  const endDate = range.to;
  const numNights = startDate && endDate ? differenceInDays(endDate, startDate) : 0;
  const totalPrice = numNights * ((regularPrice ?? 0) - (discount ?? 0));

  const bookingData = {
    startDate,
    endDate,
    numNights,
    totalPrice,
    cabinId,
    cabinPrice: regularPrice,
  };

  // WORKAROUND TO PASS ADDITIONAL DATA ALONSIDE THE FORMDATA
  // const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <Image
            // Important to display google profile images
            width={32}
            height={32}
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        // action={createBookingWithData}
        action={async (formData) => {
          resetRange();
          // await createBookingWithData(formData);
        }}
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            value={numOfGuests}
            onChange={(e) => setNumOfGuests(e.target.value)}
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity! }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <p className="text-primary-300 text-base">Start by selecting dates</p>

          <SubmitButton
            extraDisable={!(startDate && endDate && numOfGuests)}
            pendingLabel="Reserving..."
          >
            Reserve Now
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
