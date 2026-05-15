import { Cases } from "@/Components/AdminComponents/Cases/Cases";
import { requireAdminSessionOrRedirect } from "@/lib/adminAuth";
import { prisma } from "@/lib/prisma";

export default async function page() {
  await requireAdminSessionOrRedirect("/admin-boza");

  const [cases, engCases] = await Promise.all([
    prisma.case.findMany({
      orderBy: {
        order: "asc",
      },
    }),
    prisma.caseEng.findMany({
      select: {
        id: true,
        slug: true,
        isPublished: true,
      },
    }),
  ]);

  const engBySlug = Object.fromEntries(
    engCases.map((item) => [item.slug, item]),
  );

  return (
    <div>
      <Cases cases={cases} engBySlug={engBySlug} />
    </div>
  );
}
