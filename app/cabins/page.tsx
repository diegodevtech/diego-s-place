import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import CabinList from "../_components/CabinList";
import Filter from "../_components/Filter";

export const metadata = {
  title: "Cabins",
};

// SEARCH PARAMS MAKES THE PAGE DYNAMIC
export default async function Page({ searchParams }: { searchParams: { capacity?: 'all' | 'small' | 'medium' | 'large' } }) {
  const { capacity } = await searchParams;
  const filter = capacity ?? 'all';

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Amazon rainforest. Imagine waking up inside the jungle, spending your
        days exploring the   forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        {/* CLIENT-COMPONENT IN SERVER-COMPONENT */}
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter ? JSON.stringify(filter) : undefined}>
        <CabinList filter={filter} />
        {/* <ReservationReminder /> */}
      </Suspense>
    </div>
  );
}
