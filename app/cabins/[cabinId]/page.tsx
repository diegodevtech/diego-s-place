// import Reservation from "@/app/_components/Reservation";
import Cabin from "@/app/_components/Cabin";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_service/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }: { params: { cabinId: number } }) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return { title: `Cabin ${name}` };
}

// ENSURING ALL THE DYNAMIC PAGES TO BE STATIC
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return ids;
}

// LOTS OF FETCHING TO PREVENT CLIENT COMPONENTS TO FETCH, DATA WILL PASS DOWN AS PROPS
export default async function Page({ params }: { params: { cabinId: number } }) {
  // TIME-BLOCKING SECTION - AVOID THIS
  // const cabin = await getCabin(params.cabinId);
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(params.cabinId);

  // APPROACH FOR TIME-BLOCKING SECTIONS
  // const [cabin, settings, bookedDates] = await Promise.all([
  //   getCabin(params.cabinId),
  //   getSettings(),
  //   getBookedDatesByCabinId(params.cabinId),
  // ]);

  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    // <div className="border-2">
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        {/* <Suspense fallback={<Spinner />} key={cabin.id}>
          <Reservation cabin={cabin} />
        </Suspense> */}
      </div>
    </div>
  );
}
