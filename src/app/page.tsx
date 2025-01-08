'use client'
import React, { useEffect, useState } from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import BackgroundSection from "@/components/BackgroundSection";
import SectionClientSay from "@/components/SectionClientSay";
import OverviewOfServices from "@/components/OverviewOfServices";
import HaveQuestion from "@/components/HaveQuestion";
import Heading2 from "@/shared/Heading2";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import Pagination from "@/shared/Pagination";
import ExperiencesCardI from "@/components/ExperiencesCardI";
import StayCard2 from "@/components/StayCard2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HttpDataClients from "config/utils";
import { initialStateSearchLocation, SearchApiResponse } from "config/location/types";
import { ApiResponseExperiences, initialStateDetailExperiences, initialStateExperiences } from "config/experiences/types";
import Hero from "./(server-components)/Hero";
import { SwiperSection } from "@/components/SwiperSection";
import ImageSlider from "@/components/SliderSample";


interface FAQData {
  question: string;
  answer?: string;
}

const faqData: FAQData[] = [
  {
    question: "What is included in a Kekayon travel package?",
    answer: "Our travel packages typically include accommodation, transportation, guided tours, and select meals, depending on the package. Each itinerary lists what is included, so you can see exactly what to expect. For custom packages, we'll work with you to create an itinerary tailored to your preferences."
  },
  { question: "Can I customize my itinerary?" },
  { question: "How do I book a trip with Kekayon?" },
  { question: "What is Kekayon's cancellation policy?" },
  { question: "Does Kekayon offer sustainable travel options?" }
];


function PageHome() {
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  const [dataExperience, setDataExperience] = useState<ApiResponseExperiences>(initialStateExperiences)

  const getExperience = async () => {
    let res = await HttpDataClients.SearchExperience({ page: 1, s: '' })
    if (res.status) {
      setDataExperience(res)
    }
  }

  useEffect(() => {
    getExperience()
  }, [])



  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        {/* <SectionHero  className="pt-10 lg:pt-16 lg:pb-16" /> */}
        <Hero />
        {/* Overview */}
        <OverviewOfServices />
        {/*  */}
        {/* <ImageSlider /> */}
        <SwiperSection />

        {/* Explore Indonesia */}
        {/* <div className="min-h-screen w-full flex-shrink-0 xl:px-8 py-16 ">
          <Heading2
            heading="Top Picks for Exploring Indonesia"
            subHeading={
              <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
                Discover Indonesia's finest ready-made tours, designed to showcase the country’s stunning landscapes and vibrant culture.
                From breathtaking beaches to lush highlands, these are the tours travelers love most.
              </span>
            }
          />
          <div className="grid grid-cols-1 gap-8">
            {data.map((item: any) => {
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setCurrentHoverID((_) => item.id)}
                  onMouseLeave={() => setCurrentHoverID((_) => -1)}
                >
                  <ExperiencesCardI data={item} />
                </div>
              )
            })}
          </div>
        </div> */}


        <SectionSliderNewCategories
          heading="List Experience"
          subHeading="Handpicked by our travel experts, these tours highlight the best Indonesia has to offer. 
Immerse yourself in unforgettable experiences across the archipelago."
          categoryCardType="card5"
          itemPerRow={2}
          categories={dataExperience?.data}
          data={dataExperience?.data}
        />

        {/* filter explore indonesia */}
        <div
          className={`nc-SectionGridFilterCard `}
          data-nc-id="SectionGridFilterCard"
        >
          <Heading2 heading="Explore Indonesia, Island by Island"
            subHeading={`
          From Bali's tropical beauty to Sumatra's rugged wilderness, discover tours tailored
          to Indonesia's unique regions. Each destination offers its own charm and adventure.`}
          />
          {/* <div className="mb-8 lg:mb-11">
            <TabFilters />
          </div> */}
          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DEMO_STAY_LISTINGS.filter((_, i) => i < 8).map((stay) => (
              <StayCard2 key={stay.id} data={stay} />
            ))}
          </div>
          <div className="flex mt-16 justify-center items-center">
            <Pagination />
          </div>
        </div>

        {/*  */}
        <div
          className={`nc-SectionGridFilterCard `}
          data-nc-id="SectionGridFilterCard"
        >
          <Heading2 heading="Pursue Your Passion Across Indonesia"
            subHeading={`
          Whether you love adventure, culture, or relaxation, Indonesia has it all. 
Explore tours designed around what excites you most.`}
          />
          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DEMO_STAY_LISTINGS.filter((_, i) => i < 8).map((stay) => (
              <StayCard2 key={stay.id} data={stay} />
            ))}
          </div>
          <div className="flex mt-16 justify-center items-center">
            <ButtonPrimary >Show more</ButtonPrimary>
          </div>
        </div>
        {/*  */}
        <div
          className={`nc-SectionGridFilterCard `}
          data-nc-id="SectionGridFilterCard"
        >
          <Heading2 heading="Travel Your Way in Indonesia"
            subHeading={`
          Find a travel style that matches your preferences, from laid-back island escapes to action-packed adventures.`}
          />
          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DEMO_STAY_LISTINGS.filter((_, i) => i < 8).map((stay) => (
              <StayCard2 key={stay.id} data={stay} />
            ))}
          </div>
          <div className="flex mt-16 justify-center items-center">
            <ButtonPrimary >Show more</ButtonPrimary>
          </div>
        </div>
        {/*  */}
        <div
          className={`nc-SectionGridFilterCard `}
          data-nc-id="SectionGridFilterCard"
        >
          <Heading2 heading="Perfect Trips for Every Group in Indonesia"
            subHeading={`
    No matter who you’re traveling with, we have tours suited to your group size and dynamic.`}
          />
          {/* <div className="mb-8 lg:mb-11">
            <TabFilters />
          </div> */}
          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DEMO_STAY_LISTINGS.filter((_, i) => i < 8).map((stay) => (
              <StayCard2 key={stay.id} data={stay} />
            ))}
          </div>
          <div className="flex mt-16 justify-center items-center">
            <Pagination />
          </div>
        </div>
        {/*  */}
        <div
          className={`nc-SectionGridFilterCard `}
          data-nc-id="SectionGridFilterCard"
        >
          <Heading2 heading="Trips That Fit Your Schedule in Indonesia"
            subHeading={`
  From quick weekend getaways to extended island explorations, find tours that suit your time frame.`}
          />

          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DEMO_STAY_LISTINGS.filter((_, i) => i < 8).map((stay) => (
              <StayCard2 key={stay.id} data={stay} />
            ))}
          </div>
          <div className="flex mt-16 justify-center items-center">
            <Pagination />
          </div>
        </div>



        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>
        {/* <section className="flex flex-wrap gap-8 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/384d6888f61dbe38d2c8e477b1a33b6754696a2768016973c7260a66fe7ce687?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304"
            alt="Illustration representing Frequently Asked Questions"
            className="object-contain grow shrink self-stretch my-auto aspect-square min-w-[240px] w-[528px] max-md:max-w-full"
          />
          <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[480px] max-md:max-w-full">
            <header className="flex flex-col w-full max-md:max-w-full">
              <h2 className="flex-1 shrink gap-2.5 w-full text-3xl font-bold leading-tight text-gray-900 max-md:max-w-full">
                Frequently Asked Questions (FAQs)
              </h2>
              <p className="mt-5 text-base leading-6 text-gray-500 max-md:max-w-full">
                Get quick answers to your most common questions about booking, itineraries, payment options, and more. Our FAQs cover everything you need to know before, during, and after your trip.
              </p>
            </header>
            <div className="flex flex-col mt-8 w-full max-w-[600px] max-md:max-w-full">
              {faqData.map((faq, index) => (
                <div key={index} className={`flex flex-wrap gap-6 items-start p-4 w-full bg-gray-50 rounded-lg ${faq.answer ? '' : 'mt-4'}`}>
                  <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                    <h3 className="text-base font-semibold text-gray-900">{faq.question}</h3>
                    {faq.answer && (
                      <p className="mt-2 text-sm font-medium leading-5 text-gray-500 max-md:max-w-full">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <img
                    loading="lazy"
                    src={faq.answer ? "https://cdn.builder.io/api/v1/image/assets/TEMP/b24e4cf53682f655988da2f6fbac685e24d65d5f16e6d77c95cf05892c13513b?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304" : "https://cdn.builder.io/api/v1/image/assets/TEMP/a36ccec5ee927dce1c99f2c14b00aaff84deec0e78a2cb57eaeca0cbe2074112?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304"}
                    alt=""
                    className="object-contain shrink-0 w-4 aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <HaveQuestion />
      </div>
    </main>
  );
}

export default PageHome;
