"use client";

import Clock from "react-live-clock";

function CurrentTime() {
  return (
    <b className=" text-xl">
      <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Bangkok"} />
    </b>
  );
}

export default CurrentTime;
