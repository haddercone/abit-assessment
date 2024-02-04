import Image from "next/image";
import wallet from "@@/icons/wallet.svg";
import bell from "@@/icons/bell.svg";
import downArrow from "@@/icons/down-arrow.svg";
import profile from "@@/images/profile.jpeg";
const Header = () => {
  return (
    <nav
      className="flex px-5 h-[110px] items-center border-[1px] bg-cover bg-no-repeat opacity-95 object-cover bg-[url('../../public/images/nav-background.jpeg')]"
    >
      <div className="grow">
        <span className="text-[#292D32] md:ml-[123px] font-[700] text-[24px]">
          aBit
        </span>
      </div>
      <ul className="grow flex justify-end items-center gap-[10px]">
        <li>
          <button className="text-[12px] font-[700px] px-[22px] rounded-full py-[10px] text-[#764CC2] border-[2px] border-[#764CC2] ">
            Share new video
          </button>
        </li>
        <li className="hidden md:block">
          <Image className="w-7 h-7" src={wallet} alt="wallet" />
        </li>
        <li className="hidden md:block">
          <Image src={bell} alt="bell" />
        </li>
        <li>
          <Image
            src={profile}
            alt="profile"
            className="rounded-full w-[31px] bg-image-gradient h-[32px] border-[1px] border-black"
          />
        </li>
        <li>
          <Image src={downArrow} alt="bell" />
        </li>
      </ul>
    </nav>
  );
};

// background: linear-gradient(0deg, #000000, #000000), linear-gradient(0deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.11));
// background: linear-gradient(0deg, #000000, #000000),linear-gradient(0deg, rgba(217, 224, 236, 0.2), rgba(217, 224, 236, 0.2)),linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));

export default Header;
