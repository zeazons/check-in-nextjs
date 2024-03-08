import EmployeeCard from "@/components/employee-card";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  let { data: employee, error } = await supabase
    .from("employee")
    .select()
    .order("emp_id");

  return (
    <div className=" container grid grid-cols-4 gap-4">
      {employee?.map((emp) => (
        <Link href={`/checkin/${emp.emp_id}`} key={emp.emp_id}>
          <EmployeeCard {...emp} />
        </Link>
      ))}
    </div>
  );
}
