import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGoogle, FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import Image from "next/image";

export default function Footer() {
  return (
    <main className="px-4 py-8 mt-10 bg-[#F99F1C] flex justify-center lg:py-6 lg:px-8 ">
      <section className=" w-full flex flex-col justify-center gap-10 lg:w-[67%] ">
        {/* Subscription bar */}
        <div className="w-full flex items-center justify-between bg-[#FFFFFF] px-2 py-1 rounded-2xl lg:w-[70%]">
          <input
            type="text"
            placeholder="Enter Your Email"
            className=" outline-none text-sm p-2"
          />
          <button className="flex items-center text-sm text-[#FD6011] lg:bg-[#FD6011] lg:text-white px-2 py-1 rounded-xl">
            Subscribe
            <IoIosArrowRoundForward className=" text-2xl" />
          </button>
        </div>
        {/* Copyright and social links */}
        <div className=" flex flex-col-reverse items-center gap-5 lg:flex-row justify-between lg:items-end lg:w-[75%]">
          {/* Copyright text */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold mb-2">
              pti<span className="text-[#FD6011]">.</span>
            </h1>
            <p className=" text-xs font-bold">
              Copyright &copy; Tripp. All Right Reserved
            </p>
          </div>
          {/* Social icon and links */}
          <div className=" flex items-center gap-2">
            <div className="bg-[#FD6011] lg:bg-[#FEDDBA] lg: w-7 h-7 flex justify-center items-center rounded-full">
              <FaGoogle className="text-[#FEDDBA] lg:text-[#FD6011]" />
            </div>
            <div className="bg-[#FD6011] lg:bg-[#FEDDBA] w-7 h-7 flex justify-center items-center rounded-full">
              <SlSocialTwitter className="text-[#FEDDBA] lg:text-[#FD6011]" />
            </div>
            <div className="bg-[#FD6011] lg:bg-[#FEDDBA] w-7 h-7 flex justify-center items-center rounded-full">
              <FaInstagram className="text-[#FEDDBA] lg:text-[#FD6011]" />
            </div>
          </div>
        </div>
      </section>
      <section className="hidden lg:block">
        <Image
          src="/Image2.png"
          objectFit="cover"
          width={300}
          height={300}
          alt="Screenshots of the dashboard project showing desktop version"
          className="mr-10"
        />
      </section>
    </main>
  );
}
