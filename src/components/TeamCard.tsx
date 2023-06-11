import { FC } from "react";
import Image from "next/image";

interface TemaCardProps {
  imageSrc: string;
  nameColor: string;
  name: string;
  job: string;
  position: string;
}

const TeamCard: FC<TemaCardProps> = ({
  imageSrc,
  nameColor,
  name,
  job,
  position,
}) => {
  return (
    <div className="w-40 rounded-2xl shadow-lg">
      <Image
        className="rounded-t-2xl"
        src={imageSrc}
        width={160}
        height={160}
        alt="image"
      />
      <div className="m-2">
        <div className={`text-lg ${nameColor}`}>{name}</div>
        <div className="text-gray-600 text-xs">{job}</div>
        <div className="text-lg">{position}</div>
      </div>
    </div>
  );
};

export default TeamCard;
