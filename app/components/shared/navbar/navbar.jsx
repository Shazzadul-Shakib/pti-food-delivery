'use client';

import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import DropDown from "./dropdown";
import { useDispatch,useSelector } from 'react-redux';
import { toggleDropdown } from "@/redux/slices/toggleSlice";

export default function Navbar() {
  // toggle with redux toggle slice
  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.toggle);

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
        <section className="relative w-[15%]">
          <button
            onClick={() => dispatch(toggleDropdown())}
            className="sm:w-full flex justify-between items-center gap-3 bg-[#FEFEFE] p-2 rounded-lg"
          >
            <h1 className=" text-xs font-bold">Menu</h1>
            <FaAngleDown className="text-[#F99F1C] text-xs" />
          </button>
          {isOpen && <DropDown />}
        </section>
      </div>
      <div className="hidden bg-[#FD6011] h-8 w-8 rounded-full sm:flex sm:justify-center sm:items-center text-white">
        <GoPerson className="text-xl" />
      </div>
    </main>
  );
}
