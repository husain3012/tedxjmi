import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  function setOpen() {
    setIsOpen(!isOpen);
  }

  function Menu() {
    return (
      <div
        class="absolute transition-all bg-white top-10 w-4/5 left-0 overflow-hidden "
        style={{
          height: isOpen ? "250px" : "0",
        }}
      >
        <ul className="list-none">
          {Nav.map((_, i) => {
            return (
              <Link href={_.link} >
                <li class="font-semibold my-2 py-3 px-4 hover:bg-gray-100 transition-all " onClick={() => setIsOpen()}>
                  {_.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }

  const Nav = [
    {
      name: "About",
      link: "/archive/2021"
    },
    {
      name: "Speaker",
      link: "/speakers",
    },
    {
      name: "Archive",
      link: "/archive/2011"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ];
  return (
    <div>
      <div className="sm:hidden nav shadow-2xl z-50 fixed w-screen flex bg-white  font-Cinzel items-center justify-center  ">
        <div className="sm:hidden flex flex-col items-start justify-center transition-all mr-auto hover:bg-gray-100 py-3 px-2 group w-2/3 z-50 "
          onClick={() => setOpen()}
        >
          <div className="flex items-center">
            <GiHamburgerMenu />
            <span
              class="ml-2 font-semibold cursor-pointer"
            >
              Menu
            </span>
            {Menu()}
          </div>
        </div>
        <div>
          <Link href="/">
            <img className="w-24" src="https://i.ibb.co/ncZ8qLG/image.png" onClick={() => setIsOpen(false)}/>
          </Link>
        </div>
      </div>
      <div
        className="w-screen h-screen fixed top-0 left-0 bg-black transition-all"
        onClick={() => setIsOpen()}
        style={{
            pointerEvents : isOpen ? null : "none",
            opacity:  isOpen ? 0.5 : 0
        }}
      />
    </div>
  );
}

export default NavbarMobile;
