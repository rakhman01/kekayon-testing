import CrossContent from "@/components/CrossContent";
import HaveQuestion from "@/components/HaveQuestion";
import Image from "next/image";
import image from '../../../public/images/company_profile/Image.png'
import image1 from '../../../public/images/company_profile/Image1.png'
import image2 from '../../../public/images/company_profile/Image2.png'
import image3 from '../../../public/images/company_profile/Image3.png'
import image4 from '../../../public/images/company_profile/Image4.png'
import image5 from '../../../public/images/company_profile/Image5.png'
import image6 from '../../../public/images/company_profile/Image6.png'
import image7 from '../../../public/images/company_profile/Image7.png'



export default function WhoWeAre() {
    const images = [
        { src: image, alt: "Travel image 1" },
        { src: image1, alt: "Travel image 2" },
        { src: image2, alt: "Travel image 3" },
        { src: image3, alt: "Travel image 4" },
        { src: image4, alt: "Travel image 5" },

    ];

    const content = [
        {
            image: image6,
            title: 'FIT AND SMALL GROUP TOURS',
            content: 'Since 2017 the Indonesia-specialized DMC focuses on inbound markets  targeting western European travelers. We serve FIT, family, and  small-group holiday and adventure journey, with not just day trip and  couple days but also 3 weeks + tours encompassing Indonesia’s  destinations. No matter your budget is (from budget to luxury or travel  in style), we can flexibly tailor and assist your travel planning in  meeting your preference. Happy journey, and let us know if you think of  Indonesia!'
        },
        {
            image: image7,
            title: 'FIT AND SMALL GROUP TOURS',
            content: 'Since 2017 the Indonesia-specialized DMC focuses on inbound markets  targeting western European travelers. We serve FIT, family, and  small-group holiday and adventure journey, with not just day trip and  couple days but also 3 weeks + tours encompassing Indonesia’s  destinations. No matter your budget is (from budget to luxury or travel  in style), we can flexibly tailor and assist your travel planning in  meeting your preference. Happy journey, and let us know if you think of  Indonesia!'
        },
    ]

    // Find the middle index
    const middleIndex = Math.floor(images.length / 2);

    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-8 py-16">
                <div className="col-span-12 md:col-span-6">
                    <div className="max-w-lg">
                        <h2 className="text-5xl font-bold mt-2">Who We Are</h2>
                        <p className="text-base font-light text-gray-400 mt-4">At Kekayon, we’re passionate about creating unforgettable
                            travel experiences that connect people with the beauty, culture, and uniqueness of each destination. Founded on a love for exploration and authentic connections, our mission is to offer personalized journeys that enrich travelers' lives while respecting the places we visit. From solo adventurers to family gatherings, every trip we craft is tailored to inspire, e
                            ngage, and make memories that last a lifetime.</p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 flex justify-center items-center space-x-2">
                    {images.map((image, index) => {
                        // Calculate the distance from the middle index
                        const distanceFromMiddle = Math.abs(index - middleIndex);

                        // Adjust the size based on distance from middle (closer = bigger)
                        const width = 80 + (middleIndex === index ? 60 : (30 - distanceFromMiddle * 10) * 2); // Increase size if near the middle
                        const height = 120 + (middleIndex === index ? 60 : (40 - distanceFromMiddle * 10) * 2); // Increase size if near the middle

                        return (
                            <div
                                key={index}
                                className="transition-transform hover:scale-105"
                            // style={{
                            //     width: `${width}px`,
                            //     height: `${height}px`,
                            // }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={width}
                                    height={height}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            {/*  */}
            <div className="py-16">
                <Image
                    src={image5}
                    alt="Full-width Image"
                    className="w-full h-60"
                    layout="responsive"
                    objectFit="cover"
                />
                <div className="mt-8">
                    <h2 className="text-5xl font-bold mt-2">A LEGAL DMC</h2>
                    <p className="text-base font-light text-gray-400 mt-4">Kekayon Journeys is a fully licensed and registered travel company  (destination management company/DMC) privately owned by a tourism and  hospitality business-passionate founder. The operation office is based  in Yogyakarta, Java, which has dedicated multi-lingual 13+ individuals  working on some divisions and is supported by the native sales force  team.</p>
                </div>

            </div>
            {/*  */}
            <CrossContent content={content} />

            {/*  */}
            <HaveQuestion />
        </div>
    );
}
