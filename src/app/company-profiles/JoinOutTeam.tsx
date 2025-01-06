import CrossContent from "@/components/CrossContent";
import HaveQuestion from "@/components/HaveQuestion";
import ButtonPrimary from "@/shared/ButtonPrimary";
import imagePng from "@/images/hero-right.png";
import Image from "next/image";
import BuildYourCarier from "@/components/BuildYourCarier";

export default function JoinOurTeam() {
    const images = [
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 1" },
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 2" },
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 3" },
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 4" },
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 5" },

    ];

    const content = [
        {
            image: 'https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            title: 'FIT AND SMALL GROUP TOURS',
            content: 'Since 2017 the Indonesia-specialized DMC focuses on inbound markets  targeting western European travelers. We serve FIT, family, and  small-group holiday and adventure journey, with not just day trip and  couple days but also 3 weeks + tours encompassing Indonesia’s  destinations. No matter your budget is (from budget to luxury or travel  in style), we can flexibly tailor and assist your travel planning in  meeting your preference. Happy journey, and let us know if you think of  Indonesia!'
        },
        {
            image: 'https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            title: 'FIT AND SMALL GROUP TOURS',
            content: 'Since 2017 the Indonesia-specialized DMC focuses on inbound markets  targeting western European travelers. We serve FIT, family, and  small-group holiday and adventure journey, with not just day trip and  couple days but also 3 weeks + tours encompassing Indonesia’s  destinations. No matter your budget is (from budget to luxury or travel  in style), we can flexibly tailor and assist your travel planning in  meeting your preference. Happy journey, and let us know if you think of  Indonesia!'
        },
    ]

    // Find the middle index
    const middleIndex = Math.floor(images.length / 2);

    return (
        <div className="container">
            <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative pt-10 lg:pt-16 lg:pb-16`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-bold text-3xl md:text-4xl xl:text-6xl !leading-[114%] ">
          Start Your Journey 
with <span className="text-primary-6000">Kekayon</span>
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Accompanying us, you have a trip full of experiences. With Chisfis,
            booking accommodation, resort villas, hotels
          </span>
          <ButtonPrimary href="/listing-stay-map" sizeClass="px-5 py-4 sm:px-7">
            Start your search
          </ButtonPrimary>
        </div>
        <div className="flex-grow">
          <Image className="w-full" src={imagePng} alt="hero" priority />
        </div>
      </div>
    </div>

            {/*  */}
            <BuildYourCarier />

            {/*  */}
            <HaveQuestion />
        </div>
    );
}
