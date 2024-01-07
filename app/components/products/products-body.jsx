import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function ProductsBody({ data, isLoading, isError, popular }) {
  return (
    <main className="my-10 mx-4">
      {/* Header and button */}
      <section className="flex justify-between items-center my-3">
        <h1 className="font-bold">{popular ? "Popular" : "Recommended"}</h1>
        <div className="flex items-center gap-4">
          <button className=" hidden text-sm text-[#FC6011] md:block">AddMore</button>
          <IoIosArrowForward />
        </div>
      </section>
      {/* Cards */}
      <section className="grid grid-flow-col gap-x-3 overflow-x-auto">
        {data?.map((item, index) => (
          <div key={index} className="w-[140px] ">
            <Image
              src={item.ImageUrl}
              width={140}
              height={160}
              objectFit="contain"
              alt="Products"
              style={{ height: "80%", width: "100%" }}
              className=" rounded-lg shadow-xl mb-1"
            />
            <h1 className="text-center">Cake</h1>
          </div>
        ))}
      </section>
    </main>
  );
}
