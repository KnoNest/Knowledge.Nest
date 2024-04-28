import HeroFinal from "@/components/HeroFinal";
import HeroIntro from "@/components/HeroIntro";
import HeroQuest from "@/components/HeroQuest";
import HeroTest from "@/components/HeroTest.jsx";
import LandingPage from "@/components/LandingPage.jsx";
import Support from "@/components/Support";
import BoardAdvisory from "@/components/BoardAdvisory";

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
        <div className="w-full sticky bottom-[5rem] flex justify-end">
          <Support />
        </div>
        <BoardAdvisory />
      </div>
    </>
  );
}


