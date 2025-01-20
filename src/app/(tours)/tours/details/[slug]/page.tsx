"use client";

import React, { FC, useEffect, useState } from "react";
import { ArrowRightIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import Badge from "@/shared/Badge";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import { useParams, usePathname, useRouter } from "next/navigation";
import LikeSaveBtns from "@/components/LikeSaveBtns";
import StartRating from "@/components/StartRating";
import Image from "next/image";

import { Route } from "next";
import { highlights, includes_demo, PHOTOS } from "@/app/(listing-detail)/listing-car-detail/constant";
import StayDatesRangeInput from "@/app/(client-components)/(HeroSearchForm2Mobile)/DatesRangeInput";
import GuestsInput from "@/app/(client-components)/(HeroSearchForm2Mobile)/GuestsInput";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import Heading2 from "@/shared/Heading2";
import ExperiencesCardI from "@/components/ExperiencesCardI";
import HttpDataClients from "config/utils";
import { ChevronDownIcon, ChevronUpIcon, MapPinIcon } from "@heroicons/react/24/solid";
import FloatingMenu from "@/components/FloatingMenu";

export interface ListingExperiencesDetailPageProps { }

const categoriesInfo: any = [
  {
    "icon": "https://cdn.builder.io/api/v1/image/assets/TEMP/4e8a9f628712b7e7ac6325cb017eda2dedd989f2898022d7aa72e305025f10d0?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    "text": "Active Adventures"
  },
  {
    "icon": "https://cdn.builder.io/api/v1/image/assets/TEMP/b999406e291817be0ad2ce29210ada4e8fdba541b86c2844f3d7b19d8fe0d44b?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    "text": "Scenic Road Trips"
  },
  {
    "icon": "https://cdn.builder.io/api/v1/image/assets/TEMP/dd1b2a3396f0d8da2147fd463a65914bcfc1b3764d218d8acf6a9077ce09363c?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    "text": "Wildlife Encounters"
  },
  {
    "icon": "https://cdn.builder.io/api/v1/image/assets/TEMP/cbbb6f7e0e502b27504fae5dc7cb2477a44480bc52b46d8cbc7cc4327177ff29?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    "text": "Couples & Friends"
  },
  {
    "icon": "https://cdn.builder.io/api/v1/image/assets/TEMP/2a35234306b3da09580c16c24ba938534785ee05164e91494e08d21950c5e7dc?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
    "text": "2-Week Escapes"
  }
]


const tourPackages: any[] = [
  {
    type: "Economy",
    typeColor: "text-gray-800",
    typeBgColor: "bg-gray-100",
    description: "Ideal for budget travelers, the Economy package offers comfortable 3-star stays, essential inclusions, and guided activities to fully experience the destination.",
    features: {
      accommodation: "3* Hotel (8 nights), Cruise (1 night), Train (2 nights)",
      transportation: "Car, Walking, Train, Trekking, Flight",
      inclusions: [
        "Private Guide, Driver, Trip Manager",
        "11 Breakfasts, 7 Lunches, 2 Dinners",
        "16 Unique Experiences",
        "Entrance Fees, Excursions, Visa, Drinking Water"
      ]
    },
    buttonStyle: "text-teal-700 bg-white"
  },
  {
    type: "Deluxe",
    typeColor: "text-emerald-800",
    typeBgColor: "bg-emerald-100",
    description: "The Deluxe package offers travelers a blend of comfort and value with 4-star accommodations and enriching activities. Enjoy personalized service, tasty meals, and smooth travel logistics.",
    features: {
      accommodation: "4* Hotel (8 nights), Cruise (1 night), Train (2 nights)",
      transportation: "Car, Walking, Train, Trekking, Flight",
      inclusions: [
        "Private Guide, Driver, Trip Manager",
        "11 Breakfasts, 7 Lunches, 2 Dinners",
        "16 Unique Experiences",
        "Entrance Fees, Excursions, Visa, Drinking Water"
      ]
    },
    buttonStyle: "text-white bg-teal-700"
  },
  {
    type: "Luxury",
    typeColor: "text-amber-800",
    typeBgColor: "bg-amber-100",
    description: "The Luxury package provides premium 5-star accommodations, exclusive activities, and unmatched comfort, ensuring an unforgettable journey with private guides and exquisite dining.",
    features: {
      accommodation: "5* Hotel (8 nights), Cruise (1 night), Train (2 nights)",
      transportation: "Car, Walking, Train, Trekking, Flight",
      inclusions: [
        "Private Guide, Driver, Trip Manager",
        "11 Breakfasts, 7 Lunches, 2 Dinners",
        "16 Unique Experiences",
        "Entrance Fees, Excursions, Visa, Drinking Water"
      ]
    },
    buttonStyle: "text-teal-700 bg-white"
  }
];

const Page: FC<
  ListingExperiencesDetailPageProps
> = ({ }) => {
  const thisPathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const { slug } = params;
  const [dataTours, setDataTours] = useState<any>()
  const [dataSummaryTours, setDataSummaryTours] = useState<any>([])
  const [dataRelatedTours, setDataRelatedTours] = useState<any>([])

  const getDataTours = async () => {

    const res = await HttpDataClients.SearchDetailTours({ id: slug, lang: '' })
    if (res.status = 1) {
      setDataTours(res.data)
    }
  }
  const getDataSummaryTours = async () => {

    const res = await HttpDataClients.SearchDetailSummaryTours({ id: slug, lang: '' })

    if (res.status = 1) {
      setDataSummaryTours(res.data)
    }
  }
  const getDataRelatedTours = async () => {

    const res = await HttpDataClients.SearchDetailRelatedTours({ id: slug, lang: '' })
    if (res.status = 1) {
      setDataRelatedTours(res.data)
    }
  }

  // Get keyword from the query string
  useEffect(() => {
    // if (slug !== slug && slug !== undefined) {
    getDataTours()
    getDataSummaryTours()
    getDataRelatedTours()
    // }
  }, [slug]);


  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route);
  };

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        {/* 1 */}
        <div className="flex justify-between items-center">
          <Badge color="pink" name="Specific Tour" />
          <LikeSaveBtns />
        </div>

        {/* 2 */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {dataTours?.title}
        </h2>

        {/* 3 */}
        <div className="flex items-center space-x-4">
          {/* <StartRating />
          <span>·</span> */}
          <span>
            <i className="las la-map-marker-alt"></i>
            {/* <span className="ml-1"> {dataTours?.location[0]?.name && dataTours.location}</span> */}
          </span>
        </div>

        {/* 4 */}
        {/* <div className="flex items-center">
          <Avatar hasChecked sizeClass="h-10 w-10" radius="rounded-full" />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
            Hosted by{" "}
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              Kevin Francis
            </span>
          </span>
        </div> */}

        {/* 5 */}
        <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />

        {/* 6 */}
        <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
            <i className="las la-clock text-2xl"></i>
            <span className="">3.5 hours</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
            <i className="las la-user-friends text-2xl"></i>
            <span className="">Up to 10 people</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 text-center sm:text-left sm:space-x-3 ">
            <i className="las la-language text-2xl"></i>
            <span className="">English, VietNames</span>
          </div>
        </div>
        {/*  */}
        <SectionSliderNewCategories
          categories={dataSummaryTours.locations || []}
          categoryCardType="card4"
          itemPerRow={4}
          className="my-2"
        />
      </div>
    );
  };

  const renderSection2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<any>(null);
    

    const handleReadMore = (data: any) => {
      setModalData(data);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setModalData(null);
    };

    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Inclusions of this tour</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Included
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          {Object.keys(dataSummaryTours?.summary || {}).map((item: string) => {
            const data = dataSummaryTours?.summary[item]; // Get the array for each key

            return (
              <div
                key={item}
                className="flex items-center space-x-3 border border-gray-200 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-50 shadow-lg"
              >
                <div className="w-full flex flex-col justify-center items-start">
                  <MapPinIcon className="h-8 w-8 sm:h-12 sm:w-12" />
                  <span className="text-sm font-semibold">{item}</span>
                  <div className="w-full flex justify-start items-start">
                    <ul className="w-full flex justify-start items-start">
                      {Array.isArray(data) ? (
                        data.map((entry, index) => (
                          <li key={index}>
                            <span className="text-xs mr-2 truncate">
                              {entry.title} |
                            </span>
                            {entry.has_hotel}
                          </li>
                        ))
                      ) : (
                        <span>-</span>
                      )}
                    </ul>
                  </div>
                  <button
                    onClick={() => handleReadMore(data)} // Pass data to the modal
                    className="w-24 h-8 flex justify-center text-xs text-white border-white items-center rounded-full bg-primary-50 mt-2"
                  >
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            onClick={() => setIsModalOpen(false)} // Close modal when background is clicked
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 top-20"
          >
            <div
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal content
              className="bg-white rounded-lg shadow-lg max-w-md w-full p-4"
            >
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-lg font-semibold">Details</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-800 focus:outline-none"
                >
                  ×
                </button>
              </div>
              <ul className="mt-2 space-y-2">
                {Array.isArray(modalData) && modalData.length > 0 ? (
                  modalData.map((entry: any, index: number) => (
                    <li key={index} className="border-b pb-2">
                      <p className="font-semibold">{entry.title}</p>
                      <p>Has Hotel: {entry.has_hotel ? "Yes" : "No"}</p>
                      {entry.image_url && (
                        <img
                          src={entry.image_url}
                          alt={entry.title}
                          className="mt-2 w-full rounded-md"
                        />
                      )}
                    </li>
                  ))
                ) : (
                  <p>No details available</p>
                )}
              </ul>
            </div>
          </div>
        )}


      </div>
    );
  };

  const renderSection3 = () => {
    return (
      <div className="listingSection__wrap">
        {/* <h2 className="text-2xl font-semibold">Experiences descriptions</h2> */}
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="text-neutral-6000 dark:text-neutral-300">
          <p>
            TRANG AN BOAT TOUR & MUA CAVE CLIMBING TOUR FROM HANOI
            <br />
            <br />
            07:30 – 08:00 – Our guide will meet you at your hotel/stay and start
            a 120km comfortable Limousine bus journey through the verdant
            landscape. Stopover for a rest on the way.
            <br />
            <br />
            BAI DINH PAGODA EXPLORER.
            <br />
            <br />
            10:30 – Arrive Bai Dinh pagoda complex, get on electric cars to
            visit massive architecture.
            <br />
            <br />
            12:15 – Enjoy the buffet lunch at our restaurant, a great place to
            savor the flavours of Vietnamese food.
            <br />
            <br />
            TRANG AN TOUR ON BOAT.
            <br />
            <br />
            13:30 – Visit Trang An Grottoes, get on a rowing boat traveling
            along the river with scenic mountain and green fields landscape.
            <br />
            <br />
            MUA CAVE HIKING. TAKE PICTURE
            <br />
            <br />
            15:45 – Arrive at Mua Cave and start an amazing trek up to the top
            of Ngoa Long mountain.
            <br />
            <br />
            17:30 – 20:00 – Return to our Limousine bus and then come back to
            Hanoi. Drop you off at your hotel/stay. Other things to note
            <br />
            <br />
            It is one full day tour. Start from 07.30 AM and finish at 20.00. We
            just put one hour and default departure time because we have many
            other tours. IF you need any further details
          </p>
        </div>
      </div>
    );
  };


  const renderSection7 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <div>
          <h2 className="text-2xl font-semibold">Location</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            San Diego, CA, United States of America (SAN-San Diego Intl.)
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* MAP */}
        <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3 ring-1 ring-black/10 rounded-xl z-0">
          <div className="rounded-xl overflow-hidden z-0">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY&q=Eiffel+Tower,Paris+France"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };


  const renderSection11 = () => {
    const [openDetails, setOpenDetails] = useState<number[]>([]); // Handles toggling details
    const [openExperiences, setOpenExperiences] = useState<{ [key: number]: boolean }>({}); // Handles toggling experiences per location

    const toggleDetail = (index: number) => {
      if (openDetails.includes(index)) {
        setOpenDetails(openDetails.filter((i) => i !== index)); // Close section
      } else {
        setOpenDetails([...openDetails, index]); // Open section
      }
    };

    const toggleAllExperiences = (locationIndex: number) => {
      setOpenExperiences((prev) => ({
        ...prev,
        [locationIndex]: !prev[locationIndex], // Toggle all experiences for the location
      }));
    };

    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Detail Itinerary</h2>
        </div>
        <div className="flex flex-wrap gap-6 items-start self-stretch p-4 bg-white rounded-lg">
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            {dataTours?.itinerary?.map((val: any, index: number) => {
              const isDetailOpen = openDetails.includes(index);

              return (
                <div key={index} className="bg-gray-50 p-2 mb-2 rounded-md">
                  {/* Title with Arrow */}
                  <div
                    onClick={() => toggleDetail(index)}
                    className="flex justify-between items-center text-base font-semibold leading-none my-2 text-gray-900 cursor-pointer"
                  >
                    <span>{val.title}</span>
                    <div className="w-8 h-8 flex justify-center items-center rounded-full border">
                      {isDetailOpen ? (
                        <ChevronUpIcon className="w-5 h-5 font-bold text-gray-500" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>

                  {/* Details Section */}
                  {isDetailOpen && (
                    <div className="flex flex-col mt-2 w-full max-md:max-w-full">
                      {/* Activities */}
                      <div className="text-md font-normal leading-6 text-gray-600 max-md:max-w-full">
                        <span className="font-bold mr-2">Activities:</span>
                        {val.activity}
                      </div>
                      <div
                        className="mt-2 text-xs font-normal leading-6 text-gray-600 max-md:max-w-full"
                        dangerouslySetInnerHTML={{ __html: val.content }}
                      />

                      {/* Locations */}
                      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                        {val?.itinerary_locations.map((location: any, locIndex: number) => {
                          const areExperiencesOpen = openExperiences[locIndex]; // True if experiences are open for this location

                          return (
                            <div key={locIndex}>
                              <div className="font-semibold">{location.name}</div>
                              <div className="flex flex-wrap gap-4 items-start w-full my-4">
                                <img
                                  loading="lazy"
                                  src={location.image}
                                  alt={location.title}
                                  className="object-fill shrink-0 min-w-full h-72 rounded-2xl aspect-[1.33]"
                                />
                                <div className="flex flex-col flex-1 shrink">
                                  <div className="font-semibold">{location.name}</div>
                                  <div className="mt-2 leading-6">{location.description}</div>
                                </div>
                              </div>

                              {/* Experience Toggle */}
                              <div
                                onClick={() => toggleAllExperiences(locIndex)} // Toggle all experiences for the location
                                className="text-xs font-semibold leading-none text-gray-900 cursor-pointer"
                              >
                                {areExperiencesOpen ? 'Hide Experiences' : 'Show Experiences'}
                              </div>

                              {/* Experiences */}
                              {location?.experiences?.map((experience: any, expIndex: number) => {
                                return (
                                  <div
                                    key={expIndex}
                                    className={`${areExperiencesOpen ? 'flex' : 'hidden'
                                      } flex-wrap gap-4 items-start w-full my-4`}
                                  >
                                    <img
                                      loading="lazy"
                                      src={experience.image}
                                      alt={experience.title}
                                      className="object-contain shrink-0 w-full rounded-2xl aspect-[1.33] h-80"
                                    />
                                    <div className="flex flex-col flex-1 shrink">
                                      <div className="font-semibold">{experience.title}</div>
                                      <div
                                        dangerouslySetInnerHTML={{ __html: experience.content }}
                                        className="text-xs"
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };




  const renderSection10 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Categories </h2>
        </div>
        {/* 6 */}
        <div className="flex flex-row justify-start items-center gap-4">

          {categoriesInfo.map((val: any, index: number) => {
            let IconComponent = val?.icon

            return <div key={index} className="flex flex-row justify-start items-center">
              {IconComponent && <img src={IconComponent} alt="Icon" className="w-3 h-3 text-primary-6000 mr-1" />}
              <p className="text-xs text-gray-400">{val.text}</p>
            </div>
          })}
        </div>
      </div>
    );
  };

  const renderSection12 = () => {

    return (
      <div className="flex flex-col px-8 py-16">
        <div className="flex flex-col w-full text-center max-md:max-w-full">
          <h1 className="text-4xl font-semibold leading-none text-gray-900 max-md:max-w-full">
            This Tour is Private & Tailor-Made
          </h1>
          <p className="mt-5 text-base text-gray-500 max-md:max-w-full">
            Discover the Ideal Option for Your Upcoming Journey!
          </p>
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-14 w-full max-md:mt-10 max-md:max-w-full">
          {tourPackages.map((pkg, index) => {
            let tourPackage = pkg

            return (
              <div className="flex flex-col flex-1 shrink p-4 bg-white rounded-3xl basis-0 min-w-[240px]">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col w-full">
                    <div className={`self-start px-4 py-2 text-base font-semibold tracking-wide text-center ${tourPackage.typeColor} uppercase whitespace-nowrap ${tourPackage.typeBgColor} rounded-[30px]`}>
                      {tourPackage.type}
                    </div>
                    <div className="mt-4 text-sm leading-5 text-gray-500">
                      {tourPackage.description}
                    </div>
                  </div>


                  <div className="flex flex-col mt-6 w-full text-sm text-gray-600">
                    <div className="flex flex-col w-full leading-none">
                      <div className="font-semibold">Accommodation</div>
                      <div className="mt-2 font-medium">{tourPackage.features.accommodation}</div>
                    </div>
                    <div className="flex flex-col mt-4 w-full leading-none">
                      <div className="font-semibold">Transportation</div>
                      <div className="mt-2 font-medium">{tourPackage.features.transportation}</div>
                    </div>
                    <div className="flex flex-col mt-4 w-full">
                      <div className="font-semibold leading-none">Inclusions</div>
                      <div className="mt-2 font-medium leading-5">
                        {tourPackage.features.inclusions.map((inclusion: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
                          <React.Fragment key={index}>
                            {inclusion}<br />
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className={`overflow-hidden self-stretch px-8 py-3.5 mt-8 w-full text-base font-medium ${tourPackage.buttonStyle} rounded-md shadow max-md:px-5`}
                  aria-label={`Enquire Now for ${tourPackage.type} Package`}
                >
                  Enquire Now
                </button>
              </div>
            )
          })}
        </div>
      </div>
    );
  };
  const renderSection14 = () => {
    return (
      <div className="w-full h-60 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">
            Have questions?<br />
            <span className="text-primary-6000">Let’s talk with us! </span>
          </h2>
        </div>
        <div>
          <ButtonPrimary className="mr-2" >Get Started</ButtonPrimary>
          <ButtonSecondary className="text-primary-6000">Learn More</ButtonSecondary>
        </div>
      </div>
    );
  };

  const renderSection9 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Tour Highlights</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Discover the Island of Gods: Bali
          </span>
        </div>
        <SectionSliderNewCategories
          heading=""
          subHeading=""
          categories={[]}
          categoryCardType="card4"
          itemPerRow={4}
          className="my-2"

        />
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
          {highlights
            .filter((_, i) => i < 12)
            .map((item) => (
              <div key={item.name} className="flex items-center space-x-3">
                <i className="las la-check-circle text-2xl"></i>
                <span>{item.name}</span>
              </div>
            ))}
        </div>
      </div>
    );
  };



  return (
    <div className="container ListingDetailPage__content">
      <div className={` nc-ListingExperiencesDetailPage `}>
        {/* SINGLE HEADER */}
        <header className="rounded-md sm:rounded-xl">
          <div className="relative grid grid-cols-4 gap-1 sm:gap-2">
            <div
              className="col-span-3 row-span-3 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
              onClick={handleOpenModalImageGallery}
            >
              <Image
                alt="photo 1"
                fill
                className="object-cover  rounded-md sm:rounded-xl"
                src={dataTours?.banner_image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>
            {dataTours?.gallery?.map((item: any, index: number) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${index >= 2 ? "block" : ""
                  }`}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <Image
                    alt="photos"
                    fill
                    className="object-cover w-full h-full rounded-md sm:rounded-xl "
                    src={item || ""}
                    sizes="400px"
                  />
                </div>

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={handleOpenModalImageGallery}
                />
              </div>
            ))}

            <div
              className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
              onClick={handleOpenModalImageGallery}
            >
              <Squares2X2Icon className="h-5 w-5" />
              <span className="ml-2 text-neutral-800 text-sm font-medium">
                Show all photos
              </span>
            </div>
          </div>
        </header>

        {/* MAIn */}
        <main className="relative z-10 mt-11 flex flex-col">
          {/* CONTENT */}
          <div className="w-full lg:space-y-10">

            <FloatingMenu data={{ banner_image: dataTours?.banner_image, duration: dataTours?.duration, title: dataTours?.title, id: dataTours?.id }} />
            {/* {renderSection1()} */}
            {renderSection10()}
            {renderSection9()}
            {renderSection2()}
            {/* rating */}
            {/* {renderSection6()} */}
            {/* thingk to know */}
            {/* {renderSection8()} */}
            {/* map */}
            {renderSection3()}
            {/* <SectionDateRange /> */}

            {/* {renderSection5()} */}
            {/* map */}
            {renderSection7()}
            {/* detail itenery */}
            {renderSection11()}
            {/* this tour */}
            {renderSection12()}
            {/* explor */}
            {/* {renderSection13()} */}
            {/*  */}
            <SectionSliderNewCategories
              heading="List Experience Serupa"
              subHeading="Handpicked by our travel experts, these tours highlight the best Indonesia has to offer. 
Immerse yourself in unforgettable experiences across the archipelago."
              categoryCardType="card5"
              itemPerRow={3}
              categories={dataRelatedTours}
            />

            {/* have question */}
            {renderSection14()}
          </div>

          {/* SIDEBAR
        <div className="hidden lg:block flex-grow mt-14 lg:mt-0">
          <div className="sticky top-28">{renderSidebar()}</div>
        </div> */}
        </main>
      </div>
    </div>
  );
};

export default Page;
