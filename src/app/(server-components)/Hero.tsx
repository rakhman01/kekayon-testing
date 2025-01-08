"use client";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import images from "../../../public/images/banner/banner1.png";
import image2 from "../../../public/images/banner/banner2.png";
import images3 from "../../../public/images/banner/banner3.png";
import images4 from "../../../public/images/banner/banner4.png";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";

export const slideshowData = [
    {
        imgSrc: images,
        imgAlt: "fashion-slideshow-01",
        heading: "Discover your next adventure with Kekayon",
        text: "Customized experiences that ignite passion, foster connections, and refresh the spirit.",
    },
    {
        imgSrc: image2,
        imgAlt: "fashion-slideshow-02",
        heading: "Discover your next adventure with Kekayon",
        text: "Customized experiences that ignite passion, foster connections, and refresh the spirit.",
    },
    {
        imgSrc: images3,
        imgAlt: "fashion-slideshow-03",
        heading: "Discover your next adventure with Kekayon",
        text: "Customized experiences that ignite passion, foster connections, and refresh the spirit.",
    },
    {
        imgSrc: images4,
        imgAlt: "fashion-slideshow-03",
        heading: "Discover your next adventure with Kekayon",
        text: "Customized experiences that ignite passion, foster connections, and refresh the spirit.",
    },
];

export default function Hero() {
    return (
        <section className="relative h-[640px] bg-green-300">
            <Swiper
                dir="ltr"
                slidesPerView={1}
                centeredSlides={false}
                spaceBetween={0}
                loop={true}
                autoplay={{ delay: 2000 }}
                speed={2000}
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                onSwiper={(swiper) => {
                    // Debug: Ensure the swiper instance is initialized
                    console.log("Swiper initialized", swiper);
                }}
            >
                {slideshowData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative">
                            <Image
                                className="w-full h-[640px] object-fill"
                                alt={item.imgAlt}
                                src={item.imgSrc}
                                width={2000}
                                height={1125}
                                priority
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                                <div className="container mx-auto text-center">
                                    <h1 className="text-white text-4xl font-bold mb-4">
                                        {item.heading}
                                    </h1>
                                    <p className="text-white text-lg mb-6">{item.text}</p>
                                    {/* <Link
                                        href="/"
                                        className="bg-white text-black px-6 py-3 text-xl rounded-full shadow-md hover:bg-gray-300 transition"
                                    >
                                        <span>Shop collection</span>
                                        <i className="ml-2 fas fa-arrow-right" />
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-center items-center">
            <HeroSearchForm />
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-4">
                <div className="swiper-pagination" />
            </div>
            {/* Navigation Arrows */}
            <div className="swiper-button-prev bg-transparent p-8 rounded-full shadow-md absolute left-4 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-50" />
            <div className="swiper-button-next bg-transparent p-8 rounded-full shadow-md absolute right-4 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-50" />
        </section>
    );
}
