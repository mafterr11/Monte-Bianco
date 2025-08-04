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
    path: "/catalog",
    query: "category=Batiste%20nazale",
    name: "Batiste nazale",
  },
  {
    path: "/catalog",
    query: "category=Șervețele%20de%20masă",
    name: "Șervețele de masă",
  },
  {
    path: "/catalog",
    query: "category=Hârtie%20igienică",
    name: "Hârtie igienică",
  },
  {
    path: "/catalog",
    query: "category=Prosoape%20de%20bucătărie",
    name: "Prosoape de bucătărie",
  },
  {
    path: "/catalog",
    query: "category=Șervețele%20Pop-up",
    name: "Șervețele Pop-up",
  },
];

const dropdownLinksAFH = [
  {
    path: "/away-from-home",
    query: "categoryAFH=Role%20AFH",
    name: "Role AFH",
  },
  {
    path: "/away-from-home",
    query: "categoryAFH=%C8%98erve%C8%9Bele", // Corrected for "Șervețele"
    name: "Șervețele",
  },
  {
    path: "/away-from-home",
    query: "categoryAFH=Prosop%20pilat",
    name: "Prosop pilat",
  },
  {
    path: "/away-from-home",
    query: "categoryAFH=Cearceaf%20medical", // "Cearceaf" does not need encoding
    name: "Cearceaf medical",
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
                          ? "text-base font-semibold capitalize underline decoration-accent decoration-4 underline-offset-[1.7rem] hover:scale-[0.97]"
                          : "hover text-base capitalize hover:scale-[0.97]"
                      }`}
                      >
                      <span>{link.name}</span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    as="div"
                    className="bg-gradient-blue px-0"
                  >
                    {dropdownLinksCatalog.map((dropdownLink, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        // href={dropdownLink.path}
                        href={`${dropdownLink.path}?${dropdownLink.query}`}
                        passHref
                        
                      >
                        <NavigationMenuLink asChild className="flex flex-col items-center justify-center border-b-[0.5px] border-black hover:bg-accent/5">
                          <div className="flex flex-row justify-start w-[18rem] gap-x-3 p-4 text-center">
                            <span className="text-accent">&#9679;</span>
                            <div className="hover-nav font-medium text-black">
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
                          ? "text-base font-semibold capitalize underline decoration-accent decoration-4 underline-offset-[1.7rem] hover:scale-[0.97]"
                          : "hover text-base capitalize hover:scale-[0.97]"
                      }`}
                      >
                      <span>{link.name}</span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    as="div"
                    className="bg-gradient-blue px-0"
                  >
                    {dropdownLinksAFH.map((dropdownLink, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={`${dropdownLink.path}?${dropdownLink.query}`}
                        passHref
                        
                      >
                        <NavigationMenuLink asChild className="flex flex-col items-center justify-center border-b-[0.5px] border-black hover:bg-accent/5">
                          <div className="flex flex-row justify-start w-[15rem] gap-x-3 p-4 text-center">
                            <span className="text-accent">&#9679;</span>
                            <div className="hover-nav font-medium text-black">
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
                  ? " font-semibold underline decoration-accent decoration-4 underline-offset-[1.7rem] hover:scale-[0.97]"
                  : "hover hover:scale-[0.97]"
              } text-base capitalize`}
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
