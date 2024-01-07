'use client';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import ModalBody from "../modals/modal";
import Loader from "../shared/loader";
import { useSelector, useDispatch } from "react-redux";
import { toggleDropdown } from "@/redux/slices/toggleSlice";
import AddProducts from "../cards/add-product";
import { useRef } from "react";

export default function ProductsBody({ data, isLoading, isError, popular }) {
  const dispatch = useDispatch();
  const scrollContainerRef = useRef(null);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100;
    }
  };
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100; 
    }
  };

  const { isOpen } = useSelector((state) => state.toggle);
  const newProduct = useSelector((state) => state.addProduct.newData);
  let newData = newProduct !== null ? [...data, newProduct] : data;

  if (isLoading) {
    return <ModalBody props={<Loader/>} />
  }
  return (
    <main className="my-10 mx-4">
      {/* Header and button */}
      <section className="flex justify-between items-center my-3">
        <h1 className="font-bold">{popular ? "Popular" : "Recommended"}</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(toggleDropdown())}
            className=" hidden text-sm text-[#FC6011] md:block"
          >
            AddMore
          </button>
          <IoIosArrowBack className="cursor-pointer" onClick={handleScrollLeft} />
          <IoIosArrowForward className="cursor-pointer" onClick={handleScrollRight} />
        </div>
      </section>
      {/* Cards */}
      <section
        className="grid grid-flow-col gap-x-3 overflow-x-auto"
        ref={scrollContainerRef}
      >
        {newData?.map((item, index) => (
          <div key={index} className="w-[140px] ">
            <Image
              src={item?.ImageUrl}
              width={140}
              height={160}
              objectFit="contain"
              alt="Products"
              style={{ height: "80%", width: "100%" }}
              className=" rounded-lg shadow-xl mb-1"
            />
            <h1 className="text-center">{item?.Name}</h1>
          </div>
        ))}
      </section>
      {isOpen && (
        <ModalBody
          props={
            <AddProducts toggleModal={toggleDropdown} isLoading={isLoading} />
          }
        />
      )}
    </main>
  );
}
