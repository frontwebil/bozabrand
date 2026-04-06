import { revalidatePath } from "next/cache";

export function revalidateCasePages(params: { slug?: string; caseId?: number }) {
  revalidatePath("/cases");

  if (params.slug) {
    revalidatePath(`/cases/${params.slug}`);
  }

  if (typeof params.caseId === "number") {
    revalidatePath(`/admin-boza/cases/constructor/${params.caseId}`);
  }
}
