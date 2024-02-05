import { Footer, Header, Profile } from "@/components";
import { Gloria_Hallelujah } from "next/font/google";
import styles from "@/styles/Profile.module.css";
const gloria = Gloria_Hallelujah({ subsets: ["latin"], weight: "400" });
import plus from "@@/icons/plus.svg"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="lg:h-[50vh] md:h-[50vh] h-[20vh] bg-cover bg-center origin-center bg-no-repeat  bg-[url('../../public/images/hero-image.png')]"></div>
        <p
          className={`${gloria.className} bg-[#292828] text-center text-[24px] text-nowrap overflow-hidden leading-[47.58px] text-white`}
        >
          John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill /
          Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator /
          Moved to NYC / 27.11.22 / Live now
        </p>
        <div className="relative h-[170px] md:h-[90px]">
          <Profile />
        </div>
        <div className="md:mx-[86px] mx-4">
          <div className="flex flex-wrap  gap-4 flex-col-reverse md:flex-row justify-between items-center md:my-10 my-20">
            <div className={styles.recklessNeue}>
              <p className="text-[28px] font-[400] leading-[33.59px]">
                Releases
              </p>
              <p>
                Videos that you upload in collaboration with aBit appear here.
              </p>
            </div>
            <div className="flex gap-5 flex-wrap">
              <div className="border border-transparent border-l-[0.5px] px-[10px] border-l-[#7A7A7A]">
                <p className=" font-[700] text-[16px] leading-[25.6px]">1</p>
                <p className="text-[#696969] w-1/2">Shared Videos</p>
              </div>
              <div className="border border-transparent border-l-[0.5px] px-[10px] border-l-[#7A7A7A]">
                <p className=" font-[700] text-[16px] leading-[25.6px]">$9510</p>
                <p className="text-[#696969] w-1/2">Funds Raised</p>
              </div>
              <div className="border border-transparent border-l-[0.5px] px-[10px] border-l-[#7A7A7A]">
                <p className=" font-[700] text-[16px] leading-[25.6px]">317</p>
                <p className="text-[#696969] w-1/2">Co-owner community</p>
              </div>
              <div  className="border border-transparent border-l-[0.5px] px-[10px] border-l-[#7A7A7A]">
                <p className=" font-[700] text-[16px] leading-[25.6px]">$3804</p>
                <p className="text-[#696969] w-2/3">Co-owner Earnings</p>
              </div>
            </div>
          </div>
          <div className="my-4 flex justify-center min-h-[80vh] md:justify-start items-start gap-5 flex-wrap">
            <div className="w-[283.64px] flex-col  bg-[#EDEDED] h-[312px] flex justify-between rounded-3xl">
              <div className="h-4/5 flex justify-center text-[#959595] items-center">
                <Image src={plus} alt="add" className="h-[32px] w-[32px] " />
              </div>
              <p className="mb-6 w-[4/5] text-[#A0A0A0] font-[400] text-center">You haven&apos;t uploaded any videos with aBit yet. Add now!</p>
            </div>
            <div className="w-[283.64px] flex justify-between bg-cover bg-center bg-no-repeat object-cover text-white  bg-[url('../../public/images/monk.png')] shadow-[4px_0px_5px_0px_#00000040,-4px_0px_5px_0px_#00000040] flex-col h-[312px] rounded-3xl">
              <p className="m-4 font-[700] text-[20px] leading-[24.2px] ">The Sound of Silence</p>
              <div className="bg-[#FFFFFF33] mb-4 mx-4 flex justify-between items-center p-4 rounded-xl">
                <div>
                  <p className="font-[500] text-center text-[12px] leading-[14.52px] pb-1">Shares</p>
                  <p className="font-[700] text-center leading-[16.94px]">317</p>
                </div>
                <div>
                  <p className="font-[500] text-center text-[12px] leading-[14.52px] pb-1">Offered</p>
                  <p className="font-[700] text-center leading-[16.94px]">75%</p>
                </div>
                <div>
                  <p className="font-[500] text-center text-[12px] leading-[14.52px] pb-1">Raised</p>
                  <p className="font-[700] text-center leading-[16.94px]">$9510</p>
                </div>
              </div>
            </div>
          </div>
            <Footer />
        </div>
      </main>
    </>
  );
}
