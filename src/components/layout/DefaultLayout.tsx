"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosMenu as MenuIcon } from "react-icons/io";
import Sidemenu from "./Sidemenu";
import { IoMdHome as HomeIcon } from "react-icons/io";

type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  function toggleSideMenu() {
    setSideMenuOpen(!sideMenuOpen);
  }

  const pages: Page[] = [
    {
      icon: <HomeIcon />,
      path: "/",
      title: "Início",
      description: "Tela inicial",
    },
    {
      icon: <HomeIcon />,
      path: "/navigate",
      title: "Navegar",
      description: "Navegar entre os conteúdos",
    },
    {
      icon: <HomeIcon />,
      path: "/my-library",
      title: "Minha biblioteca",
      description: "Tela inicial",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="w-full fixed top-0 p-3 bg-neutral-950 flex justify-between items-center">
        <div>
          <button
            onClick={toggleSideMenu}
            className="rounded-full hover:text-yellow-500 w-fit h-fit group-hover:bg-black p-1.5"
          >
            <MenuIcon className="text-[24px]" />
          </button>
        </div>
        <div className="px-4">
          <Link className="hover:text-yellow-500 text-[14px]" href="/login">
            Fazer login
          </Link>
        </div>
      </div>
      <div className="w-full flex">
        <Sidemenu pages={pages} open={sideMenuOpen} toggle={toggleSideMenu} />
        <div className="overflow-y-auto w-full">{children}</div>
      </div>
    </div>
  );
}
