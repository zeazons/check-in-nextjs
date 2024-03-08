import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

interface IProps {
  firstname: string;
  lastname: string;
  nickname: string;
  position: string;
  profile_picture: string;
}

function EmployeeInfo(props: IProps) {
  const { firstname, lastname, nickname, position, profile_picture } = props;
  return (
    <div className=" grid gap-2">
      <AspectRatio ratio={1 / 1} className="bg-muted">
        <Image
          src={profile_picture}
          alt="profile picture"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>

      <p>
        <b>
          {firstname} {lastname}
        </b>
      </p>
      <p>({nickname})</p>
      <p className=" text-sm">{position}</p>
    </div>
  );
}

export default EmployeeInfo;
