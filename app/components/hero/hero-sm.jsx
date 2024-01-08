import Image from "next/image";

export default function HeroSM() {
  return (
    <main className="block sm:hidden ">
      <div className=" h-full text-center my-10">
        <h1 className="text-2xl font-bold mb-4">
          Deliver Food To Your <br />
          <span>Door Step!</span>
        </h1>
        <p className="text-sm text-gray-600">
          Authentic Food, Quick Service, Fast Delivery
        </p>
      </div>
      <section className="h-[180px] flex justify-around items-center bg-[#F99F1C] my-10 px-10 rounded-3xl mx-2 ">
        <div className=" -mt-20">
          <Image
            src="/Image1.png"
            width={400}
            height={400}
            alt="Hero image"
          />
        </div>
      </section>
    </main>
  );
}
