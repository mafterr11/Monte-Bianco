"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export const links = [
  {
    path: "/",
    name: "acasă",
  },
  {
    path: "/catalog",
    name: "catalog",
  },
  {
    path: "/away-from-home",
    name: "away-from-home",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

const dropdownLinksCatalog = [
  {
    path: "/catalog/Puff",
    name: "Puff",
    icon: "/marci/puff.png"
  },
  {
    path: "/catalog/Fiore",
    name: "Fiore",
    icon: "/marci/fiore.png"
  },
  {
    path: "/catalog/Neve",
    name: "Neve",
    icon: "/marci/neve.png"
  },
  {
    path: "/catalog/MonteBianco-Profesional",
    name: "Monte Bianco Profesional",
    icon: "/marci/MBP.png"
  },
  {
    path: "/catalog/Horeca",
    name: "Horeca",
    icon: "/marci/horeca.png"
  },
];

const dropdownLinksAFH = [
  {
    path: "/away-from-home/role",
    name: "Role",
  },
  {
    path: "/away-from-home/servetele",
    name: "Servetele",
  },
  {
    path: "/away-from-home/prosop-pilat",
    name: "Prosop Pilat",
  },
  {
    path: "/away-from-home/cearceaf",
    name: "Cearceaf",
  },
];

const Nav = ({ containerStyles, linkStyles }) => {
  const currentRoute = usePathname();
  return (
    <nav className={`${containerStyles} flex items-center justify-center`}>
      {links.map((link, index) => {
        if (link.path === "/catalog") {
          return (
            <NavigationMenu key={index}>
              <NavigationMenuList>
                <NavigationMenuItem as="div" className={`${linkStyles}`}>
                  <NavigationMenuTrigger as="span">
                    <Link
                      href="/catalog"
                      className={`${
                        currentRoute === link.path
                          ? "underline decoration-accent decoration-4 underline-offset-[1.7rem] capitalize text-base hover:scale-[0.97]"
                          : "capitalize text-base hover hover:scale-[0.97]"
                      }`}
                    >
                      <span>{link.name}</span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent as="div" className="px-0">
                    {dropdownLinksCatalog.map((dropdownLink, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownLink.path}
                        passHref
                        legacyBehavior
                      >
                        <NavigationMenuLink className="flex flex-col items-center justify-center border-b-[0.5px] border-black hover:bg-body-hover">
                          <div className="px-2 my-6 w-[18rem] h-[1.5rem] text-center flex items-center justify-center gap-x-[4px]">
                           <Image src={dropdownLink.icon} width={115} height={30} alt="Marcile Monte Bianco"/>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          );
        } else if (link.path === "/away-from-home") {
          return (
            <NavigationMenu key={index}>
              <NavigationMenuList>
                <NavigationMenuItem as="div" className={`${linkStyles}`}>
                  <NavigationMenuTrigger as="span">
                    <Link
                      href="/away-from-home"
                      className={`${
                        currentRoute === link.path
                          ? "underline decoration-accent decoration-4 underline-offset-[1.7rem] capitalize text-base hover:scale-[0.97]"
                          : "capitalize text-base hover hover:scale-[0.97]"
                      }`}
                    >
                      <span>{link.name}</span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent as="div" className="px-0">
                    {dropdownLinksAFH.map((dropdownLink, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownLink.path}
                        passHref
                        legacyBehavior
                      >
                        <NavigationMenuLink className="flex flex-col items-center justify-center border-b-[0.5px] border-black">
                          <div className="p-4 w-[12rem] text-center flex gap-x-3">
                            <span className="text-accent">&#9679;</span>
                            <div className="hover">
                              <span>{dropdownLink.name}</span>
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          );
        } else {
          return (
            <Link
              key={index}
              href={link.path}
              className={`${linkStyles} ${
                currentRoute === link.path
                  ? "underline decoration-accent decoration-4 underline-offset-[1.7rem] capitalize text-base hover:scale-[0.97]"
                  : "capitalize text-base hover hover:scale-[0.97]"
              }`}
            >
              <span>{link.name}</span>
            </Link>
          );
        }
      })}
    </nav>
  );
};

export default Nav;
