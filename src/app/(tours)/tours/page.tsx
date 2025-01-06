'use client'
import React, { useEffect, useState } from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import HaveQuestion from "@/components/HaveQuestion";
import Heading2 from "@/shared/Heading2";
import { DEMO_EXPERIENCES_LISTINGS, DEMO_STAY_LISTINGS } from "@/data/listings";
import Pagination from "@/shared/Pagination";
import ExperiencesCardI from "@/components/ExperiencesCardI";
import StayCard2 from "@/components/StayCard2";
import { useSearchParams } from "next/navigation";
import HttpDataClients from "config/utils";



function PageHome({ params }: any) {
    const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
    const [showFullMapFixed, setShowFullMapFixed] = useState(false);
    const [keywordData, setKeyword] = useState("");
  // Wrap useSearchParams in a Suspense boundary
  const searchParams = useSearchParams();
    const [dataTours, setDataTours] = useState([])
    

    const getDataTours = async () => {
        const res = await HttpDataClients.SearchTours({page: 1, s: '', service_name: keywordData})
        if (res.status = 1) {
            setDataTours(res.data)
        }
        
    }    

  // Get keyword from the query string
  useEffect(() => {
    const keywordValue = searchParams.get("keyword") || "";
    if (keywordValue !== keywordData) {
      setKeyword(keywordValue);
    }
    getDataTours()
  }, [searchParams,]);
    

    return (
        <main className="nc-PageHome relative overflow-hidden">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                {/* SECTION HERO */}
                <SectionHero title={"Active Adventures"}  className="pt-10 lg:pt-16 lg:pb-16" />
                {/* slider  */}
                {/* <SectionSliderNewCategories /> */}
                {/* Explore Indonesia */}
                <div className="min-h-screen w-full flex-shrink-0 xl:px-8 py-16 ">
                    <Heading2
                        heading="List Tours"
                        subHeading={
                            <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
                                Discover Indonesia's finest ready-made tours, designed to showcase the country’s stunning landscapes and vibrant culture.
                                From breathtaking beaches to lush highlands, these are the tours travelers love most.
                            </span>
                        }
                    />
                    <div className="grid grid-cols-1 gap-8">
                        {dataTours.map((item: any) => {
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
                </div>

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


                <HaveQuestion />
            </div>
        </main>
    );
}

export default PageHome;
