import CrossContent from "@/components/CrossContent";
import HaveQuestion from "@/components/HaveQuestion";
import Image from "next/image";
import image8 from '../../../public/images/company_profile/Image8.png'
import image9 from '../../../public/images/company_profile/Image9.png'
import image10 from '../../../public/images/company_profile/Image10.png'
import image11 from '../../../public/images/company_profile/Image11.png'


export default function Milestone() {
    const images = [
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 1" },
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 2" },
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 3" },
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 4" },
        { src: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", alt: "Travel image 5" },

    ];

    const content = [
        {
            image: image8,
            title: 'WHERE THE STORY BEGAN',
            content: 'Since 2017 the Indonesia-specialized DMC focuses on inbound markets  targeting western European travelers. We serve FIT, family, and  small-group holiday and adventure journey, with not just day trip and  couple days but also 3 weeks + tours encompassing Indonesia’s  destinations. No matter your budget is (from budget to luxury or travel  in style), we can flexibly tailor and assist your travel planning in  meeting your preference. Happy journey, and let us know if you think of  Indonesia!'
        },
        {
            image: image9,
            title: 'TRANSFORMATION',
            content: 'Since 2017 the Indonesia-specialized DMC focuses on inbound markets  targeting western European travelers. We serve FIT, family, and  small-group holiday and adventure journey, with not just day trip and  couple days but also 3 weeks + tours encompassing Indonesia’s  destinations. No matter your budget is (from budget to luxury or travel  in style), we can flexibly tailor and assist your travel planning in  meeting your preference. Happy journey, and let us know if you think of  Indonesia!'
        },
        {
            image: image10,
            title: 'MILESTONE',
            content: 'Since 2017 the Indonesia-specialized DMC focuses on inbound markets  targeting western European travelers. We serve FIT, family, and  small-group holiday and adventure journey, with not just day trip and  couple days but also 3 weeks + tours encompassing Indonesia’s  destinations. No matter your budget is (from budget to luxury or travel  in style), we can flexibly tailor and assist your travel planning in  meeting your preference. Happy journey, and let us know if you think of  Indonesia!'
        },
    ]

    // Find the middle index
    const middleIndex = Math.floor(images.length / 2);

    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-8 py-16">
                <div className="col-span-12 md:col-span-6">
                    <h2 className="text-5xl font-bold mt-2">Milestones</h2>
                    <p className="text-base font-light text-gray-400 mt-4">At Kekayon, we’re passionate about creating unforgettable
                        travel experiences that connect people with the beauty, culture, and uniqueness of each destination. Founded on a love for exploration and authentic connections, our mission is to offer personalized journeys that enrich travelers' lives while respecting the places we visit. From solo adventurers to family gatherings, every trip we craft is tailored to inspire, e
                        ngage, and make memories that last a lifetime.</p>
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
                            className="object-contain self-stretch my-auto w-full md:w-60 shadow-lg aspect-[0.75]"
                        />
                    </div>
                </div>
            </div>
            {/*  */}
            <CrossContent content={content} />
            {/*  */}
            <div className="py-16">

                <div className="mt-8">
                    <h2 className="text-5xl font-bold mt-2">Who We Are</h2>
                    <p className="text-base font-light text-gray-400 mt-4">At Kekayon, we’re passionate about creating unforgettable
                        travel experiences that connect people with the beauty, culture, and uniqueness of each destination. Founded on a love for exploration and authentic connections, our mission is to offer personalized journeys that enrich travelers' lives while respecting the places we visit. From solo adventurers to family gatherings, every trip we craft is tailored to inspire, e
                        ngage, and make memories that last a lifetime.</p>
                </div>
                <Image
                    src={image11}
                    alt="Full-width Image"
                    className="w-full h-60 mt-4"
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
            {/*  */}
            <HaveQuestion />
        </div>
    );
}
