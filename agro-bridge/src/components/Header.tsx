
'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppLogo } from './app-logo';
import { X, UserCheck, ShoppingCart, LogIn, Menu } from 'lucide-react';
import { Button } from '~/components/ui/button';
import SecondaryLink from './LinkSecondary';
import PrimaryLink from './LinkPrimary';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import { navLinks, sideNavLinks } from '~/store/store';

export default function Header() {

  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const authRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const sidebarVariants: Variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const overlayVariants: Variants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <header className="sticky top-0 left-0 z-50 w-full border-b border-border/40 bg-linear-to-b from-(--navbar-bg) to-(--navbar-bg)/10 backdrop-blur-sm supports-[backdrop-filter]:bg-(--navbar-bg)/60">
        <div className="flex items-center justify-between gap-2 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-(--navbar-h)">
        
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-5 h-5 text-white" />
            </Button>

            <Link href="/" className="flex items-center gap-2">
              <AppLogo className="w-8 h-8 text-(--agro-green-light)" />
              <span className="hidden text-xl font-bold text-white hover:text-(--agro-green-light) lg:block">Debridger</span>
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="items-center hidden gap-2 lg:flex">
            <ul className="flex items-center gap-2 bg-[#FEFEFE] rounded-full p-1 shadow-md">
              {navLinks.map(({ label, href, icon: Icon }) => {
                const isActive = pathname == href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center border-1 border-[#FEFEFE] gap-2 px-4 py-2 text-sm font-semibold font-inter hover:opacity-90 rounded-full transition-all duration-300 ease-in-out
                        ${
                          isActive
                            ? "text-white bg-(--agro-green-dark) shadow-md"
                            : "text-(--agro-green-dark) hover:text-white hover:bg-(--agro-green-dark)"
                        }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>          

          {/* Right: Icons */}
          <div className="relative flex items-center gap-1 sm:gap-2 lg:hidden">
            {/* Cart */}
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5 text-yellow-600 cursor-default" />
            </Button>

            {/* Auth Links Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAuthOpen(!isAuthOpen)}
              className="relative flex"
            >
              {isAuthOpen ? 
                <X className="w-5 h-5 text-(--input-error-red)" /> : 
                <UserCheck className="w-5 h-5 text-(--agro-green-light)" />
              }
            </Button>

            {/* Absolute Desktop Auth Links */}
            <AnimatePresence>
              {isAuthOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute flex items-center justify-center w-[260px] bg-black/60 rounded-md backdrop-blur-md top-12 right-2"
                >
                  <div className="p-2 mx-auto">
                    <div 
                      ref={authRef}
                      className="flex items-center w-full gap-2"
                    >
                      <SecondaryLink 
                        href="/signin" label="Log In"
                        rotateClass="rotate-90"
                      />
                      <PrimaryLink href="/signup" label="Sign Up" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative items-center hidden gap-1 lg:flex sm:gap-2">

            {/* Desktop Auth Links */}
            <div 
              ref={authRef}
              className="flex items-center w-full gap-2"
            >
              <SecondaryLink 
                href="/signin" 
                label="Log In"
              />
              <PrimaryLink
                href="/signup" 
                label="Sign Up" 
              />
            </div>

          </div>
        </div>
      </header>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar Content */}
            <motion.aside
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"              
              className="fixed top-0 left-0 z-50 w-full h-full transition-all duration-300 ease-in-out transform bg-white shadow-lg lg:hidden sm:w-1/2 lg:w-1/3"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                ref={sidebarRef}
                className="flex flex-col h-full gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col h-full gap-4">
                  {/* Header */}
                  <div className="flex items-center justify-between w-full p-3 gap-4 shadow-md backdrop-blur-sm h-(--navbar-h)">
                    <div className="flex items-center">
                      <Link
                        href="/"
                        className="flex items-center gap-2"
                        onClick={() => {
                          setIsSidebarOpen(false);
                          console.log(isSidebarOpen);
                        }}
                      >
                        <AppLogo className="w-8 h-8 text-lg" />
                        <span className="text-xl text-(--agro-green-dark) font-bold">Debridger</span>
                      </Link>
                    </div>

                    <Button
                      variant="ghost"
                      className="h-6 flex items-center justify-center w-6 text-xl font-bold text-(--text-colour) hover:text-(--input-error-red) duration-300 ease-in-out hover:cursor-pointer transition-all"
                      onClick={() => {
                        setIsSidebarOpen(false);
                        console.log(isSidebarOpen);
                      }}
                    >
                      x
                    </Button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="w-full p-4">
                    <ul className="grid w-full gap-2">
                      {sideNavLinks.map(({ label, href, icon: Icon }) => {
                        const isActive = pathname === href;
                        return (
                          <li key={href}>
                            <Link
                              href={href}
                              passHref
                              className={`${
                                isActive
                                  ? "bg-[#E8EEE9] border-1 border-(--border-gray) text-(--heading-colour) shadow-md"
                                  : "text-(--text-colour) hover:bg-[[#E8EEE9] hover:shadow-md hover:bg-[#E8EEE9]"
                              } flex items-center gap-2 px-2 py-2 text-base font-medium rounded-md`}
                              onClick={() => setIsSidebarOpen(false)}
                            >
                              {Icon && <Icon className="w-5 h-5 text-(--agro-green-dark)" />}
                              <span>{label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>

                  {/* Authentication Links */}
                  <div className="flex flex-wrap items-center gap-4 p-4">
                    <SecondaryLink
                      href='/signin'
                      label="Login"
                    />

                    
                    <PrimaryLink
                      href='/signup'
                      label="Sign Up"
                    />
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}