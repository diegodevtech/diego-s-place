import { getCabins } from "../_service/data-service";
import CabinCard from "./CabinCard";
// RESETTING CACHE
// import { unstable_noStore } from "next/cache"

export default async function CabinList({
  filter,
}: {
  filter: "all" | "small" | "medium" | "large";
}) {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let filteredCabins;
  if (filter === "all") filteredCabins = cabins;
  if (filter === "small")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity! <= 3);
  if (filter === "medium")
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity! > 3 && cabin.maxCapacity! <= 7
    );
  if (filter === "large")
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity! > 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins?.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
