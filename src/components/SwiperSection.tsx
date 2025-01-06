// import * as React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"; // Import Swiper's CSS

// const destinations = [
//   {
//     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/76e025230554e2a277c9086c0e116608d78553cf1b6414b05b2c722e4e14d9a5?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
//     title: "A Land of Dragons \nand Pristine Islands",
//     location: "Komodo National Park, Indonesia"
//   },
//   {
//     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/583a412460bb062ab5b896afd72b6ab6590f26747fe22cf80aa7585a2418dd43?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
//     title: "Tropical Paradise",
//     location: "Bali, Indonesia"
//   },
//   {
//     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fc7c3de0e89b4199b55e8cb71e525219a13b41bb6d0331de0fa61a43da632fb?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
//     title: "The Heart of \nJavanese Heritage",
//     location: "Yogyakarta, Indonesia"
//   },
//   {
//     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/76e025230554e2a277c9086c0e116608d78553cf1b6414b05b2c722e4e14d9a5?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
//     title: "A Land of Dragons \nand Pristine Islands",
//     location: "Komodo National Park, Indonesia"
//   },
//   {
//     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/583a412460bb062ab5b896afd72b6ab6590f26747fe22cf80aa7585a2418dd43?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
//     title: "Tropical Paradise",
//     location: "Bali, Indonesia"
//   },
//   {
//     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fc7c3de0e89b4199b55e8cb71e525219a13b41bb6d0331de0fa61a43da632fb?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
//     title: "The Heart of \nJavanese Heritage",
//     location: "Yogyakarta, Indonesia"
//   }
// ];

// export const SwiperSection: React.FC = () => {
//   const slidesPerView = 3; // The number of slides visible at once

//   return (
//     <section className="swiper-section">
//       <Swiper
//         // slidesPerView={slidesPerView}
//         spaceBetween={30} // Adjust space between slides
//         loop={true} // Loop the slides
//         pagination={{ clickable: true }} // Enable pagination
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2,
//           slideShadows: true
//         }}
//         keyboard={
//           {
//             enabled: true
//           }
//         }
//         mousewheel={{
//           thresholdDelta: 70
//         }}
//       >
//         {destinations.map((destination, index) => (
//           <SwiperSlide key={index}>
//             <div className={`swiper-slide swiper-slide--${index + 1}`}>
//               <span>{destination.location}</span>
//               <div>
//                 <h2>{destination.title}</h2>
//                 <p>{destination.location}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <style jsx>{`
//         .swiper-section {
//           position: relative;
//           width: 100%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           overflow: hidden;
//         }

//         .swiper-section .swiper {
//           width: 100%;
//           padding-top: 50px;
//           padding-bottom: 50px;
//         }

//         .swiper-section .swiper-slide {
//           width: 100%;
//           height: 400px;
//           box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
//           filter: blur(1px);
//           border-radius: 10px;
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-end;
//           align-items: self-start;
//           background-size: cover;
//           background-position: center;
//         }

//         .swiper-section .swiper-slide span {
//           text-transform: uppercase;
//           color: #fff;
//           background: #1b7402;
//           padding: 7px 18px 7px 25px;
//           display: inline-block;
//           border-radius: 0 20px 20px 0px;
//           letter-spacing: 2px;
//           font-size: 0.8rem;
//           font-family: "Open Sans", sans-serif;
//         }

//         .swiper-section .swiper-slide--1 {
//           background: url('https://images.unsplash.com/photo-1556206079-747a7a424d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80') no-repeat center center / cover;
//         }

//         .swiper-section .swiper-slide--2 {
//           background: url('https://images.unsplash.com/photo-1571900670723-a317a66e3fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80') no-repeat center center / cover;
//         }

//         .swiper-section .swiper-slide--3 {
//           background: url('https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80') no-repeat center center / cover;
//         }

//         .swiper-section .swiper-slide--4 {
//           background: url('https://images.unsplash.com/photo-1556206079-747a7a424d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80') no-repeat center center / cover;
//         }

//         .swiper-section .swiper-slide h2 {
//           color: #fff;
//           font-family: "Roboto", sans-serif;
//           font-weight: 400;
//           font-size: 1.3rem;
//           line-height: 1.4;
//           margin-bottom: 15px;
//           padding: 25px 45px 0 25px;
//         }

//         .swiper-section .swiper-slide p {
//           color: #fff;
//           font-family: "Roboto", sans-serif;
//           font-weight: 300;
//           display: flex;
//           align-items: center;
//           padding: 0 25px 35px 25px;
//         }

//         .swiper-section .swiper-slide svg {
//           color: #fff;
//           width: 22px;
//           height: 22px;
//           margin-right: 7px;
//         }

//         .swiper-section .swiper-pagination-bullet,
//         .swiper-section .swiper-pagination-bullet-active {
//           background: #fff;
//         }
//       `}</style>
//     </section >
//   );
// };

import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const destinations = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/76e025230554e2a277c9086c0e116608d78553cf1b6414b05b2c722e4e14d9a5?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    title: "A Land of Dragons \nand Pristine Islands",
    location: "Komodo National Park, Indonesia"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/583a412460bb062ab5b896afd72b6ab6590f26747fe22cf80aa7585a2418dd43?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    title: "Tropical Paradise",
    location: "Bali, Indonesia"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fc7c3de0e89b4199b55e8cb71e525219a13b41bb6d0331de0fa61a43da632fb?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    title: "The Heart of \nJavanese Heritage",
    location: "Yogyakarta, Indonesia"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/76e025230554e2a277c9086c0e116608d78553cf1b6414b05b2c722e4e14d9a5?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    title: "A Land of Dragons \nand Pristine Islands",
    location: "Komodo National Park, Indonesia"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/583a412460bb062ab5b896afd72b6ab6590f26747fe22cf80aa7585a2418dd43?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    title: "Tropical Paradise",
    location: "Bali, Indonesia"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fc7c3de0e89b4199b55e8cb71e525219a13b41bb6d0331de0fa61a43da632fb?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    title: "The Heart of \nJavanese Heritage",
    location: "Yogyakarta, Indonesia"
  }
];

export const SwiperSection: React.FC = () => {
  return (
    <div className="flex flex-col py-12">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h1 className="text-4xl font-semibold leading-none text-gray-900 max-md:max-w-full">
          Top Picks for Exploring Indonesia
        </h1>
        <p className="mt-5 text-base leading-6 text-gray-500 max-md:max-w-full">
          Discover Indonesia's finest ready-made tours, designed to showcase the
          country's stunning landscapes and vibrant culture.
          <br />
          From breathtaking beaches to lush highlands, these are the tours
          travelers love most.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true
        }}
        mousewheel={{
          thresholdDelta: 70
        }}
        className="mt-12 w-full"
      >
        {destinations.map((destination, index) => {
          return (
            <SwiperSlide
              key={index}
              className={`flex flex-col overflow-hidden rounded-3xl ${index % 2 === 0 ? "bg-red-500" : "bg-gray-500"}`}
            >
              <div className="relative w-full shadow-lg aspect-[0.623]">
                <img
                  loading="lazy"
                  src={destination.imageSrc}
                  alt={`Destination view of ${destination.title}`}
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="relative flex flex-col pt-24 px-5 pb-8 text-white">
                  <div className="text-2xl font-semibold leading-8">
                    {destination.title}
                  </div>
                  <div className="flex items-center mt-2 text-lg leading-loose">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    {destination.location}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
