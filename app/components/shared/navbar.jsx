import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";

export default function Navbar() {
  return (
    <main className="flex justify-center items-center p-3">
      <div>
        <h1 className="text-2xl font-bold">pti.</h1>
      </div>
      <div className="flex justify-center items-center gap-2 flex-1">
        {/* Search bar */}
        <div className="flex items-center bg-[#FEFEFE] p-2 rounded-lg w-[60%]">
          <CiSearch className="text-[#F99F1C]" />
          <input
            type="text"
            placeholder="Search Food"
            className="text-xs ml-2 outline-none w-full"
          />
        </div>
        {/* Menu bar dropdown */}
        <div className="flex items-center gap-3 bg-[#FEFEFE] p-2 rounded-lg">
          <h1 className=" text-xs font-bold">Menu</h1>
          <FaAngleDown className="text-[#F99F1C] text-xs" />
        </div>
      </div>
      <div className="hidden bg-[#FD6011] h-8 w-8 rounded-full sm:flex justify-center items-center text-white">
        <GoPerson className="text-xl" />
      </div>
    </main>
  );
}
