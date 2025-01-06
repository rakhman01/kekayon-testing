import Image from "next/image";
import React from "react";


// Define the interface for individual content items
export interface ContentItem {
    image?: any;
    title?: string;
    content?: string;
}

interface CrossContentProps {
    content: ContentItem[];
}


const CrossContent: React.FC<CrossContentProps> = ({ content }) => {
    return (
        <>
            {content.map((item, index) => (
                <div key={index} className="sm:grid sm:grid-cols-12 gap-8 py-16">
                    {index % 2 === 0 ? (
                        <>
                            {/* Image on the left */}
                            <div className="relative col-span-12 md:col-span-6 mt-8">
                                {/* <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-60 object-fill"
                                /> */}
                                <Image
                                    src={item.image}
                                    alt="Full-width Image"
                                    className="w-full h-60"
                                    layout="responsive"
                                    objectFit="cover"
                                />
                            </div>
                            {/* Text on the right */}
                            <div className="col-span-12 md:col-span-6 flex flex-col justify-center mt-8">
                                <h2 className="text-3xl font-bold mt-2">{item.title}</h2>
                                <p className="text-base font-light text-gray-400 mt-4">{item.content}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Text on the left */}
                            <div className="col-span-12 md:col-span-6 flex flex-col justify-center mt-8">
                                <h2 className="text-3xl font-bold mt-2">{item.title}</h2>
                                <p className="text-base font-light text-gray-400 mt-4">{item.content}</p>
                            </div>
                            {/* Image on the right */}
                            <div className="col-span-12 md:col-span-6 mt-8">
                            <Image
                                    src={item.image}
                                    alt="Full-width Image"
                                    className="w-full h-60"
                                    layout="responsive"
                                    objectFit="cover"
                                />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </>
    )
}

export default CrossContent