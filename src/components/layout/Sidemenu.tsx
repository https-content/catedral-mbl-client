import Link from "next/link";
import { IoIosArrowBack as BackIcon } from "react-icons/io";

type Props = {
  pages: Page[];
  toggle: () => void;
  open: boolean;
};

export default function Sidemenu({ pages, open, toggle }: Props) {
  return (
    <div
      className={`
          ${
            open ? "w-[30vw] opacity-1" : "w-0 opacity-0"
          } bg-neutral-900 z-10 flex flex-col space-y-8 p-3 transition-all`}
    >
      <div className="flex items-center">
        <button onClick={toggle}>
          <BackIcon className="text-[24px]" />
        </button>
      </div>
      <div>
        <ul className="text-[18px] outline outline-1 rounded-md outline-neutral-400">
          {pages.map((page, index) => (
            <li
              key={index}
              onClick={(e) => {
                toggle();
                e.stopPropagation();
              }}
              className="px-3 py-1.5 hover:bg-yellow-500 hover:text-black cursor-pointer"
            >
              <Link href={page.path}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
