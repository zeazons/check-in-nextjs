"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { AlertDialogFooter, AlertDialogHeader } from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { checkin, getTodayCheckin } from "./actions";
import CurrentTime from "./current-time";

interface ICheckIn {
  checked_in_at: string;
  checked_out_at: string | null;
  emp_id: string;
  id: number;
}

interface IProps {
  id: string;
}

export default function CheckInCard(props: IProps) {
  const { id } = props;
  const [open, setOpen] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState<null | boolean>(null);
  const [lastCheckIn, setLastCheckIn] = useState<ICheckIn>();

  const verifindCheckIn = (checkinList: ICheckIn[]) => {
    if (checkinList && checkinList?.length > 0) {
      setIsCheckedIn(true);
      setLastCheckIn(checkinList[0]);
    } else {
      setIsCheckedIn(false);
    }
  };

  const loadInital = async () => {
    const checkinList = await getTodayCheckin(id);

    verifindCheckIn(checkinList as []);
  };

  const handleCheckIn = async () => {
    setOpen(true);
    const checkinList = await checkin(id);

    verifindCheckIn(checkinList as []);
  };

  useEffect(() => {
    loadInital();
  }, []);

  if (isCheckedIn === null) {
    return (
      <>
        <div className=" flex justify-center my-4">
          <Icon icon="eos-icons:loading" fontSize={50} />
        </div>
        <p>กำลังโหลดข้อมูล</p>
      </>
    );
  }

  return (
    <>
      <br />
      {isCheckedIn ? (
        <>
          <p className=" text-green-500">เข้างานแล้วเมื่อเวลา: </p>
          <br />
          <p className=" text-xl text-green-500">
            <b>{dayjs(lastCheckIn?.checked_in_at).format("HH:mm:ss")}</b>
          </p>
        </>
      ) : (
        <>
          <CurrentTime />
          <br />
          <Button disabled={isCheckedIn} onClick={handleCheckIn}>
            กดเข้างาน
          </Button>
        </>
      )}

      <AlertDialog open={open}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Check-in สำเร็จ</AlertDialogTitle>
            <AlertDialogDescription>
              อย่าลืมขอเพิ่มเวลาที่ HumanSoft ด้วยนะ
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
            <AlertDialogAction
              onClick={() => {
                setOpen(false);
              }}
            >
              ตกลง
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
