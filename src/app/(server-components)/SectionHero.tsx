import React, { FC } from "react";
import imagePng from "@/images/hero-right.png";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
  title?: string
}

const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/614794b570ba04d22d18404f0678e4465c09b89c5033bf1dab5fb640b836fc68?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    alt: "Gallery image 1",
    className: "aspect-[1.34] max-md:mr-1.5"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c7ac371ddbe4ce2bcbe4456215e8f26c3ac1de0a6984c50e138d52235234968?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    alt: "Gallery image 2",
    className: "mt-8 aspect-[0.9]"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2a9bcaf5fe1e19826763fd557f17a75f7d9986114779689040104c9e0181234?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    alt: "Gallery image 3",
    className: "grow mt-36 aspect-[0.6] max-md:mt-10"
  }
];

const SectionHero: FC<SectionHeroProps> = ({ className = "", title }) => {

  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className} py-8`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-bold text-3xl md:text-4xl xl:text-7xl">
            {/* Discover your next adventure with <span className="text-primary-6000">{title}</span> */}
            {title}
          </h2>
          <span className="text-base md:text-2xl text-neutral-500 dark:text-neutral-400">
              Fuel Your Wanderlust with
            <br />
            Thrilling Outdoor Experiences
          </span>
        </div>
        <div className="flex-grow">
          {/* <Image className="w-full" src={imagePng} alt="hero" priority /> */}
          <section className="flex gap-5 max-md:flex-col">
            <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-6">
                <img
                  loading="lazy"
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className={`object-contain w-full ${galleryImages[0].className}`}
                />
                <img
                  loading="lazy"
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className={`object-contain w-full ${galleryImages[1].className}`}
                />
              </div>
            </article>
            <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className={`object-contain w-full ${galleryImages[2].className}`}
              />
            </article>
          </section>
        </div>
      </div>

      <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-10  w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
