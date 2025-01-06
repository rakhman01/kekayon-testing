import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import SectionVideos from "@/components/SectionVideos";
import SectionClientSay from "@/components/SectionClientSay";
import OverviewOfServices from "@/components/OverviewOfServices";
import HaveQuestion from "@/components/HaveQuestion";
import Card12 from "../blog/Card12";
import SectionMagazine5 from "../blog/SectionMagazine5";
import { DEMO_POSTS } from "@/data/posts";

// DEMO DATA
const POSTS = DEMO_POSTS;

// DEMO POST FOR MAGAZINE SECTION
const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8);

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "New Yourk",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Singapore",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "Paris",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "London",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "Tokyo",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "Maldives",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Italy",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

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
  return (
    <main className="nc-PageHome relative overflow-hidden">
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* Knowlage base */}
        <div className="grid grid-cols-12 gap-8 my-16">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-5xl font-bold mt-2">Knowledge Base</h2>
            <p className="text-base font-light text-gray-400 mt-4">Hey there! Welcome to Kekayon’s Knowledge Base! It’s your go-to spot for everything you need to know to have an awesome travel experience. You’ll find answers to your questions, handy travel tips, and cool guides to help you have a smooth and fun journey with us.</p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center items-center space-x-2">
            <div className="flex flex-wrap gap-2.5 items-center self-stretch my-auto rounded-xl min-h-[319px] min-w-[240px] w-[514px] max-md:max-w-full">
              <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-h-[319px] min-w-[240px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec736dfa1771ce2c7c799d72632b90f5c95a3a5a85480438e5fdd4c5b2bccc8b?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304"
                  alt="Milestone image 1"
                  className="object-contain flex-1 w-full shadow-lg aspect-[1.7]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b96b0925f1631f5c293896e082f5217038576e8323174c169dce6dad8831042a?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304"
                  alt="Milestone image 2"
                  className="object-contain flex-1 mt-2.5 w-full shadow-lg aspect-[1.72]"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c4e4b91eaf484766320fd81a4b00db3d7dabe3d9e49f4815db365e34866688?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304"
                alt="Milestone image 3"
                className="object-contain self-stretch my-auto w-60 shadow-lg aspect-[0.75]"
              />
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="pt-12 pb-16 lg:pb-28">
          <div className="text-center pb-16">
            <h2 className="text-4xl font-bold mt-2">Explore Our Knowledge Base</h2>
            <p className="text-base font-light text-gray-400 mt-4">Here, you’ll find a comprehensive collection of articles
              and documentation designed to inform and inspire.</p>
          </div>
          <SectionMagazine5 posts={MAGAZINE1_POSTS} />
        </div>
        {/* FAQ */}
        <section className="flex flex-wrap gap-8 items-center">
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
                <div className={`flex flex-wrap gap-6 items-start p-4 w-full bg-gray-50 rounded-lg ${faq.answer ? '' : 'mt-4'}`}>
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
        </section>

        {/* SECTION 1 */}
        <HaveQuestion />

        {/* <div className="relative py-16">
                    <BackgroundSection />
                    <SectionClientSay />
                </div> */}
      </div>
    </main>
  );
}

export default PageHome;
