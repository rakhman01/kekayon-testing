import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import convertNumbThousand from "@/utils/convertNumbThousand";
import Link from "next/link";
import Image from "next/image";
import StartRating from "./StartRating";
import { Route } from "next";

export interface CardCategory5Props {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategory5: FC<any> = ({
  className = "",
  taxonomy,
}) => {
  return (
    <Link
      href={`/experience/details/${taxonomy?.id}`}
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
      <div className="mt-4 px-3">
        <h2
          className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate mb-4"
        >
          {taxonomy.title}
        </h2>
        {/* {taxonomy?.category.map((category: any, index: number) => (
          <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600">
            <div className="w-8 h-8 text-sm">{category.icon || ''}</div>
          </div>
          <h3 className="text-lg font-semibold mt-3">{category.name}</h3>
          <p className="text-sm text-gray-500 mt-2">{category.name}</p>
        </div>
    
      ))} */}

        <div
          dangerouslySetInnerHTML={{ __html: taxonomy.content }}
          className="text-sm overflow-hidden text-ellipsis whitespace-normal"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
          }}
        ></div>
      </div>
    </Link>


  );
};

export default CardCategory5;
