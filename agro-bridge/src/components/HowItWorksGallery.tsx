
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Redo } from "lucide-react";

// ------------------------------------
// TYPES
// ------------------------------------
export interface SlidePair {
  id: string;
  imageUrlA: string;
  imageUrlB: string;
  imageAltA: string;
  imageAltB: string;
}

export interface ControlButton {
  id: string;
  label: string;
  subtitle?: string;
  imageIndex: number;
  icon: React.ComponentType<{ className?: string }>;
}

interface GalleryProps {
  slides: SlidePair[];
  controls: ControlButton[];
  maxVisibleDots?: number;
}

// ------------------------------------
// COMPONENT
// ------------------------------------
export default function HowItWorksGallery({
  slides,
  controls,
  maxVisibleDots = 5,
}: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = slides[activeIndex];
  const activeCtrl = controls.find((c) => c.imageIndex === activeIndex);

  return (
    <div className="relative grid w-full grid-cols-1 gap-16 lg:gap-4 lg:grid lg:grid-cols-2 lg:gap-12">

      {/* ------------------------------------
        LEFT SECTION — SLIDES
      ------------------------------------ */}
      <div className="relative flex flex-col gap-8 h-80 lg:min-h-full">

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;

              if (swipe > 2500 && activeIndex < slides.length - 1) {
                setActiveIndex(activeIndex + 1);
              } else if (swipe < -2500 && activeIndex > 0) {
                setActiveIndex(activeIndex - 1);
              }
            }}
            className="relative w-full h-full select-none"
          >
            {/* --------------------------
              Image A (main)
            --------------------------- */}
            <div className="relative w-4/5 mx-auto overflow-hidden h-60 sm:w-3/5 lg:pb-0 lg:mx-0 lg:w-4/5 lg:h-4/5 rounded-xl">
              <Image
                src={activeSlide.imageUrlA}
                alt={activeSlide.imageAltA}
                fill
                className="object-contain object-cover"
              />
            </div>

            <div className="absolute z-20 flex flex-col hidden h-full gap-4 lg:flex -right-2 lg:right-0 top-20 lg:top-20">

              {/* FLOATING LABEL */}
              <div className="flex items-center gap-1">
                <span className="bg-(--agro-green-light) text-black text-xs rounded-md shadow-md p-2">
                  {activeCtrl?.label}
                </span>
                <Redo className="w-16 h-12 rotate-52 text-[#D5DFD7]" />
              </div>

              {/* --------------------------
                Image B (floating right)
              --------------------------- */}
              <div className="overflow-hidden w-30 h-30">
                <Image
                  src={activeSlide.imageUrlB}
                  alt={activeSlide.imageAltB}
                  fill
                  className="object-contain -mt-6 lg:mt-4"
                />
              </div>
              
            </div>
          </motion.div>
        </AnimatePresence>

        {/* --------------------------
          DOT INDICATORS
        --------------------------- */}
        <div className="flex items-center justify-center gap-2">
          {slides.slice(0, maxVisibleDots).map((_, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`
                  rounded-full transition-all
                  ${isActive ? "w-6 h-2 bg-green-600 cursor-default" : "w-2 h-2 bg-gray-400 cursor-pointer hover:bg-gray-500"}
                `}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          })}
        </div>

      </div>

      {/* ------------------------------------
        RIGHT SECTION — CONTROLS
      ------------------------------------ */}
      <div className="flex flex-col justify-center w-full gap-4 pl-4 lg:pl-8">
        {controls.map((ctrl) => {
          const isActive = activeIndex === ctrl.imageIndex;
          const Icon = ctrl.icon;

          return (
            <button
              key={ctrl.id}
              onClick={() => setActiveIndex(ctrl.imageIndex)}
              className={`
                flex items-center gap-4 p-4 rounded-lg border-3 shadow-custom duration-300 ease-in-out transition-all
                ${isActive
                  ? "bg-[--agro-green-light] text-white border-(--agro-green-light) cursor-default"
                  : "bg-transparent text-(--text-colour-2) border-(--border-gray) hover:border-(--agro-green-light) cursor-pointer"}
              `}
            >
              <Icon 
                className={`w-8 h-8 p-2 shadow-custom rounded-md
                  ${isActive ? 
                    "text-white bg-(--agro-green-light)" : 
                    "text-(--text-colour) bg-white"}`
                } 
              />

              <div className="flex flex-col flex-1">

                {ctrl.label && (
                  <p className={`lg:text-lg text-left font-semibold ${isActive ? "text-(--agro-green-light)" : "text-(--border-gray)"}`}>
                    {ctrl.label}
                  </p>
                )}
                
                {ctrl.subtitle && (
                  <p className="text-sm text-left lg:text-base text-white text-(--text-colour-2)">
                    {ctrl.subtitle}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
