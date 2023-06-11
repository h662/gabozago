"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import TeamCard from "@/components/TeamCard";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  return (
    <div className="max-w-screen-md mx-auto shadow-lg min-h-screen text-black font-bold font-kcc">
      <header className="px-4 py-2 flex justify-between items-center w-full h-fit shadow-sm">
        <div className="text-xl">가 보 자 고 !</div>
        <div className="text-sm">
          <button className=" text-purple-500 hover:text-purple-300">
            가보자고?
          </button>
          <button className="ml-2 text-purple-500 hover:text-purple-300">
            스토리
          </button>
          <button className="ml-2 text-purple-500 hover:text-purple-300">
            로드맵
          </button>
          <button className="ml-2 text-purple-500 hover:text-purple-300">
            팀
          </button>
        </div>
      </header>

      <main className="px-2">
        <div className="flex flex-col items-center mt-8">
          <div className="w-full text-sm">
            WEB3 프로젝트 &apos;가보자고&apos;는
            <br /> 로컬 맛집 활성화를 위해 탄생하였습니다.
          </div>
          <div className="mt-4">
            <Image
              src="/images/restaurant.png"
              width={120}
              height={120}
              alt="restaurant"
            />
          </div>
          <div className="flex mt-8 gap-8">
            <Image
              className="rounded-full"
              src="/images/1.png"
              width={120}
              height={120}
              alt="Holder"
            />
            <div className="w-32 h-32 bg-purple-200 rounded-full flex justify-center items-center text-2xl text-gray-700">
              가 보 자 고
            </div>
          </div>
          <div className="w-full mt-4 text-right text-sm">
            NFT 홀더들에게 지역기반의 숨은 찐 맛집을 소개하고,
            <br />
            식당은 Web3 커뮤니티 기반으로 마케팅 활동을 할 수
          </div>
        </div>
        <div>
          <div className="text-2xl mb-4">스토리</div>
          <Carousel>
            <div>
              <Image
                className="rounded-full"
                src="/images/1.png"
                width={120}
                height={120}
                alt="Holder"
              />
              <p className="legend">
                옛날 옛날에 배고픈 토끼가 살고 있었습니다.
              </p>
            </div>
            <div>
              <Image
                className="rounded-full"
                src="/images/1.png"
                width={120}
                height={120}
                alt="Holder"
              />
              <p className="legend">
                토끼는 지역 로컬 찐 맛집 식당을 찾아냈습니다.
              </p>
            </div>
            <div>
              <Image
                className="rounded-full"
                src="/images/1.png"
                width={120}
                height={120}
                alt="Holder"
              />
              <p className="legend">배고픈 토끼는 배부른 토끼가 되었답니다!</p>
            </div>
          </Carousel>
        </div>
        <div>
          <div className="text-2xl mb-4">로드맵</div>
        </div>
        <div>
          <div className="text-2xl mb-4">팀 소개</div>
          <div className="grid grid-cols-2 gap-6 justify-items-center">
            <TeamCard
              imageSrc="/images/1.png"
              nameColor="text-blue-400"
              name="h662"
              job="프로그래머"
              position="PM"
            />
            <TeamCard
              imageSrc="/images/2.png"
              nameColor="text-yellow-300"
              name="abcdami"
              job="기획"
              position="기획 및 디자인"
            />
            <TeamCard
              imageSrc="/images/3.png"
              nameColor="text-pink-300"
              name="SEON"
              job="프로그래머"
              position="스마트컨트랙트"
            />
            <TeamCard
              imageSrc="/images/4.png"
              nameColor="text-purple-500"
              name="SilverSideDish"
              job="프로그래머"
              position="프론트엔드"
            />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
