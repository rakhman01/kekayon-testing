"use client";
import { TaxonomyType } from "@/data/types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "store/modal/modalSlice";
import { RootState } from "store/store";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Label from "./Label";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import FormItem from "@/app/add-listing/FormItem";
import Select from "@/shared/Select";
import SectionSliderBooking from "./SectionSliderBooking";
import { initialStateSearchLocation, SearchApiResponse } from "config/location/types";
import HttpDataClients from "config/utils";
import ModalWithCheckboxSelect from "./ModalWithCheckboxSelect";
import { ApiResponseExperiences, initialStateExperiences } from "config/experiences/types";
import GuestsInputModal from "@/app/(listing-detail)/listing-stay-detail/GuestsInputModal";



export const DEMO_CATS_2 = [
  {
    id: "1",
    href: "/listing-real-estate",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    image_url:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-real-estate",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    image_url:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-real-estate",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    image_url:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-real-estate",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    image_url:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-real-estate",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    image_url:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-real-estate",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    image_url:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/listing-real-estate",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    image_url:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const ModalBookingRequest: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  const [translateY, setTranslateY] = useState(0); // Track how much the modal has been translated on Y-axis
  const [dataLocation, setDataLocation] = useState<SearchApiResponse>(initialStateSearchLocation)
  const [dataExperience, setDataExperience] = useState<any>(initialStateExperiences)
  const [selectedData, setSelectedData] = useState<any>([]);
  const [data, setData] = useState([{
    location: '',
    Interest: '',
    member: '',
    tourClass: '',
    duration: '',
    depature_time: '',
    note: '',
    name: '',
    buget: '',
    email: '',
    phone: ''
  }])

  const handleInputValue = (key: string, value: any) => {
      setData((prev) => ({
        ...prev,
        key: value
      }));
    
  }

  useEffect(() => {
    handleInputValue('location', selectedData)
  }, [selectedData]);


  const getLocation = async () => {
    let res = await HttpDataClients.SearchLocation({ page: 1, s: '' })
    if (res.status) {
      setDataLocation(res)

    }
  }
  const getExperience = async () => {
    let res = await HttpDataClients.SearchExperience({ page: 1, s: '' })
    if (res.status) {
      setDataExperience(res)
    }
  }


  useEffect(() => {
    const handleScroll = () => {
      // Update translateY based on scroll position
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setTranslateY(scrollY - 100); // Starts sliding up as user scrolls
      } else {
        setTranslateY(0); // Reset position when scroll is less than 50px
      }
    };

    if (isOpen) {
      getLocation()
      getExperience()
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [isOpen]);

  const handleBackdropClick = () => {
    dispatch(closeModal());
  };




  return (
    <div
      onClick={handleBackdropClick}
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 border border-black 
        ${isOpen ? "visible opacity-100" : "invisible opacity-0"
        }
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        className={`bg-white px-4 py-8 mt-24 rounded-2xl shadow-lg w-96 sm:w-[480px] transition-transform duration-300 mx-auto `}
        style={{
          // maxHeight: "90vh",
          // overflowY: "auto",
          transform: `translateY(-${translateY}px)`, // Adjust the translation on scroll
        }}
      >
        <h2 className="text-lg font-bold">Create Your Perfect Tour with Us!</h2>
        <p className="text-xs font-normal py-2 text-gray-600 ">
          Looking for a unique experience? Our custom tours cater to your preferences, whether you want a relaxing day or an adventurous outing!
        </p>
        {/* Your form content */}
        <SectionSliderBooking
          categories={dataLocation.data}
          categoryCardType="card4"
          itemPerRow={3}
          className="my-2"
          selectedData={selectedData}
          setSelectedData={setSelectedData}
        />
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Your Tour Preferences</h2>
          <div className="space-y-5">

            <div className="space-y-1">
              <ModalWithCheckboxSelect items={dataLocation.data} selectedData={selectedData} setSelectedData={setSelectedData} />

              <FormItem
                label="Interest"
              >
                <Select
                  onChange={(val) => console.log(val.target.value)
                  }
                >
                  {dataExperience && dataExperience?.data?.map((val: any) => (
                    <option value={val.id}>{val.title}</option>
                  ))}

                </Select>
              </FormItem>
            </div>
            <div className="flex justify-between items-center gap-2">
              <FormItem
                label="Member"
                className="w-full"
              // desc="Hotel: Professional hospitality businesses that usually have a unique style or theme defining their brand and decor"
              >
                <GuestsInputModal />
                {/* <Select>
                  <option value="Hotel">Prambanan</option>
                  <option value="Cottage">Kute</option>
                  <option value="Villa">Monas</option>
                  <option value="Cabin">Rawit</option>
                </Select> */}
              </FormItem>
              <FormItem
                label="Tour Class"
                className="w-full"
              // desc="Hotel: Professional hospitality businesses that usually have a unique style or theme defining their brand and decor"
              >
                <Select>
                  <option value="Cottage">Economi</option>
                  <option value="Hotel">Deluxe</option>
                  <option value="Villa">Luxury</option>
                </Select>
              </FormItem>
            </div>
            <div className="flex justify-between items-center gap-2">
              <FormItem
                label="Duration"
                className="w-full"
              // desc="Hotel: Professional hospitality businesses that usually have a unique style or theme defining their brand and decor"
              >
               <Input placeholder="in day"/>
              </FormItem>
              <FormItem
                label="Departure Time"
                className="w-full"
              // desc="Hotel: Professional hospitality businesses that usually have a unique style or theme defining their brand and decor"
              >
                <Select>
                  <option value="Hotel">January 2025</option>
                  <option value="Cottage">February 2025</option>
                  <option value="Villa">March 2025</option>
                </Select>
              </FormItem>
            </div>
            <div className="space-y-1">
              <Label>Special Request </Label>
              <Textarea placeholder="..." />
            </div>
            <h2 className="text-lg font-bold mb-2">Your Contact</h2>
            <div className="space-y-1">
              <Label>Full Name </Label>
              <Input defaultValue="JOHN DOE" />
            </div>
            <div className="space-y-1">
              <Label>*Budget </Label>
              <Input defaultValue="JOHN DOE" />
            </div>
            <div className="space-y-1">
              <Label>Email </Label>
              <Input type="email" defaultValue="example@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label>Phone number </Label>
              <Input defaultValue="(+62) 000-000-0000" />
            </div>

            {/* <div className="flex space-x-5">
              <div className="flex-1 space-y-1">
                <Label>Expiration date </Label>
                <Input type="date" defaultValue="MM/YY" />
              </div>
              <div className="flex-1 space-y-1">
                <Label>CVC </Label>
                <Input />
              </div>
            </div> */}
          </div>
        </div>
        <ButtonPrimary className="w-full mt-8">Submit Request</ButtonPrimary>
      </div>
    </div>
  );
};

export default ModalBookingRequest;


