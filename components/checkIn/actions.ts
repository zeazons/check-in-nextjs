import { createClient } from "@/utils/supabase/client";
import dayjs from "dayjs";

export const getTodayCheckin = async (id: string) => {
  const supabase = createClient();

  const date1: Date = new Date();
  const date2: Date = new Date();

  date1.setHours(0, 0, 0, 0);
  date2.setDate(date2.getDate() + 1);

  const dateString1: string = dayjs(date1).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
  const dateString2: string = dayjs(date2).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

  try {
    let { data: checkinList, error } = await supabase
      .from("checkin")
      .select("*")
      .eq("emp_id", id)
      .lt("checked_in_at", dateString2)
      .gt("checked_in_at", dateString1);

    return checkinList;
  } catch (error) {
    console.error("error: ", error);
  }
};

export const checkin = async (id: string) => {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from("checkin")
      .insert([{ checked_in_at: new Date(), emp_id: id }])
      .select();

    return data;
  } catch (error) {
    console.error("error: ", error);
  }
};
