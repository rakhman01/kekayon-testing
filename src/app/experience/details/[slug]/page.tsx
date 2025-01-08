'use client'
import React, { useEffect, useState } from "react";
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
import { SwiperSection } from "@/components/SwiperSection";
import Hero from "@/app/(server-components)/Hero";
import { useParams } from "next/navigation";
import Image from "next/image";


function PageHome() {
  const params = useParams();
  const { slug } = params;
  const [dataExperience, setDataExperience] = useState<ApiResponseExperiences>(initialStateExperiences)
  const [dataDetailExperience, setDataDetailExperience] = useState<any>(null)

  const getExperience = async () => {
    let res = await HttpDataClients.SearchExperience({ page: 1, s: '' })
    if (res.status) {
      setDataExperience(res)
    }
  }
  const getDetailExperience = async () => {
    let res = await HttpDataClients.SearchDetailExperience({ id: slug, lang: '' })
    if (res.status) {
      setDataDetailExperience(res.data)
    }
  }


  useEffect(() => {
    getExperience()
    getDetailExperience()
  }, [])

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <Image
          src={dataDetailExperience?.image_url}
          className="w-full h-96 object-cover"
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover" alt={""} />
        <h2 className="text-2xl font-semibold">{dataDetailExperience?.title}</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div dangerouslySetInnerHTML={{ __html: dataDetailExperience?.content }} className="text-neutral-6000 dark:text-neutral-300">

        </div>
      </div>
    );
  };


  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        {/* <SectionHero  className="pt-10 lg:pt-16 lg:pb-16" /> */}
        <Hero />
        {renderSection2()}
        {/* experience serupa */}
        <SectionSliderNewCategories
          heading="List Experience Serupa"
          subHeading="Handpicked by our travel experts, these tours highlight the best Indonesia has to offer. 
Immerse yourself in unforgettable experiences across the archipelago."
          categoryCardType="card5"
          itemPerRow={4}
          categories={dataExperience?.data}
          data={dataExperience?.data}
        />

        {/* filter explore indonesia */}
        <div
          className={`nc-SectionGridFilterCard `}
          data-nc-id="SectionGridFilterCard"
        >
          <Heading2 heading="List Experience serupa"
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

        <HaveQuestion />
      </div>
    </main>
  );
}

export default PageHome;
