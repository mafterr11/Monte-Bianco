"use client";
// Assuming you have installed Framer Motion and Tailwind CSS correctly.
import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const MenuButton = ({ onClick, isOpen }) => {
  return (
    <motion.button
      className={`flex h-14 w-14 items-center justify-center bg-accent ${isOpen ? "rounded-full" : "rounded-[10px]"} cursor-pointer`}
      onClick={onClick}
      animate={isOpen ? "open" : "closed"}
      initial={false}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        className="ml-[2px] mt-[4px] text-white"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
};

const rightMenu = [
  {
    path: "/catalog",
    query: "brand=%2Fmarci%2Fpuff.png",
    icon: "/marci/puff.png",
  },
  {
    path: "/catalog",
    query: "brand=%2Fmarci%2Ffiore.png",
    icon: "/marci/fiore.png",
  },
  {
    path: "/catalog",
    query: "brand=%2Fmarci%2Fneve.png",
    icon: "/marci/neve.png",
  },
  {
    path: "/catalog",
    query: "brand=%2Fmarci%2FMBP.png",
    icon: "/marci/MBP.png",
  },
  {
    path: "/catalog",
    query: "brand=%2Fmarci%2Fhoreca.png",
    icon: "/marci/horeca.png",
  },
];

const leftMenu = [
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
const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring",
    },
    display: "block",
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const slideHorizontalAnimation = {
  left: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  right: {
    x: -250,
    transition: {
      duration: 0.3,
    },
  },
};

const DropdownMenu = ({ containerStyles }) => {
  const [isOpen, toggleDropdown] = useCycle(false, true);
  const [isLeftMenu, toggleMenu] = useCycle(true, false);
  const leftMenuHeight = (leftMenu.length + 1) * 65; // Height in pixels, adjust as needed
  const rightMenuHeight = (rightMenu.length + 1) * 65; // Height in pixels, adjust as needed
  const height = isLeftMenu ? leftMenuHeight : rightMenuHeight;

  return (
    <div className={`fixed z-40 ${containerStyles} py-96`}>
      <MenuButton onClick={toggleDropdown} isOpen={isOpen} />
      <motion.div
        className="absolute right-2 top-[28rem] z-20 w-[18rem] overflow-hidden rounded-lg border-2 border-body-accent bg-gradient-blue shadow-lg"
        style={{ height }}
        initial="close"
        animate={isOpen ? "open" : "close"}
        variants={slideVerticalAnimation}
      >
        <motion.div
          className="relative flex h-full w-[50rem]"
          initial="left"
          animate={isLeftMenu ? "left" : "right"}
          variants={slideHorizontalAnimation}
        >
          <motion.div className="flex h-full w-[18rem] flex-col px-8">
            <h4
              className="my-8 cursor-pointer text-center text-xl transition duration-200 "
              onClick={toggleMenu}
            >
              Către mărci &#8594;
            </h4>
            <ul className="flex flex-1 flex-col items-center justify-around pb-4">
              {leftMenu.map((link, i) => (
                <li
                  key={i}
                  className="cursor-pointer py-3 text-center font-medium transition duration-200"
                >
                  <Link
                    href={`${link.path}?${link.query}`}
                    onClick={toggleDropdown}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="absolute right-[16.5rem] top-0 flex h-full w-[18rem] flex-col items-center justify-center px-8">
            <h4
              className="my-3 cursor-pointer items-center text-center text-xl transition duration-200"
              onClick={toggleMenu}
            >
              &#8592; Categorii
            </h4>
            <ul className="flex flex-col items-center justify-around">
              {rightMenu.map((dropdownLink, i) => (
                <li
                  key={i}
                  className="w-[100px] cursor-pointer py-3 transition duration-200 focus:bg-gradient-blue"
                >
                  <Link
                    href={`${dropdownLink.path}?${dropdownLink.query}`}
                    onClick={toggleDropdown}
                  >
                    <Image
                      src={dropdownLink.icon}
                      width={120}
                      height={70}
                      alt="brands"
                      unoptimized
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DropdownMenu;
