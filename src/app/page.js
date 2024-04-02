import HeroFinal from "@/components/HeroFinal";
import HeroIntro from "@/components/HeroIntro";
import HeroQuest from "@/components/HeroQuest";
import HeroTest from "@/components/HeroTest.jsx";
import LandingPage from "@/components/LandingPage.jsx";
import Image from "next/image";
import WB from "../../public/WB.png"

export default function Home() {
  return (
    <>
      <div>

        <LandingPage />
        <div className=" w-full flex flex-col items-center justify-center">

          <HeroIntro />
          <HeroQuest />
          <div className="m-[3rem]">
            <HeroTest />
          </div>
          <HeroFinal />
          <div className="mt-[10rem]"></div>
        </div>
        <div className="w-full sticky bottom-[5rem] flex justify-end" >
          <div className="relative right-5 bg-white w-[4rem] flex justify-center items-center rounded-[3rem] border-2 border-green-400 h-[3rem] duration-1000">
            <a href={"https://wa.me/7451034603"} target="_blank">
            <Image src={WB} width={100} height={100} className="w-[2rem] h-[2rem] hover:w-[2.2rem] hover:h-[2.2rem] duration-100" />

            </a>
          </div>
        </div>
      </div>
    </>
  );
}


