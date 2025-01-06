"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "store/modal/modalSlice";
import { RootState } from "store/store";



const experiences = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/91774d90075a30df8f7b98ae6cd028ba894951ebc6874ab1744c8d177a7e9fa2?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
      title: "Sacred Monkey Forest Sanctuary",
      description: "The Sacred Monkey Forest Sanctuary in Ubud is a cultural and ecological landmark. Home to over 1,000 playful long-tailed macaques, it features three ancient temples from the 14th century. The forest symbolizes the coexistence of humans and nature. Visitors can stroll along pathways surrounded by banyan trees and moss-covered statues, encountering monkeys in their habitat and learning about Balinese traditions."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7627be7f5fec9e52afb43c5cae3c0bed8da7417aa9fdd64897fcfb8fa92ff512?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
      title: "Traditional Balinese Dance",
      description: "Balinese Dance is a captivating mix of storytelling and art, rooted in Bali's cultural heritage. These performances showcase ancient traditions, often depicting tales from Hindu epics like the Ramayana.\nEach movement is precise and symbolic, with intricate hand gestures and expressive eyes. Accompanied by the rhythms of a gamelan orchestra, the dances immerse audiences in divine legends.\nIn Ubud, you can see dances like the elegant Legong, the dramatic Barong and Keris Dance, or the mesmerizing Kecak Dance performed by a chanting choir around a flickering fire."
    }
  ];
  
  const accommodations = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1850589d53b2f100227f5ba6eb32cc934da544f43f3f3886226c43eaae7189d1?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
      name: "The Kayon Resort (Luxury)",
      rating: 5,
      reviews: 122,
      location: "Ubud, Bali, Indonesia",
      description: "Perched on the edge of a lush jungle in Ubud, The Kayon Resort offers a luxurious retreat for those seeking serenity and elegance. With its breathtaking views of the Petanu River, this resort blends modern luxury with traditional Balinese architecture. Guests can unwind in infinity pools overlooking the forest, indulge in spa treatments inspired by Balinese traditions, or savor gourmet meals at the resort's riverside restaurant. Perfect for honeymooners and couples, The Kayon is a haven of tranquility and romance."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5e6ff6114dfaa0009459529b317dca2a13a3512cbe0706c572da01fef5a34d7?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
      name: "Element by Westin (Mid-range)",
      rating: 4,
      reviews: 122,
      location: "Ubud, Bali, Indonesia",
      description: "Element by Westin provides a sustainable and stylish escape in Ubud, perfect for eco-conscious travelers. Featuring contemporary design with eco-friendly touches, the hotel offers comfortable rooms and suites with modern amenities. Guests can relax by the saltwater pool, enjoy healthy dining options at the on-site restaurant, or join daily yoga classes. Conveniently located near Ubud's cultural and natural attractions, it's a great choice for families and groups seeking affordability without compromising quality."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c8a23ec158aa4f8ca4cd7828fce5fd30d3fb2443b47e5160842e3cbb8a1be50?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
      name: "Tegal Sari Accommodation (Budget)",
      rating: 3,
      reviews: 122,
      location: "Ubud, Bali, Indonesia",
      description: "Tegal Sari Accommodation offers a cozy and budget-friendly stay in the heart of Ubud. Surrounded by lush rice fields, this charming property provides simple yet comfortable rooms with traditional Balinese decor. Guests can relax on private balconies overlooking the greenery, enjoy breakfast at the in-house café, or explore Ubud's main attractions just a short walk away. Perfect for solo travelers and backpackers, Tegal Sari combines value with a touch of Balinese hospitality."
    }
  ];

const ModalReadyMadeTours: React.FC = () => {
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
    const dispatch = useDispatch();
    const [translateY, setTranslateY] = useState(0); // Track how much the modal has been translated on Y-axis

    useEffect(() => {
        const handleScroll = () => {
            // Update translateY based on scroll position
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                setTranslateY(scrollY - 100); // Starts sliding up as user scrolls
            } else {
                setTranslateY(0); // Reset position when scroll is less than 50px
            }
        };

        if (isOpen) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);

    const handleBackdropClick = () => {
        dispatch(closeModal());
    };

    return (
        <div
            onClick={handleBackdropClick}
            className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 border border-black 
        ${isOpen ? "visible opacity-100" : "invisible opacity-0"
                }
      `}
        >
            <div
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                className={`bg-white px-4 py-8 mt-24 rounded-2xl shadow-lg w-96 sm:w-[480px] transition-transform duration-300 mx-auto `}
                style={{
                    // maxHeight: "90vh",
                    // overflowY: "auto",
                    transform: `translateY(-${translateY}px)`, // Adjust the translation on scroll
                }}
            >
                <h2 className="text-lg font-bold">Day 2 : Ubud and Tegallalang</h2>
                <p className="text-xs font-normal py-2 text-gray-600 ">
                    Begin at Tirta Empul Temple for a purification ritual. Then visit Tegallalang Rice Terraces, a UNESCO site,
                    and enjoy lunch at a café with views. Conclude with relaxation or a yoga session in Ubud.
                </p>
                <div className="mt-4">
                    <h2 className="text-lg font-bold mb-2">Your Tour Preferences</h2>
                    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
            <div className="text-lg font-semibold leading-none text-gray-900 max-md:max-w-full">
              Experiences
            </div>
            <div className="flex flex-col mt-4 w-full text-base text-gray-600 max-md:max-w-full">
              {experiences.map((experience, index) => (
                   <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full my-4">
                   <img
                     loading="lazy"
                     src={experience.image}
                     alt={experience.title}
                     className="object-contain shrink-0 w-60 rounded-2xl aspect-[1.33]"
                   />
                   <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
                     <div className="font-semibold max-md:max-w-full">{experience.title}</div>
                     <div className="mt-2 leading-6 max-md:max-w-full">{experience.description}</div>
                   </div>
                 </div>
              ))}
            </div>
            <div className="flex flex-col mt-4 w-full text-base text-gray-600 max-md:max-w-full">
              {accommodations.map((accommodation, index) => (
                   <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
                   <img
                     loading="lazy"
                     src={accommodation.image}
                     alt={accommodation.name}
                     className="object-contain shrink-0 w-60 rounded-2xl aspect-[1.33]"
                   />
                   <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
                     <div className="font-semibold max-md:max-w-full">{accommodation.name}</div>
                     <div className="flex flex-wrap gap-1 items-center mt-2 w-full text-sm leading-none text-gray-500 max-md:max-w-full">
                       <img
                         loading="lazy"
                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/4886f84aa7480fbce10aefa7e919694fc1da14d883f957348db2b4f7ba8c613a?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304"
                         alt=""
                         className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                       />
                       <div className="self-stretch my-auto w-[328px]">
                         <span className="text-base font-medium leading-4 text-gray-800">
                           {accommodation.rating}
                         </span>{" "}
                         <span className="text-base leading-4">({accommodation.reviews} reviews)</span>
                         <span className="leading-5"> · {accommodation.location}</span>
                       </div>
                     </div>
                     <div className="mt-2 leading-6 max-md:max-w-full">{accommodation.description}</div>
                   </div>
                 </div>
              ))}
            </div>
          </div>
                </div>
            </div>
        </div>
    );
};

export default ModalReadyMadeTours;


