import React, { FC } from "react";
import GallerySlider from "@/components/GallerySlider";
import Link from "next/link";
import { Route } from "next";

export interface ExperiencesCardHProps {
  className?: string;
  data?: any;
  loading?: boolean; // Add loading prop to handle skeleton loader
}

const ExperiencesCardI: FC<ExperiencesCardHProps> = ({
  className = "",
  data,
  loading = false, // Default to false, meaning it's not loading unless specified
}) => {
  const renderSliderGallery = () => {
    if (loading) {
      return (
        <div className="relative w-full h-72 md:w-96 flex-shrink-0 overflow-hidden p-2 bg-gray-200 animate-pulse">
          {/* Skeleton for the image gallery */}
          <div className="w-full h-full bg-gray-300 rounded-lg" />
          <div className="absolute z-50 m-2 w-12 h-12 rounded-full bg-white flex justify-center items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full h-72 md:w-96 flex-shrink-0 overflow-hidden p-2">
        <div className="w-12 h-12 absolute z-50 m-2 rounded-full bg-white flex justify-center items-center">
          <p className="text-sm font-semibold text-primary-6000">{data.duration}</p>
        </div>
        <GallerySlider
          galleryImgs={data.gallery || []}
          uniqueID={`${data.id}`}
        />
      </div>
    );
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex-grow p-3 sm:p-5 flex flex-col bg-gray-200 animate-pulse">
          {/* Skeleton for content */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-32 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
            <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
            {/* Skeleton for location */}
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex-grow p-3 sm:p-5 flex flex-col">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-medium capitalize">
                <div className="flex justify-center items-start gap-2">
                  <span className="line-clamp-1 font-bold mb-2">{data.title}</span>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              </h2>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
            <span>· </span>
            <div className="flex items-center">
              <span className="hidden sm:inline-block text-base">
                <i className="las la-map-marked"></i>
              </span>
              {data && data?.location_flow?.map((val: any) => {
                return val.location.map((val: any) => {
                  return (
                    <p className="font-semibold text-sm ml-2 text-black">{`${val.title} | `}  </p>
                  )
                });
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center gap-4 flex-wrap mt-4">
          {data.experiences_categories?.map((val: any, index: number) => {
            let IconComponent = val?.icon;
            return (
              <div key={index} className="flex flex-row justify-start items-center flex-wrap">
                {IconComponent && <img src={IconComponent} alt="Icon" className="w-3 h-3 text-primary-6000 mr-1" />}
                <p className="text-xs text-gray-400">Adventure Travel</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`h-80 overflow-y-auto nc-ExperiencesCardH group relative bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-700 rounded-2xl overflow-hidden ${className}`}
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
