/** @format */

"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "आरती ",
    href: "/aarti",
  },
  {
    name: "चंदा  ",
    href: "/chanda",
  },
];

let arr = ["/admin", "/admin/dashbord", "/admin/chanda"];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  let pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return arr.includes(pathname) ? null : (
    <div className=" sticky top-0 w-full bg-white border-b-2   z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href={"/"}>
          <div className="inline-flex items-center space-x-2 p-1">
            <span className=" bg-red-400 rounded-md">
              <img
                className="w-[30px] h-[30px] rounded-full"
                src={
                  "https://i.pinimg.com/474x/6c/3c/62/6c3c6211c12ce16fd1690447be78097c.jpg"
                }
              />
            </span>
            <span className="font-bold hover:text-red-700">दुर्गौली</span>
          </div>
        </Link>
        <div className="hidden md:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-bold text-gray-800 px-3 py-2 rounded hover:text-red-700 hover:border "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          {/* <button
            type="button"
            className="rounded-md bg-pink-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Admin
          </button> */}
        </div>
        <div className="md:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-3 pt-3">
                <div className="flex items-center justify-between">
                  <Link href={"/"} onClick={toggleMenu}>
                    {" "}
                    <div className="inline-flex items-center space-x-2">
                      <span className="bg-red-400 rounded-md">
                        <img
                          className="w-[30px] h-[30px] rounded-full"
                          src={
                            "https://i.pinimg.com/474x/6c/3c/62/6c3c6211c12ce16fd1690447be78097c.jpg"
                          }
                        />
                      </span>
                      <span className="font-bold">दुर्गौली</span>
                    </div>
                  </Link>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        onClick={toggleMenu}
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-bold"
                      >
                        <span className="ml-3 text-base font-medium  hover:text-red-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                {/* <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-pink-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Admin
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
