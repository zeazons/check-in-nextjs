"use client";

import { useEffect, useState } from "react";

import { fetchEmployee } from "@/app/actions";
import { IEmpProps } from "@/app/type";
import Link from "next/link";
import EmployeeCard from "./employee-card";
import { FilterForm } from "./filter-form";

export default function EmployeeList() {
  const [employeeList, setEmployeeList] = useState<IEmpProps[]>([]);
  const [employeeFilter, setEmployeeFilter] = useState<IEmpProps[]>([]);

  const initData = async () => {
    const empList = await fetchEmployee();

    setEmployeeList(empList as []);
    setEmployeeFilter(empList as []);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchKeyword = e.target.value;

    if (searchKeyword) {
      const empFilterList = employeeList.filter((emp) => {
        return emp.nickname.search(searchKeyword) >= 0;
      });

      setEmployeeFilter(empFilterList);
    } else {
      setEmployeeFilter(employeeList);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <>
      <div className=" grid-cols-12 ">
        <FilterForm onChange={handleFilter} />
      </div>
      <div className=" xs:grid-cols-2 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {employeeFilter &&
          employeeFilter?.map((emp: IEmpProps) => (
            <Link href={`/checkin/${emp.emp_id}`} key={emp.emp_id}>
              <EmployeeCard {...emp} />
            </Link>
          ))}
      </div>
    </>
  );
}
