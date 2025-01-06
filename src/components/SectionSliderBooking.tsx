"use client";

import React, { FC, useEffect, useState } from "react";
import { TaxonomyType } from "@/data/types";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { variants } from "@/utils/animationVariants";
import { useWindowSize } from "react-use";
import Image from "next/image";
import logo from "@/images/logo.png"

export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: any[];
  categoryCardType?: "card3" | "card4" | "card5";
  itemPerRow?: 3 |4 | 5;
  sliderStyle?: "style1" | "style2";
  selectedData: any;
  setSelectedData: any
}

const SectionSliderBooking: FC<SectionSliderNewCategoriesProps> = ({
  heading = "",
  subHeading = "",
  className = "",
  itemClassName = "",
  categories = [],
  itemPerRow = 5,
  categoryCardType = "card3",
  sliderStyle = "style1",
  selectedData, 
  setSelectedData

}) => {
  const windowWidth = useWindowSize().width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [numberOfItems, setNumberOfitem] = useState(0);

  const handleSelect = (item: any) => {
    setSelectedData((prevSelected: any) => {
      const isSelected = prevSelected.some((data: any) => data.id === item.id);
  
      // If already selected, remove it; otherwise, add it
      if (isSelected) {
        return prevSelected.filter((data: any) => data.id !== item.id);
      } else {
        return [...prevSelected, item];
      }
    });
  };
  

  const isSelected = (item: any) =>
    selectedData.some((data: any) => data.id === item.id);


  useEffect(() => {
    if (windowWidth < 320) {
      return setNumberOfitem(1);
    }
    if (windowWidth < 500) {
      return setNumberOfitem(itemPerRow - 3);
    }
    if (windowWidth < 1024) {
      return setNumberOfitem(itemPerRow - 2);
    }
    if (windowWidth < 1280) {
      return setNumberOfitem(itemPerRow - 1);
    }

    setNumberOfitem(itemPerRow);
  }, [itemPerRow, windowWidth]);

  function changeItemId(newVal: number) {
    if (newVal > currentIndex) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurrentIndex(newVal);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < categories?.length - 1) {
        changeItemId(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        changeItemId(currentIndex - 1);
      }
    },
    trackMouse: true,
  });

  if (!numberOfItems) return null;

  

  return (
    <div className={`${className}`}>
      {/* <Heading desc={subHeading} isCenter={sliderStyle === "style2"}>
        {heading}
      </Heading> */}
      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className={`relative flow-root`} {...handlers}>
          <div className={`flow-root overflow-hidden rounded-xl`}>
            <motion.ul
              initial={false}
              className="relative whitespace-nowrap -mx-2 xl:-mx-4"
            >
              <AnimatePresence initial={false} custom={direction}>
                {categories.map((item, indx) => {
                  const { title, name, href = "/", image, listingType } = item;                  

                  return (
                    <motion.li
                    onClick={() => handleSelect(item)}
                      className={`relative inline-block px-2 xl:px-4 ${itemClassName}`}
                      custom={direction}
                      initial={{
                        x: `${(currentIndex - 1) * -100}%`,
                      }}
                      animate={{
                        x: `${currentIndex * -100}%`,
                      }}
                      variants={variants(200, 1)}
                      key={indx}
                      style={{
                        width: `calc(1/3 * 100%)`,
                      }}
                    >
                      <div
                        className={`nc-CardCategory4 flex flex-col ${className}`}
                        data-nc-id="CardCategory4"
                      >
                        <div
                          className={`flex-shrink-0 relative w-full aspect-w-5 aspect-h-5 sm:aspect-h-6 h-0 rounded-2xl overflow-hidden group`}
                        >
                          <Image
                            // src={image || ""}
                            src={image || require('../images/full-logo.png')}
                            className={`object-contain w-full rounded-2xl   ${
                              isSelected(item) ? "bg-gray-200 ;' text-white" : "bg-white text-black"
                            }`}
                            fill
                            alt={title}
                            sizes="(max-width: 200px) 100vw, 400px"
                          />
                          <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
                        </div>
                      </div>
                    </motion.li>
                  )
                })}
              </AnimatePresence>
            </motion.ul>
          </div>

          {currentIndex ? (
            <PrevBtn
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeItemId(currentIndex - 1)}
              className="w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -left-3 xl:-left-6 top-1/3 -translate-y-1/2 z-[1]"
            />
          ) : null}

          {categories.length > currentIndex + numberOfItems ? (
            <NextBtn
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeItemId(currentIndex + 1)}
              className="w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -right-3 xl:-right-6 top-1/3 -translate-y-1/2 z-[1]"
            />
          ) : null}
        </div>
      </MotionConfig>
    </div>
  );
};

export default SectionSliderBooking;
