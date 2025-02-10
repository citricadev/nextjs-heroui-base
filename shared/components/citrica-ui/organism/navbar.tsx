'use client'
import React, { useEffect, useRef, useState } from "react";
import { Col, Container } from '@citrica/objects';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon } from "lucide-react";
import { siteConfig } from "@/config/site";



const Navbar = () => {
  const [active, setActive] = useState("Inicio");
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const closeSidebar = () => {
    setToggle(false);
  };

  // change nav color scrolling
  const [colorbg, setcolorbg] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 500) {
      setcolorbg(true)
    } else {
      setcolorbg(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  // Function to handle clicks outside of the menu
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <nav className={`w-screen fixed box-border z-30 h-16 ${colorbg ? "bg-[rgba(48,43,43,0.65)]" : "bg-secondary"}`}>
      <Container>
        <Col noPadding cols={{ lg: 12, md: 6, sm: 4 }} className="h-16 flex justify-between items-center pt-3 pb-3">
          {/* Logo */}
          {pathname === '/' ? (
            <div>
              <picture >
                <Link href={"/"} >
                  <img src='/img/citrica-logo.png' alt="logo-galix" className="h-10" />
                </Link>
              </picture>
            </div>
          ) : (

            <div className="flex cursor-pointer">
              <picture >
                <Link href={"/"} >
                  <img src={colorbg ? '/img/citrica-logo.png' : '/img/citrica-logo.png'} alt="logo-galix" className="h-10"/>
                </Link>
              </picture>
            </div>
          )}

          {/* Desktop Navigation */}
          <ul className="only-lg-nav list-none gap-9">
            {siteConfig.navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`flex cursor-pointer nav_link ${active === nav.id ? "nav_link_active" : ""}`}
                onClick={() => setActive(nav.id)}
              >
                <Link
                  className={`pb-1 px-4 text-white ${pathname === '/'
                      ? (active === nav.id ? 'text-[#F7BB58]' : 'text-[#FFFFFF]')
                      : colorbg
                        ? (active === nav.id ? 'text-[#F7BB58]' : 'text-[#FFFFFF]')
                        : (active === nav.id ? 'text-[#F7BB58]' : 'text-[#000000]')
                    }`}
                  href={`${nav.id}`}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <div ref={menuRef} className="only-sm-md flex justify-end items-center p-1 flex-1">
            <button onClick={() => setToggle(!toggle)} className="focus:outline-none cursor-pointer">
              { toggle ? ( 
                <XIcon color="#FFF"/>
                ) : ( 
                <MenuIcon color="#FFF"/>
                )
              }
            </button>
            {/* Floating Menu */}
            <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-[3px] bg-black-brand mx-4 my-2 min-w-[140px] rounded-xl z-50 `}>
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {siteConfig.navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`text-white font-medium cursor-pointer text-[16px] ${index === siteConfig.navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => {
                      setActive(nav.id);
                      closeSidebar();
                    }}
                  >
                    <Link href={`#${nav.id}`}>
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </Col>
      </Container>
    </nav>
  );
};

export default Navbar;
