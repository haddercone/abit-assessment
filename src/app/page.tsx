import { Header, Profile } from "@/components";
import {Gloria_Hallelujah} from "next/font/google"

const gloria = Gloria_Hallelujah({subsets: ['latin'], weight:'400'})

export default function Home() {
  return (
    <>
      <Header />
      <main>
          <div className="lg:h-[50vh] md:h-[50vh] h-[20vh] bg-cover origin-center bg-no-repeat  bg-[url('../../public/images/hero-image.png')]"></div> 
          <p className={`${gloria.className} bg-[#292828] text-center text-[24px] text-nowrap overflow-hidden leading-[47.58px] text-white`}>John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now</p>
          <div className="relative">
            <Profile />
          </div>
      </main>
    </>
  );
}
