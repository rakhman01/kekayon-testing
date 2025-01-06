import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import convertNumbThousand from "@/utils/convertNumbThousand";
import Link from "next/link";
import Image from "next/image";
import StartRating from "./StartRating";

export interface CardCategory5Props {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategory5: FC<any> = ({
  className = "",
  taxonomy,
}) => {
  console.log(taxonomy,"taxomys");
  
  const { count, name, href = "/", thumbnail} = taxonomy;
  return (
    <Link
      href={'/'}
      className={`nc-CardCategory5 flex flex-col ${className}`}
      data-nc-id="CardCategory5"
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-4 aspect-h-3 h-0 rounded-2xl overflow-hidden group`}
      >
        <Image
          fill
          alt=""
          src={taxonomy?.image_url || ""}
          className="object-cover w-full h-full rounded-2xl"
          sizes="(max-width: 400px) 100vw, 400px"
        />
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-4 px-3 truncate">
        <h2
          className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate mb-4`}
        >
          {taxonomy.title}
        </h2>
        {/* <span
          className={`block mt-2 text-sm text-neutral-6000 dark:text-neutral-400`}
        >
          {convertNumbThousand(count)} properties
        </span> */}
        <div className="text-sm text-neutral-500 dark:text-neutral-400 my-2">
          <div className="flex items-center">
            <span className="hidden sm:inline-block  text-base">
              <i className="las la-map-marked"></i>
            </span>
            <span className="sm:ml-2">Belitung Island, Belitung</span>
          </div>
          {/* <StartRating reviewCount={4} point={4} /> */}
        </div>
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
          Kategori
          </p>
          <span className="text-base font-semibold mt-4">
          {taxonomy?.category.name}
            {/* <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
              /person
            </span> */}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardCategory5;
