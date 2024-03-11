"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import Image from "next/image";

import { IEmpProps } from "@/app/type";

function EmployeeCard(props: IEmpProps) {
  const { firstname, lastname, nickname, position, profile_picture } = props;
  return (
    <Card className=" pb-2 text-center">
      <AspectRatio ratio={1 / 1} className="m-2 bg-muted">
        <Image
          src={profile_picture}
          alt="profile picture"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>

      <p className=" text-sm">
        <b>
          {firstname} {lastname}
        </b>
      </p>
      <p className=" text-sm">({nickname})</p>
      <p className=" text-xs">{position}</p>
    </Card>
  );
}

export default EmployeeCard;
