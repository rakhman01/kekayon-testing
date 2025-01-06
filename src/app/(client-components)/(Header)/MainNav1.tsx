import React, { FC, useEffect, useState } from "react";
import Logo from "@/shared/Logo";
import Navigation from "@/shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "@/shared/ButtonPrimary";
import MenuBar from "@/shared/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import LangDropdown from "./LangDropdown";
import image from '@/images/logo.png'
import ButtonSecondary from "@/shared/ButtonSecondary";
import { Route } from "next";
import Input from "@/shared/Input";
import ButtonCircle from "@/shared/ButtonCircle";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import HttpDataClients from "config/utils";
import { initialStateSearchLocation, SearchApiResponse } from "config/location/types";
import Select from "@/shared/Select";


export interface MainNav1Props {
  className?: string;
}

const MainNav1: FC<MainNav1Props> = ({ className = "" }) => {
  const router = typeof window !== "undefined" ? useRouter() : null;
  const [showModal, setShowModal] = useState(false)
  const [keyword, setKeyword] = useState("");
  const [dataLocation, setDataLocation] = useState<SearchApiResponse>(initialStateSearchLocation)
  const [dataCategory, setDataCategory] = useState<any>([])
  const [data, setData] = useState({
    location: '',
    category: ''
  })

  const getLocation = async () => {
    let res = await HttpDataClients.SearchLocation({ page: 1, s: '' })
    if (res.status) {
      setDataLocation(res)

    }
  }

  const getExperience = async () => {
    let res = await HttpDataClients.SearchToursCategorys()
    if (res.status) {
      setDataCategory(res.data)
    }
  }

  const handleSearch = (e: any) => {
    e.preventDefault(); // Prevent default form submission
    if (keyword.trim() !== "") {
      router?.push(`/tours?keyword=${encodeURIComponent(keyword)}` as Route);
    }
    sessionStorage.setItem("filter", JSON.stringify(data));
    setKeyword('')
    setData({
      location: '',
      category: ''
    })
    setShowModal(!showModal)
  };


  useEffect(() => {
    getLocation()
    getExperience()
  }, [])


  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      <div className="container flex justify-end flex-wrap gap-8 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <div className="flex gap-4 items-center self-stretch my-auto text-xs font-semibold whitespace-nowrap">
          <div className="flex gap-1 items-center self-stretch p-3 my-auto">
            <img
              loading="lazy"
              src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e996270ba987ebcb0405234e265f8c54fa0845d118bbef895b80e0b92c4912d4?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304"}
              alt={`UK flag`}
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <div className="self-stretch my-auto">UK</div>
            <img
              loading="lazy"
              src={"https://cdn.builder.io/api/v1/image/assets/TEMP/31d699ccf90f209af488767b36cb139dfd34ef02cedfe9bd54452f83f90e55a9?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304"}
              alt="dropdown icon"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
          </div>

          <img
            loading="lazy"
            src={'https://cdn.builder.io/api/v1/image/assets/TEMP/d39e67b9a86656ee32623f9d7025f1127f6c039f9fa91d1d4e336e839715af52?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304'}
            alt={''}
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/97774798dbde05f7f804629ba551ebf3b738243a6f7bc58e4c3763e7b448afce?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304" alt={''}
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        </div>

        <div className="flex gap-8 self-stretch my-auto text-sm font-medium min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-center h-full min-w-[240px] max-md:max-w-full">
            <div className="self-stretch my-auto leading-none">{"Get in touch with us starting at 9 AM"}</div>
            <div className="flex gap-2 items-center self-stretch my-auto text-xl leading-snug min-w-[240px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a24de9ea13c89da093976d16c72f0bb968e6d06f32d7a100e01529be9cc5d79?placeholderIfAbsent=true&apiKey=bca3b693d56b420282f1dc9a3df0d304"
                alt="phone icon"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
              <div className="self-stretch my-auto text-xs">{['+62 274 283 4992', '+62 811 2511 255'].join(' | ')}</div>
            </div>
            <div className="self-stretch my-auto leading-none">or</div>
            <button className="overflow-hidden self-stretch px-4 py-1 my-auto text-xs text-white bg-teal-700 rounded-md shadow-sm">
              Get Your Quote
            </button>
          </div>
        </div>
      </div>
      <div className=" px-4 lg:container h-20 relative flex justify-between">
        <div className="hidden md:flex justify-start w-full space-x-4 sm:space-x-10">
          <Logo img={image} imgLight={image} className="w-24 self-center" />
          <Navigation />
        </div>

        <div className="flex lg:hidden flex-[3] max-w-lg !mx-auto md:px-3 ">
          <div className="self-center flex-1">
            <HeroSearchForm2MobileFactory />
          </div>
        </div>

        <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex space-x-0.5">
            <div onClick={() => setShowModal(!showModal)} className="flex justify-center items-center hover:text-primary-6000">
              <MagnifyingGlassIcon className="size-6" />
              <p className="text-sm font-normal ">Search</p>
            </div>

            <SwitchDarkMode />
            {/* <SearchDropdown className="flex items-center" /> */}
            <div className="px-1" />
            <ButtonSecondary className="self-center" href={"/login " as Route} >
              Sign In
            </ButtonSecondary>
            <div className="px-1" />
            <ButtonPrimary className="self-center" href={"/register" as Route}>
              Sign up
            </ButtonPrimary>
          </div>

          <div className="flex xl:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar />
          </div>
        </div>
      </div>
      <div className={`${showModal ? 'block' : 'hidden'} container px-4 py-2 bg-gray-50 rounded-b-md`}>
        <form onSubmit={handleSearch} className="flex justify-between gap-2">
          <Select
            onChange={(val) => setData((prev) => ({ ...prev, location: val.target.value }))
            }
          >
            {dataLocation && dataLocation?.data?.map((val: any) => (
              <option value={val.id} key={val.id}>{val.title}</option>
            ))}

          </Select>
          <Select
            onChange={(val) => setData((prev) => ({ ...prev, category: val.target.value }))}
          >
            {dataCategory && dataCategory?.map((val: any) => {
              return (
                <option value={val.id} key={val.id}>{val.name}</option>
              )
            })}

          </Select>
          <Input placeholder="Enter Your Tour"  required value={keyword} onChange={(e) => setKeyword(e.target.value)} />
          <button onClick={() => handleSearch} className="px-4 py-2 rounded-full bg-primary-6000 text-white font-semibol text-sm cursor-pointer hover:bg-green-800">Search</button>
        </form>
      </div>
    </div>
  );
};

export default MainNav1;
