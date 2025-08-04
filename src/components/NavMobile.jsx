"use client";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline, IoHomeOutline } from "react-icons/io5";
import { GrCatalog } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { PiToiletPaper } from "react-icons/pi";
import { RiMenu2Line } from "react-icons/ri";
import Logo from "./Logo";
import Social from "./Social";

export const links = [
  {
    path: "/",
    name: "acasă",
    icon: <IoHomeOutline />,
  },
  {
    path: "/catalog",
    name: "catalog",
    icon: <GrCatalog />,
  },
  {
    path: "/away-from-home",
    name: "away-from-home",
    icon: <PiToiletPaper />,
  },
  {
    path: "/contact",
    name: "contact",
    icon: <RiContactsLine />,
  },
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isServiciiOpen, setIsServiciiOpen] = useState(false);

  // const toggleServicii = () => {
  //   setIsServiciiOpen((prev) => !prev);
  // };
  // const closeMenuAndNavigate = (path) => {
  //   setIsMenuOpen(false);
  //   setIsServiciiOpen(false);
  //   window.location.href = path;
  // };

  return (
    <div className={`${containerStyles}`}>
      {/* nav trigger btn */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer outline-hidden z-40"
      >
        <RiMenu2Line className="text-4xl transition-all duration-200" />
      </div>
      <aside
        className={`${
          isMenuOpen ? "right-0 top-0" : "-right-full -top-full"
        } fixed inset-0 z-30 h-full bg-body p-10 transition-all duration-500`}
      >
        <div className="flex h-full flex-col items-center justify-between text-black-text">
          {/* close btn */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-8  top-8 flex h-10 w-10 cursor-pointer items-center justify-center text-4xl"
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
          <Logo />
          {/* links */}
          <div className="flex flex-col gap-y-8 md:gap-y-12">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className="justify-base flex items-center gap-x-3"
                  onClick={() => setIsMenuOpen(false)}
                  >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`${linkStyles}`}>{link.name}</div>
                </Link>
              );
            })}
          </div>
          <Social containerStyles="flex" />
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
