"use client";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline, IoHomeOutline } from "react-icons/io5";
import { GrCatalog } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { PiToiletPaper } from "react-icons/pi";
import { RiMenu2Line } from "react-icons/ri";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "./Logo";
import Social from "./Social";

const dropdownLinks = [
  {
    path: "/servicii",
    name: "Execuție Construcții Civile",
  },
  {
    path: "/servicii#execuție-construcții-industriale",
    name: "Execuție Construcții Industriale",
  },
  {
    path: "/servicii#supervizare-lucrări-de-execuție",
    name: "Supervizare Lucrări De Execuție",
  },
  {
    path: "/servicii#verificare-calitate-lucrări-în-execuție",
    name: "Verificare Calitate Lucrări În Execuție",
  },
  { path: "/servicii#planificarea-execuției", name: "Planificarea Execuției" },
  { path: "/servicii#servicii-RTE", name: "Servicii RTE" },
  { path: "/servicii#dirigenție-de-șantier", name: "Dirigenție De Șantier" },
];
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
  const [isServiciiOpen, setIsServiciiOpen] = useState(false);

  const toggleServicii = () => {
    setIsServiciiOpen((prev) => !prev);
  };
  const closeMenuAndNavigate = (path) => {
    setIsMenuOpen(false);
    setIsServiciiOpen(false);
    window.location.href = path;
  };

  return (
    <div className={`${containerStyles}`}>
      {/* nav trigger btn */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='cursor-pointer outline-none'
      >
        <RiMenu2Line className='text-4xl transition-all duration-200' />
      </div>
      <aside
        className={`${
          isMenuOpen ? "top-0 right-0" : "-top-full -right-full"
        } bg-body fixed z-10 h-full p-10 inset-0 transition-all duration-500`}
      >
        <div className='flex flex-col items-center justify-between h-full text-black-text'>
          {/* close btn */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className='cursor-pointer text-4xl  absolute w-10 h-10 right-8 top-8 flex items-center justify-center'
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
         <Logo />
          {/* links */}
          <div className='flex flex-col gap-y-8'>
            {links.map((link, index) => {
              if (link.path === "/catalog") {
                return (
                  <div key={index}>
                    <div
                      onClick={toggleServicii}
                      className='cursor-pointer flex items-center gap-x-3 justify-base hover:text-orange relative'
                    >
                      <div className={`${iconStyles}`}>{link.icon}</div>
                      <div className={`${linkStyles}`}>{link.name}</div>
                    </div>
                    {isServiciiOpen && (
                      <Drawer>
                        <DrawerTrigger className='absolute left-0 right-0'>
                          Descoperiți Serviciile Noastre
                        </DrawerTrigger>
                        <DrawerContent as='div' className="rounded-t-2xl">
                          <DrawerHeader>
                            <DrawerTitle className='text-accent'>
                              <div className="absolute top-2 right-[40%] px-10 h-[0.55rem] rounded-full bg-white/20"></div>
                              Servicii de Construcții Premium
                            </DrawerTitle>
                            <DrawerDescription className='text-base font-semibold'>
                              Construiește cu Încredere
                              <span className='block border-t border-accent my-4'></span>
                            </DrawerDescription>
                          </DrawerHeader>
                          {dropdownLinks.map((dropdownLink, dropdownIndex) => (
                            <div
                              key={dropdownIndex}
                              onClick={() =>
                                closeMenuAndNavigate(dropdownLink.path)
                              }
                              className='px-4 pb-6 flex gap-x-[4px] cursor-pointer'
                            >
                              <span className='text-accent'>&#9679;</span>
                              <div className='hover hover:scale-[0.96]'>
                                <span>{dropdownLink.name}</span>
                              </div>
                            </div>
                          ))}
                          <DrawerFooter>
                            <DrawerClose
                              as='div'
                              className='text-white bg-orange hover:bg-orange-hover hover:scale-[0.98] w-[50%] py-3 px-3 mx-auto'
                            >
                              Închide
                            </DrawerClose>
                          </DrawerFooter>
                        </DrawerContent>
                        <DrawerClose />
                      </Drawer>
                    )}
                  </div>
                );
              } else {
                return (
                  <Link
                    key={index}
                    href={link.path}
                    className='flex items-center gap-x-3 justify-base hover:text-orange'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className={`${iconStyles}`}>{link.icon}</div>
                    <div className={`${linkStyles}`}>{link.name}</div>
                  </Link>
                );
              }
            })}
          </div>
         <Social />
        </div>
       
      </aside>
    </div>
  );
};

export default NavMobile;
