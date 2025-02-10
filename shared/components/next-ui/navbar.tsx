"use client";
import React from "react";
import {Navbar, NavbarContent, Link, NavbarMenuToggle, NavbarMenuItem, NavbarMenu} from "@nextui-org/react";


export default function NavbarNUI() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: 'Quienes somos',
      url: '#about-us'
    },
    {
      name: 'Nuestra Historia',
      url: '#history-section'
    },
    {
      name: 'Visión y Misión',
      url: '#mision-vision'
    },
    {
      name: 'Nuestras Empresas',
      url: '#our-companies'
    },
    {
      name: 'Nuestras Marcas',
      url: '#our-brands'
    },
    {
      name: 'Nuestros Socios Estrategicos',
      url: '#our-partners'
    },
    {
      name: 'Contactanos',
      url: '#contact-section'
    },
    {
      name: 'Plataformas',
      url: '#platforms'
    }

  ];

  return (
    <Navbar className="absolute w-full bg-transparent backdrop-blur-none backdrop-saturate-0 border-none"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>


      <NavbarMenu className="">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              onPress={() => setIsMenuOpen(false)}
              href={item.url}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
