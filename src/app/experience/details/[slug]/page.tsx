"use client";

import React, { FC, useEffect, useState } from "react";
import { ArrowRightIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import CommentListing from "@/components/CommentListing";
import FiveStartIconForRate from "@/components/FiveStartIconForRate";
import Avatar from "@/shared/Avatar";
import Badge from "@/shared/Badge";
import ButtonCircle from "@/shared/ButtonCircle";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";
import { useParams, usePathname, useRouter } from "next/navigation";
import LikeSaveBtns from "@/components/LikeSaveBtns";
import StartRating from "@/components/StartRating";
import Image from "next/image";

import { Route } from "next";
import { highlights, includes_demo, PHOTOS } from "@/app/(listing-detail)/listing-car-detail/constant";
import StayDatesRangeInput from "@/app/(client-components)/(HeroSearchForm2Mobile)/DatesRangeInput";
import GuestsInput from "@/app/(client-components)/(HeroSearchForm2Mobile)/GuestsInput";
import SectionDateRange from "@/app/(listing-detail)/SectionDateRange";
import SectionSliderBooking from "@/components/SectionSliderBooking";
import { DEMO_CATS_2 } from "@/components/ModalBookingRequest";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import Heading2 from "@/shared/Heading2";
import ExperiencesCardI from "@/components/ExperiencesCardI";
import HttpDataClients from "config/utils";

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

const data: any = [
  {
    "id": "da39f21a-8af8-401a-93dd-4371c518f9cf",
    "authorId": 4,
    "date": "May 20, 2021",
    "href": "/listing-experiences-detail",
    "listingCategoryId": 4,
    "title": "The Island of Gods Awaits You",
    "packageDescriptions": [
      "Sunrise trek at Mount Batur",
      "Ubud’s lush rice terraces and monkey forest",
      "Tanah Lot sunset temple tour"
    ],
    "featuredImage": "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1435866-media_library/original/38d6b5ea-abcc-4876-acb4-e5b79586c37c.jpeg?im_w=1200",
    "galleryImgs": [
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1435866-media_library/original/38d6b5ea-abcc-4876-acb4-e5b79586c37c.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1435866-media_library/original/38d6b5ea-abcc-4876-acb4-e5b79586c37c.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1435866-media_library/original/38d6b5ea-abcc-4876-acb4-e5b79586c37c.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1435866-media_library/original/38d6b5ea-abcc-4876-acb4-e5b79586c37c.jpeg?im_w=1200"
    ],
    "commentCount": 64,
    "viewCount": 369,
    "like": true,
    "address": "2 Warner Alley",
    "reviewStart": 4.4,
    "reviewCount": 478,
    "price": "$200",
    "maxGuests": 6,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 55.2094559, "lng": 61.5594641 },
    "categoriesInfo": [
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
  },
  {
    "id": "2cf0b92c-75d0-490b-ab77-0a0e0a2cc01c",
    "authorId": 9,
    "date": "May 20, 2021",
    "href": "/listing-experiences-detail",
    "listingCategoryId": 20,
    "title": "The Heart of Javanese Heritage",
    "packageDescriptions": [
      "Visit Borobudur, the largest Buddhist temple in the world",
      "Explore Prambanan’s stunning Hindu architecture",
      "Wander through Yogyakarta’s vibrant Malioboro Street"
    ],
    "featuredImage": "https://images.pexels.com/photos/6455686/pexels-photo-6455686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "galleryImgs": [
      "https://images.pexels.com/photos/6455686/pexels-photo-6455686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/6455686/pexels-photo-6455686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/6455686/pexels-photo-6455686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/6455686/pexels-photo-6455686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    ],
    "commentCount": 62,
    "viewCount": 864,
    "like": false,
    "address": "620 Clove Park",
    "reviewStart": 3.2,
    "reviewCount": 566,
    "price": "$249",
    "maxGuests": 6,
    "saleOff": null,
    "isAds": null,
    "map": { "lat": 55.1972153, "lng": 61.4407266 },
    "categoriesInfo": [
      {
        "icon": "../images/mega-menu",
        "text": "Active Adventures"
      },
      {
        "icon": "../images/mega-menu",
        "text": "Active Adventures"
      },
      {
        "icon": "../images/mega-menu",
        "text": "Active Adventures"
      },
      {
        "icon": "../images/mega-menu",
        "text": "Active Adventures"
      },
      {
        "icon": "../images/mega-menu",
        "text": "Active Adventures"
      }
    ]
  },]


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

  const getDataTours = async () => {

    const res = await HttpDataClients.SearchDetailTours({ id: slug, lang: '' })
    if (res.status = 1) {
      setDataTours(res.data)
    }
  }

  // Get keyword from the query string
  useEffect(() => {
    // if (slug !== slug && slug !== undefined) {
    getDataTours()
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
            <span className="ml-1"> {dataTours?.location[0].name}</span>
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
          categories={DEMO_CATS_2}
          categoryCardType="card4"
          itemPerRow={4}
          className="my-2"
        />
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Include </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Included in the price
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/* 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
          {dataTours?.include?.map((item: any) => (
            <div key={item.title} className="flex items-center space-x-3">
              <i className="las la-check-circle text-2xl"></i>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
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

  const renderSection5 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Host Information</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* host */}
        <div className="flex items-center space-x-4">
          <Avatar
            hasChecked
            hasCheckedClass="w-4 h-4 -top-0.5 right-0.5"
            sizeClass="h-14 w-14"
            radius="rounded-full"
          />
          <div>
            <a className="block text-xl font-medium" href="##">
              Kevin Francis
            </a>
            <div className="mt-1.5 flex items-center text-sm text-neutral-500 dark:text-neutral-400">
              <StartRating />
              <span className="mx-2">·</span>
              <span> 12 places</span>
            </div>
          </div>
        </div>

        {/* desc */}
        <span className="block text-neutral-6000 dark:text-neutral-300">
          Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides
          accommodation, an outdoor swimming pool, a bar, a shared lounge, a
          garden and barbecue facilities...
        </span>

        {/* info */}
        <div className="block text-neutral-500 dark:text-neutral-400 space-y-2.5">
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Joined in March 2016</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span>Response rate - 100%</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span>Fast response - within a few hours</span>
          </div>
        </div>

        {/* == */}
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div>
          <ButtonSecondary href="/author">See host profile</ButtonSecondary>
        </div>
      </div>
    );
  };

  const renderSection6 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Reviews (23 reviews)</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* Content */}
        <div className="space-y-5">
          <FiveStartIconForRate iconClass="w-6 h-6" className="space-x-0.5" />
          <div className="relative">
            <Input
              fontClass=""
              sizeClass="h-16 px-4 py-3"
              rounded="rounded-3xl"
              placeholder="Share your thoughts ..."
            />
            <ButtonCircle
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              size=" w-12 h-12 "
            >
              <ArrowRightIcon className="w-5 h-5" />
            </ButtonCircle>
          </div>
        </div>

        {/* comment */}
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          <CommentListing className="py-8" />
          <CommentListing className="py-8" />
          <CommentListing className="py-8" />
          <CommentListing className="py-8" />
          <div className="pt-8">
            <ButtonSecondary>View more 20 reviews</ButtonSecondary>
          </div>
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

  const renderSection8 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Things to know</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Cancellation policy</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Any experience can be canceled and fully refunded within 24 hours of
            purchase, or at least 7 days before the experience starts.
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">Guest requirements</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Up to 10 guests ages 4 and up can attend. Parents may also bring
            children under 2 years of age.
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        {/* CONTENT */}
        <div>
          <h4 className="text-lg font-semibold">What to bring</h4>
          <div className="prose sm:prose">
            <ul className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2">
              <li>
                Formal Wear To Visit Bai Dinh Pagoda Be ready before 7.30 Am.
              </li>
              <li>We will pick up from 07.30 to 08.00 AM</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const renderSection11 = () => {
    const [data, setData] = useState(
      [
        {
          id: 1, title: "Day 1 : Ubud", isShow: true
        },
        {
          id: 1, title: "Day 2 : Ubud and Tegallalang", isShow: false
        },
        {
          id: 1, title: "Day 2 : Ubud and Tegallalang", isShow: false
        },
      ]
    )
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

    const showDetail = (id: string) => {

    }
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Detail Itinerary</h2>
        </div>
        <div className="flex flex-wrap gap-6 items-start self-stretch p-4 bg-white rounded-lg">

          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            {dataTours?.itinerary.map((val: any) => {
              return (
                <div className="bg-gray-50 p-2 mb-2 rounded-sm">
                  <div onClick={() => showDetail('1')} className="text-base font-semibold leading-none my-2 text-gray-900">
                    {val.title}
                  </div>
                  <div className={`${true ? 'flex' : 'hidden'} flex-col mt-2 w-full max-md:max-w-full`}>
                    {/* <div className="flex flex-col w-full max-md:max-w-full">
                      <div className="text-lg font-semibold leading-none text-gray-900 max-md:max-w-full">
                        Transfer
                      </div>
                      <div className="mt-4 text-base text-gray-600 max-md:max-w-full">
                        Private car transfer from Ngurah Rai Airport to Ubud.
                      </div>
                    </div> */}
                    <div className="flex flex-col w-full max-md:max-w-full">
                      {/* <div className="text-lg font-semibold leading-none text-gray-900 max-md:max-w-full">
                        Activities
                      </div>
                      <div className="mt-4 text-base leading-6 text-gray-600 max-md:max-w-full">
                        Arrive in Ubud, Check-in at your hotel.
                        <br />
                        Visit Sacred Monkey Forest Sanctuary.
                        <br />
                        Explore Ubud Art Market and shop for handmade souvenirs.
                        <br />
                        Enjoy a Traditional Balinese Dance Performance in the evening.
                      </div> */}
                    </div>
                    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                      <div className="text-lg font-semibold leading-none text-gray-900 max-md:max-w-full">
                        {val.activity}
                      </div>
                      <div className="mt-4 text-base leading-6 text-gray-600 max-md:max-w-full">
                        <div dangerouslySetInnerHTML={{ __html: val.activity_description }} />
                      </div>

                    </div>
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
                    </div>
                    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                      <div className="text-lg font-semibold leading-none text-gray-900 max-md:max-w-full">
                        Meals
                      </div>
                      <div className="mt-4 text-base font-medium text-gray-600 max-md:max-w-full">
                        Dinner at a local restaurant.
                      </div>
                    </div>
                    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                      <div className="text-lg font-semibold leading-none text-gray-900 max-md:max-w-full">
                        Accommodation Options
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
              )
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

  const renderSection13 = () => {
    const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);

    return (
      <div className="min-h-screen w-full flex-shrink-0 xl:px-8 py-16 ">
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
          categories={DEMO_CATS_2}
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

  const renderSidebar = () => {
    return (
      <div className="listingSectionSidebar__wrap shadow-xl">
        {/* PRICE */}
        <div className="flex justify-between">
          <span className="text-3xl font-semibold">
            $19
            <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
              /person
            </span>
          </span>
          <StartRating />
        </div>

        {/* FORM */}
        {/* FORM */}
        <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl ">
          <StayDatesRangeInput className="flex-1 z-[11]" />
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          <GuestsInput className="flex-1" />
        </form>

        {/* SUM */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>$19 x 3 adults</span>
            <span>$57</span>
          </div>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>Service charge</span>
            <span>$0</span>
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$199</span>
          </div>
        </div>

        {/* SUBMIT */}
        <ButtonPrimary href={"/checkout"}>Reserve</ButtonPrimary>
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
            {renderSection1()}
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
            {renderSection13()}
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
