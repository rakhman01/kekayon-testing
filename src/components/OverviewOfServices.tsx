import { CheckBadgeIcon, FaceSmileIcon, MapPinIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/solid'

const OverviewOfServices = () => {

    let dataOverview = [
        {
            icon: CheckBadgeIcon,
            title: 'Excellent',
            content: 'We are keen to deliver an excellent service for our clients tour life circle from the beginning until the end of their journey'
        },
        {
            icon: FaceSmileIcon,
            title: 'Excellent',
            content: 'We are keen to deliver an excellent service for our clients tour life circle from the beginning until the end of their journey'
        },
        {
            icon: MapPinIcon,
            title: 'Excellent',
            content: 'We are keen to deliver an excellent service for our clients tour life circle from the beginning until the end of their journey'
        },
        {
            icon: GlobeAsiaAustraliaIcon,
            title: 'Excellent',
            content: 'We are keen to deliver an excellent service for our clients tour life circle from the beginning until the end of their journey'
        },
    ]

    return (
        <div className="text-center">
            <p className="text-lg font-semibold uppercase text-primary-6000">Overview of Services</p>
            <h2 className="text-2xl md:text-4xl font-bold mt-2">
                Amazing Tours And Fun <br />
                Adventures Waiting For You
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-400 mt-4">Create your own adventure, experience, or  relaxing holiday on any <br />
                budget! Our travel expert will be happy to  assist so you can save <br />
                time planning for your trip to Indonesia.</p>
            <div className='mt-12 grid grid-cols-12 gap-6'>
                {dataOverview.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div key={index} className="col-span-12 md:col-span-6 flex">
                            <div className="w-10 h-8 flex justify-center items-center rounded-md bg-primary-6000">
                                <IconComponent className="text-xs text-white" />
                            </div>
                            <div className="w-full text-start ml-2">
                                <p className="text-lg font-bold">{item.title}</p>
                                <p className="text-base text-gray-500">{item.content}</p>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default OverviewOfServices
