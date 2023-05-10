"use client";

import { useState } from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

const routes = [
  { href: "/", text: "Home" },
  { href: "/events", text: "Events" },
  { href: "/blog", text: "Blog" },
  { href: "/faq", text: "FAQ" },
  { href: "/about", text: "About" },
];

function NavItem({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link className="group inline-block" href={href}>
        {text}
        <span className="block max-w-0 group-hover:max-w-full transition-all ease-in duration-200 h-0.5 bg-current"></span>
      </Link>
    </li>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav
        className={`${
          open && "bg-indigo-900 h-screen w-screen overflow-y-auto fixed"
        } py-4 px-4 lg:bg-transparent lg:h-auto lg:w-auto lg:static`}
      >
        <div className="flex justify-between items-center">
          <Link href="/">
            <CldImage
              width="326"
              height="48"
              src={`logos/nav${open ? "-dark" : ""}`}
              alt="Blockchain @ UCSB logo"
              priority
            />
          </Link>
          <div className="mr-7">
            <ul className="hidden lg:flex space-x-7 uppercase">
              {routes.map((route, i) => (
                <NavItem {...route} key={i} />
              ))}
            </ul>
            <button
              className="lg:hidden"
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <VscChromeClose className="h-6 w-6 text-white" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden mt-7 mx-7">
            <ul className="space-y-7 uppercase text-white">
              {routes.map((route, i) => (
                <NavItem {...route} key={i} />
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
