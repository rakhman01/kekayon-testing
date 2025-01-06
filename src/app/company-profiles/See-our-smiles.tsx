import CrossContent from "@/components/CrossContent";
import HaveQuestion from "@/components/HaveQuestion";
import Image from "next/image";
import SectionFounder from "../about/SectionFounder";
import image12 from '../../../public/images/company_profile/Image12.png'
import image13 from '../../../public/images/company_profile/Image13.png'
import image14 from '../../../public/images/company_profile/Image14.png'

export default function SeeOutSmiles() {
    const images = [
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 1" },
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 2" },
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 3" },
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 4" },
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 5" },

    ];

    const content = [
        {
            image: image12,
            title: 'WHERE THE STORY BEGAN',
            content: 'Since 2017 the Indonesia-specialized DMC focuses on inbound markets  targeting western European travelers. We serve FIT, family, and  small-group holiday and adventure journey, with not just day trip and  couple days but also 3 weeks + tours encompassing Indonesia’s  destinations. No matter your budget is (from budget to luxury or travel  in style), we can flexibly tailor and assist your travel planning in  meeting your preference. Happy journey, and let us know if you think of  Indonesia!'
        },
        {
            image: image13,
            title: 'WHERE THE STORY BEGAN',
            content: 'Since 2017 the Indonesia-specialized DMC focuses on inbound markets  targeting western European travelers. We serve FIT, family, and  small-group holiday and adventure journey, with not just day trip and  couple days but also 3 weeks + tours encompassing Indonesia’s  destinations. No matter your budget is (from budget to luxury or travel  in style), we can flexibly tailor and assist your travel planning in  meeting your preference. Happy journey, and let us know if you think of  Indonesia!'
        },

    ]

    // Find the middle index
    const middleIndex = Math.floor(images.length / 2);

    return (
        <div className="container">
            <div className="py-16">
            <Image
                    src={image14}
                    alt="Full-width Image"
                    className="w-full h-96"
                         layout="responsive"
                    objectFit="cover"
                />
                <div className="mt-8">
                    <h2 className="text-5xl font-bold mt-2">Who We Are</h2>
                    <p className="text-base font-light text-gray-400 mt-4">At Kekayon, we’re passionate about creating unforgettable
                        travel experiences that connect people with the beauty, culture, and uniqueness of each destination. Founded on a love for exploration and authentic connections, our mission is to offer personalized journeys that enrich travelers' lives while respecting the places we visit. From solo adventurers to family gatherings, every trip we craft is tailored to inspire, e
                        ngage, and make memories that last a lifetime.</p>
                </div>
         
            </div>
            {/*  */}
            <CrossContent content={content} />
            {/*  */}
            <SectionFounder />
               {/*  */}
               <CrossContent content={content} />
            {/*  */}
            <HaveQuestion />
        </div>
    );
}
