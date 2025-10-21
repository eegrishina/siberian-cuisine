"use client";

import { siteConfig } from "@/config/site.config";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RegistrationModal from "../modals/RegistrationModal";
import LoginModal from "../modals/LoginModal";
import { useState } from "react";

export const Logo = () => {
  return (
    <Image
      src="/logo-pine.png"
      alt={siteConfig.title}
      width={26}
      height={26}
      priority
    />
  );
};

export default function Header() {
  const pathname = usePathname();

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const getNavItems = () => {
    return siteConfig.navItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <NavbarItem key={item.href}>
          <Link
            color="header-bg"
            href={item.href}
            className={`px-4 py-2.5 
                  border rounded-medium transition-all duration-200
                  text-header-text
                  ${
                    isActive
                      ? "border-header-text"
                      : "border-transparent hover:border-brown-400"
                  }`}
          >
            {item.label}
          </Link>
        </NavbarItem>
      );
    });
  };

  return (
    <Navbar className="layout-header">
      <NavbarBrand>
        <Link href="/" className="flex gap-3">
          <Logo />
          <p className="font-header font-bold text-[20px]">
            {siteConfig.title}
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            href="#"
            variant="flat"
            className="transition-colors duration-200 text-[14px] bg-transparent hover:text-brown-300"
            onPress={() => setIsLoginOpen(true)}
          >
            Вход
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="bg-brown-300 text-white hover:bg-brown-200"
            onPress={() => setIsRegistrationOpen(true)}
          >
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </Navbar>
  );
}
