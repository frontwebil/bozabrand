import { Cases } from "@/Components/AdminComponents/Cases/Cases";
import { requireAdminSessionOrRedirect } from "@/lib/adminAuth";
import { prisma } from "@/lib/prisma";

export default async function page() {
  await requireAdminSessionOrRedirect("/admin-boza");

  const cases = await prisma.case.findMany({
    orderBy: {
      order: "asc",
    },
  });

  return (
    <div>
      <Cases cases={cases} />
    </div>
  );
}
