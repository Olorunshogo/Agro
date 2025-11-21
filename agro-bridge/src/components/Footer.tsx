

"use client"; 

import Link from 'next/link';
import { useState, useTransition } from 'react';
import { AppLogo } from './app-logo';
import type { NavLink } from '~/app/types/types';
import { PhoneIcon, MailIcon, MapPin } from 'lucide-react';

import { socialLinks } from '~/store/store';

let devYear: number = 2024;
let currentYear: number = new Date().getFullYear();

import { navLinks } from '~/store/store';

const supportLinks: NavLink[] = [
  { label: "Help center", href: "/contact#help" },
  { label: "Feedback", href: "/contact#feedback" },
  { label: "Tweet Us", href: "/contact#tweet" },
];

const footer2Links: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy#privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Legal", href: "/privacy" },
  { label: "Site Map", href: "/" }
];


export default function Footer() {

  const displayYear = currentYear > devYear ? `${devYear} - ${currentYear}` : `${devYear}`;
  
  return (
    <footer className="relative dark:bg-zinc-900 [font-family:var(--font-open-sans)]">
      <div className="grid gap-8 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) border-3 border-[#E5E7EB] rounded-lg w-full max-w-7xl mx-auto h-full"
      >
        
        {/* Footer 1 */}
        <div className="grid w-full grid-cols-1 gap-8 pt-22 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:pt-28">
          
          
          {/* Logo Area */}
          <div className="flex flex-col w-full gap-6">

            <div className="flex flex-col gap-2">
            
              {/* App Logo */}
              <Link href="/" className="flex items-center gap-2">
                <AppLogo className="w-6 h-6 text-primary" />
                <span className="text-2xl lg:text-3xl text-(--agro-green-dark) font-bold">AgroBridge</span>
              </Link>

              <p className="text-sm text-(--text-colour)">
                Connecting Farms to Global Markets.
              </p>

            </div>

            {/* Social Links */}
            <ul className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon, color }) => {
                return (
                  <li 
                    key={href}
                    className="relative flex flex-col items-center group"
                  >
                    {/* Label */}
                    <span
                      className={`
                        absolute -top-6 text-xs text-black dark:text-white px-2 py-0.5 rounded-md backdrop-blur-sm 
                        bg-white/80 dark:bg-black/50 opacity-0 group-hover:opacity-100 bg-red-900 
                        group-hover:translate-y-[-2px] transition-all duration-300 ease-in-out 
                        ${color?.replace("hover:", "")}
                      `}
                    >
                      {label}
                    </span>

                    {/* Icon */}
                    <Link
                      href={href}
                      className={`text-black dark:text-white ${color} focus:text-(--text-black)
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
          </div>

          {/* Quick Links */}
          <div className="flex flex-col w-full gap-4">
            <h4 className="text-lg font-semibold text-(--heading-colour) lg:text-xl dark:text-white">Quick Link</h4>

            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, href, icon: Icon }) => {
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center gap-2 text-sm text-(--text-colour) hover:text-primary focus:text-primary duration-300 ease-in-out transition-all"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col w-full gap-4">
            <h4 className="text-lg font-semibold text-(--heading-colour) lg:text-xl dark:text-white">Support</h4>

            <ul className="flex flex-col gap-2">
              {supportLinks.map(({ label, href, icon: Icon }) => {
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-(--text-colour) hover:text-primary focus:text-primary duration-300 ease-in-out transition-all"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col w-full gap-4">
            <h4 className="text-lg font-semibold text-(--heading-colour) lg:text-xl dark:text-white">Contact Us</h4>

            <ul className="flex flex-col gap-2">
              <li>
                {/* <a
                  href="tel:+23481334000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-(--text-colour) hover:text-primary focus:text-primary duration-300 ease-in-out transition-all"
                >
                  <PhoneIcon className="w-4 h-4" />                  
                  +234(0)81 334 000 000
                </a> */}
                <a
                  href="tel:+2347012288798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-(--text-colour) hover:text-primary focus:text-primary duration-300 ease-in-out transition-all"
                >
                  <PhoneIcon className="w-4 h-4" />                  
                  +234(0)70 1228 8798
                </a>
              </li>

              <li>
                {/* <a
                  href="mailto:agrobridge@yahoomail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-(--text-colour) hover:text-primary focus:text-primary duration-300 ease-in-out transition-all"
                >
                  <MailIcon className="w-4 h-4" />
                  agrobridge@yahoomail.com
                </a> */}
                <a
                  href="mailto:shownzy001@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-(--text-colour) hover:text-primary focus:text-primary duration-300 ease-in-out transition-all"
                >
                  <MailIcon className="w-4 h-4" />
                  shownzy001@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-2 text-black dark:text-white cursor-text">
                <MapPin className="w-4 h-4" />
                <span className="text-sm text-wrap">Kaduna State, Nigeria</span>
              </li>
            </ul>
          </div>

        </div>          

        {/* Footer 2 */}
        <div className="flex flex-col items-center justify-between gap-2 py-2 lg:flex-row text-(--text-colour)">
          <p className="flex items-center gap-1 text-xs lg:text-sm">
            <span>&copy; Copyright </span>
            <span>{displayYear}</span>
            <span>All Rights Reserved</span>
          </p>

          {/* Footer 2 Links: FAQs, Terms of Service and Privacy Policy */}
          <ul className="flex items-center gap-4">
            {footer2Links.map(({ label, href, icon: Icon }) => {
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[10px] sm:text-xs lg:text-sm hover:text-primary focus:text-primary"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

        </div>
      </div>
    </footer>
  );
}