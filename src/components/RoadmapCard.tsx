import { useObserve } from "@/hooks";
import { FC } from "react";

interface RoadmapCardProps {
  flexEnd: boolean;
  title: string;
  desc: string;
}

const RoadmapCard: FC<RoadmapCardProps> = ({ flexEnd, title, desc }) => {
  const { isObserved, dom } = useObserve();

  return (
    <div
      className={`flex mt-2 ${flexEnd && "justify-end text-right"} ${
        isObserved && "animate__animated animate__fadeInUp"
      }`}
      ref={dom}
    >
      <div className="bg-blue-50 w-fit shadow-lg px-4 py-2 rounded-2xl">
        <div>{title}</div>
        <div className="text-sm mt-1 text-gray-700">{desc}</div>
      </div>
    </div>
  );
};

export default RoadmapCard;
