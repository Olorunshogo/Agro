
'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppLogo } from './app-logo';
import { Menu, LogIn, RectangleGogglesIcon } from 'lucide-react';
import { Button } from '~/components/ui/button';
import NavigationLinksLg from './NavigationLinksLg';
import SecondaryLink from './LinkSecondary';
import PrimaryLink from './LinkPrimary';

import { navLinks } from '~/store/store';
import { socialLinks } from '~/store/store';

export default function Header() {

  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <header className="sticky top-0 left-0 z-50 w-full border-b border-border/40 bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between gap-2 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">
          {/* Logo */}
          <div className="flex items-center py-4">
            <Link href="/" className="flex items-center gap-2">
              <AppLogo className="w-8 h-8 text-lg" />
              <span className="text-xl font-bold text-(--agro-green-dark)">Debrigger</span>
            </Link>
          </div>

          {/* Navigaiton Links */}
          <NavigationLinksLg />
          

          {/* Authentication Links */}
          <div className="items-center hidden gap-4 lg:flex">
            <SecondaryLink
              href='/signin'
              label='Sign In'
            />

            <PrimaryLink
              href='/signup'
              label='Sign Up'
            />
          </div>

          {/* Sidebar Toggle Button */}
          <Button
            variant="ghost"
            className="transition-all duration-300 ease-in-out cursor-pointer lg:hidden"
            onClick={() => {
              setIsSidebarOpen(true);
              console.log(isSidebarOpen);
            }}
          >
            <span className="sr-only">Menu</span>
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </header>

      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed lg:hidden inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
              ${
                isSidebarOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full pointer-events-none"
              }`}
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Sidebar Content */}
          <aside
            ref={sidebarRef}
            className={`fixed lg:hidden top-0 left-0 z-50 h-full bg-background/80 shadow-lg w-full sm:w-1/2 lg:w-1/3 h-full duration-300 ease-in-out transform transition-transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full gap-6 overflow-y-auto">
              <div className="flex items-center justify-between w-full gap-4 p-3 shadow-md backdrop-blur-sm h-fit">
                <div className="flex items-center py-1">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                      setIsSidebarOpen(false);
                      console.log(isSidebarOpen);
                    }}
                  >
                    <AppLogo className="w-8 h-8 text-lg" />
                    <span className="text-xl font-bold">AgroBridge</span>
                  </Link>
                </div>

                <Button
                  variant="ghost"
                  className="p-1 text-xl font-bold text-red-600 duration-300 ease-in-out rounded-full hover:text-white hover:bg-black/50 hover:cursor-pointer transition-out"
                  onClick={() => {
                    setIsSidebarOpen(false);
                    console.log(isSidebarOpen);
                  }}
                >
                  x
                </Button>
              </div>

              <nav className="w-full">
                <ul className="grid w-full gap-2 p-4">
                  {navLinks.map(({ label, href, icon: Icon }) => {
                    const isActive = pathname === href;
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          passHref
                          className={`${
                            isActive
                              ? "!bg-gradient-nav !text-white active:bg-gradient-nav bg-black/50"
                              : "text-black dark:text-white hover:text-white hover:bg-black/50"
                          } flex items-center gap-2 px-2 py-2 text-base font-medium rounded-md`}
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          {Icon && <Icon className="w-5 h-5" />}
                          <span>{label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Social Links */}
              <ul className="flex items-center gap-6 p-6">
                {socialLinks.map(({ label, href, icon: Icon, color }) => {
                  return (
                    <li 
                      key={href}
                      className="relative flex flex-col items-center group"
                    >
                      {/* Label */}
                      <span
                        className={`
                          absolute -top-6 text-xs text-(--text-black) dark:text-white px-2 py-0.5 rounded-md backdrop-blur-sm 
                          bg-white/80 dark:bg-black/50 opacity-0 group-hover:opacity-100 
                          group-hover:translate-y-[-2px] transition-all duration-300 ease-in-out 
                          ${color?.replace("hover:", "")}
                        `}
                      >
                        {label}
                      </span>

                      {/* Icon */}
                      <Link
                        href={href}
                        className={`text-(--text-black) dark:text-white ${color} focus:text-(--text-black)
                          duration-300 ease-in-out transition-all
                          "
                        `}
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Authentication Links */}
              <div className="flex flex-wrap items-center gap-4 p-6">

                <Link
                  href="/signin"
                  className="flex items-center gap-2 text-black text-sm bg-black w-fit font-inter font-semibold border hover:border-none border-black bg-transparent hover:bg-(--agro-green-light) px-6 py-3 rounded-full hover:opacity-90 hover:shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
                > 
                <LogIn className="w-4 h-4 rotate-90" />
                  Sign In
                </Link>
                
                <PrimaryLink
                  href='/signup'
                  label="Sign Up"
                  icon={RectangleGogglesIcon}
                />

              </div>

            </div>
          </aside>
        </>
      )}
    </>
  );
}