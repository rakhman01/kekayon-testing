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
import StayCard2 from "@/components/StayCard2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HttpDataClients from "config/utils";
import { ApiResponseExperiences, initialStateExperiences } from "config/experiences/types";
import Hero from "./(server-components)/Hero";
import { SwiperSection } from "@/components/SwiperSection";
import TabFilters from "./(experience-listings)/TabFilters";


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
          itemPerRow={3}
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
          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {DEMO_STAY_LISTINGS.filter((_, i) => i < 9).map((stay) => (
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
          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {DEMO_STAY_LISTINGS.filter((_, i) => i < 9).map((stay) => (
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
          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {DEMO_STAY_LISTINGS.filter((_, i) => i < 9).map((stay) => (
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
          <div className="mb-8 lg:mb-11">
            {/* <TabFilters /> */}
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {DEMO_STAY_LISTINGS.filter((_, i) => i < 9).map((stay) => (
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

          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {DEMO_STAY_LISTINGS.filter((_, i) => i < 9).map((stay) => (
              <StayCard2 key={stay.id} data={stay} />
            ))}
          </div>
          <div className="flex mt-16 justify-center items-center">
            <Pagination />
          </div>
        </div>


{/* 
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div> */}
        <HaveQuestion />
      </div>
    </main>
  );
}

export default PageHome;
