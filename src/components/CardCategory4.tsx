import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import convertNumbThousand from "@/utils/convertNumbThousand";
import Link from "next/link";
import Image from "next/image";

export interface CardCategory4Props {
  className?: string;
  taxonomy: any;
}

const CardCategory4: FC<CardCategory4Props> = ({
  className = "",
  taxonomy,
}) => {
  // const { count, name, href = "/", image_url, listingType } = taxonomy;
  return (
    <Link
      href={'/'}
      className={`nc-CardCategory4 flex flex-col ${className}`}
      data-nc-id="CardCategory4"
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-5 aspect-h-5 sm:aspect-h-6 h-0 rounded-2xl overflow-hidden group`}
      >
        <Image
          src={taxonomy?.image_url || ""}
          className="object-cover w-full h-full rounded-2xl"
          fill
          alt="archive"
          sizes="(max-width: 400px) 100vw, 400px"
        />
                       <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                                <div className="container mx-auto text-center">
                                    <h1 className="text-white text-4xl font-bold mb-4">
                                        {taxonomy?.name}
                                    </h1>
                                    <p className="text-white text-lg mb-6">{taxonomy?.name}</p>
                                    {/* <Link
                                        href="/"
                                        className="bg-white text-black px-6 py-3 text-xl rounded-full shadow-md hover:bg-gray-300 transition"
                                    >
                                        <span>Shop collection</span>
                                        <i className="ml-2 fas fa-arrow-right" />
                                    </Link> */}
                                </div>
                            </div>
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      {/* <div className="mt-4 px-2 truncate text-center">
        <h2
          className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate`}
        >
          {name}
        </h2>
        <span
          className={`block mt-2 text-sm text-neutral-6000 dark:text-neutral-400`}
        >
          {convertNumbThousand(count || 0)}
          {` `}
          {(!listingType || listingType === "stay") && "properties"}
          {listingType === "car" && "cars"}
          {listingType === "experiences" && "experiences"}
        </span>
      </div> */}
    </Link>
  );
};

export default CardCategory4;
