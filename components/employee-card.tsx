import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface IProps {
  firstname: string;
  lastname: string;
  nickname: string;
  position: string;
  profile_picture: string;
}

function EmployeeCard(props: IProps) {
  const { firstname, lastname, nickname, position, profile_picture } = props;
  return (
    <Card className="text-center">
      <CardHeader>
        <AspectRatio ratio={1 / 1} className="bg-muted">
          <Image
            src={profile_picture}
            alt="profile picture"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <p>
          <b>
            {firstname} {lastname}
          </b>
        </p>
        <p>({nickname})</p>
        <p className=" text-sm">{position}</p>
      </CardContent>
    </Card>
  );
}

export default EmployeeCard;
