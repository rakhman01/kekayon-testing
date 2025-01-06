import { CheckBadgeIcon,FaceSmileIcon, MapPinIcon,GlobeAsiaAustraliaIcon } from '@heroicons/react/24/solid'

interface JobListingsProps {
    categories: {
      name: string;
      positionsAvailable: number;
      listings: {
        title: string;
        type: string;
        location: string;
        salary: string;
        closingDate: string;
      }[];
    }[];
  }

const BuildYourCarier = () => {



    return (
        <div className="text-center">
            <h2 className="text-4xl font-bold mt-2">
            Build your career with us
            </h2>
            <p className="text-xl font-light text-gray-400 mt-4">Check out our current opportunities. From fully remote jobs to positions in our offices or a mix of the two, 
            we offer many benefits that promote a balanced life and help you unlock your potential.</p>
            <JobListings categories={[
                {
                    name: 'Sales',
                    positionsAvailable: 3,
                    listings: [
                        {
                        title: 'Sales Support',
                        type: 'Full-time',
                        location: 'Remote',
                        salary: '$120k – $140k',
                        closingDate: 'Closing on January 9, 2020 ',
                        },
                        {
                        title: 'Sales Support',
                        type: 'Full-time',
                        location: 'Remote',
                        salary: '$120k – $140k',
                        closingDate: 'Closing on January 9, 2020 ',
                        },
                        {
                        title: 'Sales Support',
                        type: 'Full-time',
                        location: 'Remote',
                        salary: '$120k – $140k',
                        closingDate: 'Closing on January 9, 2020 ',
                        }
                    ]
                },
                {
                    name: 'Finance',
                    positionsAvailable: 3,
                    listings: [
                    ]
                }
            ]} />
        </div>
    )
}

const JobListings: React.FC<JobListingsProps> = ({ categories }) => {
    return (
      <main className="flex overflow-hidden flex-col rounded-2xl shadow-sm py-16">
        {categories.map((category, index) => (
        <section className="flex overflow-hidden flex-col w-full max-md:max-w-full">
      <header className="flex flex-wrap gap-10 justify-between items-center p-6 w-full text-teal-700 bg-green-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px]">
          <h2 className="self-stretch my-auto text-3xl font-bold leading-tight">{category.name}</h2>
          <p className="self-stretch my-auto text-base font-medium">{category.positionsAvailable} Positions Available</p>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a81960d8482f508cedcf084f86b640da1587fa72765d14561aafe7461cc813b?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
      </header>
      <div className="flex flex-col w-full bg-white max-md:max-w-full">
        {category.listings.map((listing, index) => (
            <article className="flex flex-wrap gap-4 items-center p-6 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col items-start flex-1 shrink self-stretch my-auto basis-6 min-w-[240px] max-md:max-w-full">
              <h3 className="text-2xl font-bold leading-none text-gray-900 max-md:max-w-full mb-2">{listing.title}</h3>
              <div className="flex flex-wrap gap-6 items-center mt-2 w-full text-sm font-medium leading-none text-gray-500 max-md:max-w-full">
                <div className="flex gap-1.5 items-center self-stretch my-auto whitespace-nowrap">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/92415b140f11499a7c0d205f42fab2ce4f91a61a2dc06e3ff913c83c430903b7?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
                  <span className="self-stretch my-auto">{listing.type}</span>
                </div>
                <div className="flex gap-1.5 items-center self-stretch my-auto whitespace-nowrap">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4129a681dea57f73cd38953124e22cb2516b734e0a9926f5ca33caee836c8487?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
                  <span className="self-stretch my-auto">{listing.location}</span>
                </div>
                <div className="flex gap-1.5 items-center self-stretch my-auto">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/92508dd1883c8c62d64c7d01928a8e6aafcd57a7af7c1f1536f0bb55c48e0967?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
                  <span className="self-stretch my-auto">{listing.salary}</span>
                </div>
                <div className="flex gap-1.5 items-center self-stretch my-auto">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f69dcd5a85600d3550d35f18194a7037ff1c54460ad41d924a8eff7c4067c86?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
                  <span className="self-stretch my-auto">Closing on {listing.closingDate}</span>
                </div>
              </div>
            </div>
            <button className="flex overflow-hidden gap-2 justify-center items-center self-stretch py-2.5 pr-3.5 pl-3 my-auto text-sm font-medium leading-none text-white bg-teal-700 rounded-full shadow-sm">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4494d4d21985e6dee0776dadbd8b7aa85e1439dac6bd6a68fe43641887f65a4e?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="" />
              <span className="self-stretch my-auto">See Detail</span>
            </button>
          </article>
        ))}
      </div>
    </section>
        ))}
      </main>
    );
  };

export default BuildYourCarier
