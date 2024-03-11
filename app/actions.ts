"use client";

import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export const fetchEmployee = async () => {
  let { data: employee, error } = await supabase
    .from("employee")
    .select()
    .order("emp_id");

  return employee;
};
