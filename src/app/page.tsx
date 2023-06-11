"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link, Element } from "react-scroll";

import TeamCard from "@/components/TeamCard";
import RoadmapCard from "@/components/RoadmapCard";

const Home = () => {
  return (
    <div className="max-w-screen-md mx-auto shadow-lg min-h-screen text-black font-bold">
      <header className="bg-white sticky top-0 z-10  w-full h-fit shadow-sm">
        <div className="text-xs text-center bg-red-600 text-white hidden sm:block">
          이 페이지는 모바일 사이즈에 최적화 되어있습니다.
        </div>
        <div className="flex justify-between items-center px-4 py-2">
          <div className="text-xl font-kcc">가 보 자 고 !</div>
          <div className="text-sm">
            <Link to="intro" smooth={true}>
              <button className=" text-purple-500 hover:text-purple-300">
                가보자고?
              </button>
            </Link>
            <Link to="story" smooth={true}>
              <button className="ml-2 text-purple-500 hover:text-purple-300">
                스토리
              </button>
            </Link>
            <Link to="roadmap" smooth={true}>
              <button className="ml-2 text-purple-500 hover:text-purple-300">
                로드맵
              </button>
            </Link>
            <Link to="team" smooth={true}>
              <button className="ml-2 text-purple-500 hover:text-purple-300">
                팀
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className="relative">
          <Image
            className=""
            src="/images/coffee.png"
            width={564}
            height={846}
            alt="coffee"
          />
        </div>
        <Element name="intro" className="flex flex-col items-center mt-8 px-2">
          <div className="w-full text-sm">
            가보자고(gabozago)는 ‘더 맛있는 것을 쫓는’ 사람들을 위해
            태어났습니다.
          </div>
          <div className="w-full text-sm mt-4">
            가보자고(gabozago)는 NFT민팅을 통해 신메뉴 개발의 과정에서
            외식업체와 이용자를 이어주는 WEB 3플랫폼입니다.
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
            <div className="w-32 h-32 bg-purple-200 rounded-full flex justify-center items-center text-2xl text-gray-700 font-kcc">
              가 보 자 고
            </div>
          </div>
          <div className="w-full text-sm mt-4">
            메뉴 개발부터 마케팅까지, 신메뉴 개발에 들어가는 막대한 비용 부담을
            낮추어 외식업체에게 도움을 주고, 항상 새롭고 트렌디한 메뉴를
            찾아다니는 이용자들의 니즈를 충족시켜줍니다.
          </div>
          <div className="w-full text-sm mt-4">
            신메뉴는 F&B의 성장 동력이면서 아이덴티티 입니다. <br />
            가보자고(gabozago)는 음식이 갖고있는 가치와 스토리를 전달하고
            온/오프라인을 연계함으로써 경험의 확장을 돕고자 합니다.
          </div>
        </Element>
        <Element name="story" className="mt-8 px-2">
          <div className="text-2xl mb-4">스토리</div>
          <div className="-mx-2">
            <Carousel>
              <div>
                <Image
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
                  src="/images/2.png"
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
                  src="/images/3.png"
                  width={120}
                  height={120}
                  alt="Holder"
                />
                <p className="legend">
                  배고픈 토끼는 배부른 토끼가 되었답니다!
                </p>
              </div>
            </Carousel>
          </div>
        </Element>
        <Element name="roadmap px-2">
          <div className="text-2xl mb-4">로드맵</div>
          <div className="text-lg">Pre Season (22.10. ~ 23.04)</div>
          <RoadmapCard
            flexEnd={false}
            title="팀 결성"
            desc="로컬 맛집 혁신을 위해 블록체인과 Web3에 관심이 있던 개발자와 기획자가
          모여서 팀을 결성하였습니다."
          />
          <RoadmapCard
            flexEnd={true}
            title="전체 기획"
            desc="지속적인 지역 로컬 맛집 발견을 위해 프로젝트 '가보자고'는 시즌제로 운영하기로 결정하였습니다."
          />
          <RoadmapCard
            flexEnd={false}
            title="로컬 맛집 섭외"
            desc="가보자고 NFT 홀더들에게 다양한 로컬 맛집을 선보이기위해 시즌 1 맛집 리스트를 엄선하여 선별하였습니다."
          />
          <RoadmapCard
            flexEnd={true}
            title="최종 준비 단계"
            desc="성공적인 시즌 1 개최를 위한 마케팅, 민팅 계획을 최종적으로 점검하였습니다."
          />
          <div className="text-lg mt-4">Season 1 (23.06. ~ 23.12)</div>
          <RoadmapCard
            flexEnd={false}
            title="팀 결성"
            desc="로컬 맛집 오너 NFT 30개, 가보자고 NFT 500개로 최종 민팅 수량을 결정하고 6월 30일에 민팅을 진행할 예정입니다."
          />
          <RoadmapCard
            flexEnd={true}
            title="커뮤니티 구축"
            desc="로컬 맛집 오너들과 가보자고 홀더들이 교류할 수 있는 디스코드 채널을 개설하였습니다."
          />
          <RoadmapCard
            flexEnd={false}
            title="지속적인 업데이트"
            desc="'가보자고'는 멈춰있는 프로젝트가 아닙니다. 지속적인 업데이트와 이벤트를 통해 로컬 맛집 오너들과 가보자고 홀더들에게 혜택이 갈 수 있게 만들어가는 중입니다."
          />
        </Element>
        <Element name="team" className="mt-8 px-2">
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
        </Element>
      </main>

      <footer className="mt-16"></footer>
    </div>
  );
};

export default Home;
