import { auth } from "../_service/auth";
import { getBookedDatesByCabinId, getSettings } from "../_service/data-service";
import { CabinType } from "../_types";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

export default async function Reservation({ cabin }: { cabin: CabinType }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <div className="md:grid md:grid-cols-[1.5fr_1fr] lg:grid-cols-2 border border-primary-800 md:min-h-[400px] md:mb-0 mb-8">
      {/* <div className="grid grid-cols-[1.5fr_1fr] border border-primary-800 min-h-[400px]"> */}
      <DateSelector
        cabin={cabin}
        bookedDates={bookedDates}
        settings={settings}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
