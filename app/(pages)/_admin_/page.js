import BerandaAdmin from "@/app/components/Admin/BerandaAdmin";
import { getReservation } from "@/app/prisma/reservation";

async function DashboardPage() {
  const data = await getReservation();
  return (
    <>
    {console.log(data)}
      <BerandaAdmin />
    </>
  );
}

export default DashboardPage;
