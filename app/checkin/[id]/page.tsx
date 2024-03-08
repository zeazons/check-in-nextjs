import CheckInCard from "@/components/checkIn/check-in-card";
import EmployeeInfo from "@/components/employee-info";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function CheckIn({ params }: { params: { id: string } }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { id } = params;

  let { data: empList, error } = await supabase
    .from("employee")
    .select("*")
    .like("emp_id", `%${id}%`);

  if (!empList || empList?.length < 1) {
    return <p className=" color-red">ไม่พบข้อมูลพนักงาน</p>;
  }

  return (
    <div className=" container grid grid-cols-1 justify-start gap-4">
      <Link href={"/"}> &#60; ย้อนกลับ</Link>
      <div className=" grid justify-center text-center">
        <EmployeeInfo {...empList[0]} />

        <CheckInCard id={empList[0].emp_id} />
      </div>
    </div>
  );
}
