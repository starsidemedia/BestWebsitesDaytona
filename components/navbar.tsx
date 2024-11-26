"use client";

import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";

export function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-white font-extrabold text-2xl tracking-tighter"
              >
                <span className="text-yellow-400">BEST</span>
                <span className="text-red-500">WEBSITES</span>
                <span className="text-blue-500">DAYTONA</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/portfolio">Portfolio</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <Link
                href="/contact"
                className="relative inline-flex items-center px-4 py-2 border border-neutral-200 border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 animate-pulse dark:border-neutral-800"
              >
                <Zap className="mr-2 h-4 w-4" />
                Get Started
                <span className="absolute -top-1 -right-1 h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-90 backdrop-blur-sm">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/portfolio">Portfolio</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-red-600 hover:bg-red-700 animate-pulse"
            >
              <Zap className="inline-block mr-2 h-4 w-4" />
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
    </a>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
    >
      {children}
    </a>
  );
}
