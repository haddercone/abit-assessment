import Image from "next/image";
import React from "react";
import profile from "@@/images/profile.jpeg";
import styles from "@/styles/Profile.module.css";

const Profile = () => {
  return (
    <div className="absolute md:left-[83px] px-4 md:px-0  flex -top-[160px] min-h-[234px] md:w-[571px]">
      <Image
        src={profile}
        alt="card"
        className="hidden md:block md:w-[234px] md:min-h-[234px] w-24 rounded-l-3xl shadow-[-3px_-7px_14px_0px_#0000001C]"
      />
      <div className="bg-[url('../../public/images/nav-background.jpeg')] md:w-[337px] px-10 py-5 rounded-3xl md:rounded-r-3xl md:rounded-none shadow-[2px_-1px_14px_0px_#00000096]">
      <Image
        src={profile}
        alt="card"
        className="md:hidden md:w-[234px] md:min-h-[234px] w-24 rounded-3xl shadow-[-3px_-7px_14px_0px_#0000001C]"
      />
        <div className="flex justify-between items-center py-4">
          <p className="font-[700px] text-[24px] leading-[29.05px]">DAN MACE</p>
          <p className="font-[400px] text-[14px] text-[#696969]">
            /Johny_Films/
          </p>
        </div>
        <div className="text-[#696969]">
          <p className=" font-bold">Bio</p>
          <p>
            Simply a film fan creating original content for YouTube. Let&apos;s
            Collaborate.
          </p>
        </div>
        <div className="bg-[#696969] rounded my-2 flex items-center">
          <button
            className={`${styles.recklessNeue} w-1/2 bg-white font-[400] text-[14px] leading-[22.4px] text-center border-[1px] border-black rounded`}
          >
            Creator
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
