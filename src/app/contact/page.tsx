import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SocialsList from "@/shared/SocialsList";
import Label from "@/components/Label";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BackgroundSection from "@/components/BackgroundSection";
import SectionClientSay from "@/components/SectionClientSay";
import HaveQuestion from "@/components/HaveQuestion";

export interface PageContactProps { }

const info = [
  {
    title: "🗺 ADDRESS",
    desc: "Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter",
  },
  {
    title: "💌 EMAIL",
    desc: "nc.example@example.com",
  },
  {
    title: "☎ PHONE",
    desc: "000-123-456-7890",
  },
];

const images = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/bd2f2e4c57ba1d15c96d8675d74d0031eb63d16796a9153abbae923af0a60391?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/f5b3d7b8f0ea7de944247571d94cde014990a197acd83f594e9889e7fdc9e1d5?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304",
];


const PageContact: FC<PageContactProps> = ({ }) => {
  return (
    <div className={`nc-PageContact overflow-hidden`}>
      <div className="mb-24 lg:mb-32">
        {/* <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact
        </h2> */}
        <div className="container max-w-7xl mx-auto my-16">
          <div className="flex-shrink-0 grid grid-cols-6 sm:grid-cols-12 gap-12 ">
            <div className="col-span-6 max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 SOCIALS
                </h3>
                <SocialsList className="mt-2" />
              </div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>Full name</Label>

                  <Input
                    placeholder="Example Doe"
                    type="text"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Email address</Label>

                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>

                  <Textarea className="mt-1" rows={6} />
                </label>
                <div>
                  <ButtonPrimary type="submit">Send Message</ButtonPrimary>
                </div>
              </form>
            </div>
            <div className="col-span-6">
              <div className="grid grid-cols-12 gap-4 min-w-[240px] h-96">
                <div className="col-span-6" >
                  {images.map((src, index) => (
                    <div
                     className="mb-4" key={index} // Always include a uniqueclassName="mb-4" key for items in a list
                    >
                      <img
                        loading="lazy"
                        src={src}
                        alt=""
                        className="object-cover flex-1 shadow-lg aspect-[0.79]"
                      />
                    </div>
                  ))}
                </div>
                <div className="col-span-6 mt-8" >
                  {images.map((src, index) => (
                    <div
                     className="mb-4" key={index} // Always include a unique key for items in a list
                    >
                      <img
                        loading="lazy"
                        src={src}
                        alt=""
                        className="object-cover flex-1 shadow-lg aspect-[0.79]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      {/* <div className="container">
        <SectionSubscribe2 className="pb-24 lg:pb-32" />
      </div> */}
             <div className="relative container py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>
        <div className="container">

        <HaveQuestion />
        </div>
    </div>
  );
};

export default PageContact;
