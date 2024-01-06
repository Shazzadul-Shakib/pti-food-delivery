import { menuLinks } from "@/utils/menu-links";

export default function DropDown() {
  return (
    <main className="absolute -mb-[100%] sm:w-full">
      <ul className="bg-[#FEFEFE] rounded-lg mt-1 py-2">
        {menuLinks.map((item, index) => (
          <li
            key={index}
            className="px-2 py-1 text-xs hover:bg-[#EEEFF0] hover:text-[#f99f1c] cursor-pointer"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
