import { AddCaseForm } from "@/Components/AdminComponents/AddCaseForm/AddCaseForm";
import { requireAdminSessionOrRedirect } from "@/lib/adminAuth";

export default async function page() {
  await requireAdminSessionOrRedirect("/admin-boza");
  return (
    <div>
      <AddCaseForm />
    </div>
  );
}
