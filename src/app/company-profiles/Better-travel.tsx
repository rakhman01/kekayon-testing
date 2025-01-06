import { CheckBadgeIcon, FaceSmileIcon, MapPinIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/solid'

export const BetterTravel = () => {

    const features = [
        {
            title: "Protecting Our Planet",
            description: "We aim to minimize our carbon footprint by adopting eco-friendly practices throughout our operations. From choosing sustainable accommodations to reducing waste on our trips, we're committed to preserving the natural beauty of every destination."
        },
        {
            title: "Supporting Local Communities",
            description: "Kekayon partners with local businesses, artisans, and service providers to ensure that our trips benefit the communities we visit. By sourcing locally and promoting authentic cultural experiences, we support the local economy and create opportunities for meaningful connections."
        },
        {
            title: "Responsible Tourism",
            description: "We encourage respectful and mindful tourism. Our guides educate travelers on local customs and environmental care, helping to preserve the cultural and natural heritage of each destination for future generations."
        },
        {
            title: "Sustainable Partnerships",
            description: "We work with accommodation providers, transport companies, and other partners who share our commitment to sustainability. This ensures that every aspect of our trips aligns with our environmental and social values."
        }
    ];

    return (
        <main className="container flex flex-wrap gap-2 items-center py-16">
            <div className='grid grid-cols-12 gap-2'>
                <section className="col-span-12 lg:col-span-6 flex overflow-hidden flex-wrap gap-2.5 self-stretch my-auto rounded-xl min-h-[548px] min-w-[240px] w-[514px] max-md:max-w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a569c9b1d3603002d41a8edaf9faa7ac6fe7f6df1b13999d7b0ea301dcbb1db9?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304"
                        alt="Sustainable travel landscape"
                        className="object-contain flex-1 shrink w-full shadow-lg aspect-[0.46] basis-0 min-w-[240px]"
                    />
                    <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11d1b3556c614b8bac15798e16daf47e55a90165387eae0f40bf7e9af550e165?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304"
                            alt="Local community interaction"
                            className="object-contain flex-1 w-full shadow-lg aspect-[0.94]"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f36d726f6a1be32e3599b15474e44c1d3d07278969ec30efae2ec5aab7bfb94?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304"
                            alt="Eco-friendly travel activity"
                            className="object-contain flex-1 mt-2.5 w-full shadow-lg aspect-[0.94]"
                        />
                    </div>
                </section>


                <div className='col-span-12 lg:col-span-6'>
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <h2 className="text-3xl font-bold leading-9 text-gray-900 max-md:max-w-full">
                            Better Travel with Kekayon:
                            Our Commitment to Sustainability
                        </h2>
                        <p className="mt-5 text-base leading-6 text-gray-500 max-md:max-w-full">
                            At Kekayon, we believe travel can and should make a positive impact on the world. Our "Better Travel" initiative is dedicated to fostering sustainable practices that respect the environment, support local communities, and create a meaningful experience for our travelers.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-6 items-start mt-8 w-full max-md:max-w-full">
                        {features.map((feature, index) => (
                            <article className="flex flex-col grow shrink min-w-[240px] w-[263px]">
                                <h3 className="text-base font-semibold tracking-wide text-gray-900 uppercase">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-sm leading-5 text-gray-500">
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

