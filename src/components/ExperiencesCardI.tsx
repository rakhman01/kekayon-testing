import React, { FC } from "react";
import GallerySlider from "@/components/GallerySlider";
import { DEMO_EXPERIENCES_LISTINGS } from "@/data/listings";
import { ExperiencesDataType } from "@/data/types";
import StartRating from "@/components/StartRating";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import Avatar from "@/shared/Avatar";
import Link from "next/link";
import { Route } from "next";
import Image from "next/image";

export interface ExperiencesCardHProps {
  className?: string;
  data?: any;
}

const DEMO_DATA: ExperiencesDataType = DEMO_EXPERIENCES_LISTINGS[0];

const ExperiencesCardI: FC<ExperiencesCardHProps> = ({
  className = "",
  data,
}) => {
  // const {
  //   galleryImgs,
  //   address,
  //   title,
  //   href,
  //   like,
  //   saleOff,
  //   isAds,
  //   price,
  //   reviewStart,
  //   reviewCount,
  //   author,
  //   id,
  //   categoriesInfo,
  //   packageDescriptions
  // } = data;


  const renderSliderGallery = () => {
    return (
      <div className="relative w-full h-72 md:w-96 flex-shrink-0 overflow-hidden p-2">
        <Image
          src={data?.image || require('../images/hero-right-3.png')}
          className={`object-fill w-full h-full `}
          fill
          alt={data.title}
        />
        {/* <GallerySlider
          ratioClass="aspect-w-12 aspect-h-9 md:aspect-h-11"
          galleryImgs={galleryImgs}
          uniqueID={`ExperiencesCardH_${id}`}
          href={href}
        /> */}
        {/* <BtnLikeIcon isLiked={like} className="absolute right-3 top-3" /> */}
        {/* {saleOff && <SaleOffBadge className="absolute left-3 top-3" />} */}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="flex-grow p-3 sm:p-5 flex flex-col">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {data?.isAds && <Badge name="ADS" color="green" />}
              <h2 className="text-lg font-medium capitalize">
                <span className="line-clamp-1">{data.title}</span>
                <div
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              </h2>

            </div>
            <div>
              {/* <p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
          Starting from
          </p> */}
              {/* <span className="text-base font-semibold text-secondary-700">
            {data?.price}
            {` `}
            <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
              /person
            </span>
          </span> */}
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
            {/* <StartRating reviewCount={data?.reviewCount} point={data?.reviewStart} /> */}
            <span>· </span>
            <div className="flex items-center">
              <span className="hidden sm:inline-block  text-base">
                <i className="las la-map-marked"></i>
              </span>
              {/* <span className="sm:ml-2"> {data?.location[0]?.name || ''}</span> */}
            </div>
          </div>
        </div>
        {/* <div className="hidden sm:block text-sm text-neutral-500 dark:text-neutral-400 mt-4">
          <ul className="list-disc ml-5">
            {packageDescriptions?.map((val: any, index: number) => {
              return <li key={index}>{val}</li>;
            })}
          </ul>
        </div> */}
        {/* <div className="flex items-center space-x-8 mt-4  ">
          <div className="flex items-center space-x-2">
            <i className="las la-clock text-lg"></i>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              3 hours
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="las la-user text-lg"></i>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              Up to 6 people
            </span>
          </div>
        </div> */}
        <div className="flex flex-row justify-start items-center gap-4 flex-wrap mt-4">
          {/* {categoriesInfo?.map((val: any, index: number) => {
          let IconComponent = val?.icon
            
          return <div key={index} className="flex flex-row justify-start items-center flex-wrap">
                        {IconComponent && <img src={IconComponent} alt="Icon" className="w-3 h-3 text-primary-6000 mr-1" />}
              <p className="text-xs text-gray-400">{val.text}</p>
            </div>
          })} */}
        </div>
        {/* <div className="w-14 border-b border-neutral-100 dark:border-neutral-800 my-4"></div>
        <div className="flex justify-between items-end">
          <div className="flex items-center space-x-3 text-sm text-neutral-700  dark:text-neutral-300">
            <Avatar imgUrl={author.avatar} userName={author.displayName} />
            <span className="hidden sm:inline-block">
              <span className="hidden sm:inline">Hosted by</span>{" "}
              {author.displayName}
            </span>
          </div>
          <span className="text-base font-semibold text-secondary-700">
            {price}
            {` `}
            <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
              /person
            </span>
          </span>
        </div> */}
      </div>
    );
  };

  return (
    <div
      className={`h-72 overflow-y-auto nc-ExperiencesCardH group relative bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-700 rounded-2xl overflow-hidden ${className}`}
    >
      <Link href={`/tours/details/${data.id}` as Route} className="absolute inset-0" />
      <div className="md:flex md:flex-row">
        {renderSliderGallery()}

        {renderContent()}
      </div>
    </div>
  );
};

export default ExperiencesCardI;
