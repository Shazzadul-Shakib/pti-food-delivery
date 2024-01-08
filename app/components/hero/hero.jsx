import Image from "next/image";

export default function Hero() {
  return (
    <main className="hidden h-[250px] sm:flex justify-around items-center bg-[#F99F1C] my-20 px-10 rounded-3xl mx-2">
      <div className="hidden h-full sm:flex flex-col justify-center text-white ">
        <h1 className="text-xl lg:text-3xl font-bold mb-4">
          Deliver Food To Your <br />
          <span>Door Step!</span>
        </h1>
        <p className="text-sm text-[#EEEFF0]">
          Authentic Food, Quick Service, Fast Delivery
        </p>
      </div>
      <div>
        <Image
          src="/Image1.png"
          width={400}
          height={400}
          alt="Hero image"
        />
      </div>
    </main>
  );
}
