"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, updateFormData } from "store/modal/modalSlice";
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
import { initialStateExperiences } from "config/experiences/types";
import GuestsInputModal from "@/app/(listing-detail)/listing-stay-detail/GuestsInputModal";
import Image from "next/image";
import DropdownWithCheckboxSelect from "./DropdownWithCheckboxSelect";
import { getMonthNumber, getYear } from "utils/globalFunction";



const ModalBookingRequest: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  const [dataLocation, setDataLocation] = useState<SearchApiResponse>(initialStateSearchLocation)
  const [dataExperience, setDataExperience] = useState<any>(initialStateExperiences)
  const [selectedData, setSelectedData] = useState<any>([]);
  const [dataInterest, setDataInterest] = useState<any>([]);
  const [selectedInterest, setSelectedInterest] = useState<any>([]);
  const modalStates = useSelector((state: RootState) => state.modal.formData);
  const title = useSelector((state: RootState) => state.modal.title);
  const [tourClass, setTourClass] = useState()
  const [monthsOptions, setMonthsOptions] = useState<any>([])
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading ] = useState<boolean>(false)



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
  const getInterest = async () => {
    let res = await HttpDataClients.SearchInterest({ lang: 'id', s: '' })
    if (res.status) {
      setDataInterest(res)
    }
  }

  const getNext12Months = () => {
    const currentDate = new Date();

    const options = [];

    for (let i = 0; i < 12; i++) {
      const futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i);
      const month = futureDate.toLocaleString("default", { month: "long" });
      const year = futureDate.getFullYear();
      options.push(`${month} ${year}`);
    }
    setMonthsOptions(options)
  };

  // const validateForm = () => {
      
  //   const newErrors: any = {};
  //   if (!modalStates?.name) newErrors.name = "Name is required";
  //   if (!modalStates?.email) newErrors.email = "Email is required";
  //   if (!modalStates?.phone) newErrors.phone = "Phone is required";
  //   if (!modalStates?.tour_class) newErrors.tour_class = "Tour class is required";
  //   if (!modalStates?.trip_days) newErrors.trip_days = "Trip duration is required";
  //   if (!modalStates?.budget) newErrors.budget = "Budget is required";
  //   if (!modalStates?.trip_days) newErrors.trip_days = "Trip days is required";
  //   if (!modalStates?.guestAdults && !modalStates?.guestChildren && !modalStates?.guestInfants ) newErrors.member = "Member min 1";
  //   if (selectedData.length === 0 && title === "Main") newErrors.interest = "Interest is required";
  //   if (selectedInterest.length === 0&& title === "Main") newErrors.location = "Location is required";
  //   return newErrors;
  // };




  useEffect(() => {

    if (isOpen) {
      getLocation()
      getExperience()
      getInterest()
      getNext12Months()
      setSelectedData(
        dataLocation.data.filter((location) =>
          modalStates?.locations?.includes(location.id)
        ))


      setSelectedInterest(
        dataInterest.data?.filter((val: any) => {

          return modalStates?.interest?.includes(val?.id)
        }))

      setTourClass(modalStates?.clases)
    }


  }, [isOpen]);

  // Set `selectedData` based on `modalStates.locations` and `dataLocation`
  useEffect(() => {

    if (isOpen && modalStates?.location && dataLocation?.data) {
      const filteredData = dataLocation.data.filter((location) =>
        modalStates.location.includes(location.id)
      );
      const filteredDataInterst = dataInterest.data?.filter((location: any) =>
        modalStates.interest.includes(location?.id)
      );

      setSelectedData(filteredData);
      setSelectedInterest(filteredDataInterst)
    }


  }, [modalStates?.locations, dataLocation?.data, modalStates?.interest, dataInterest?.data]);

  const handleFormUpdate = (field: string, value: any) => {
    dispatch(updateFormData({ [field]: value }));
  };


  const handleBackdropClick = () => {
    dispatch(closeModal());
  };
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
  
    const requiredFields = [
      { key: "name", message: "Name is required" },
      { key: "email", message: "Email is required" },
      { key: "phone", message: "Phone is required" },
      // { key: "tour_class", message: "Tour class is required" },
      { key: "trip_days", message: "Trip days are required" },
      { key: "budget", message: "Budget is required" },
    ];
  
    // Validate required fields
    requiredFields.forEach(({ key, message }) => {
      if (!modalStates?.[key]) newErrors[key] = message;
    });
  
    // Validate guests
    if (
      !modalStates?.guestAdults &&
      !modalStates?.guestChildren &&
      !modalStates?.guestInfants
    ) {
      newErrors.member = "At least one member is required";
    }
  
    // Validate specific conditions
    if (title === "Main") {
      if (selectedData.length < 1) newErrors.location = "Location is required";
      if (selectedInterest.length < 1)
        newErrors.interest = "Interest is required";
    }
  
    return newErrors;
  };
  
  const handleSubmit = async () => {
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
      
    setLoading(true)
    // Create common parameters
    const params = {
      email: modalStates?.email,
      name: modalStates?.name,
      phone: modalStates?.phone || "",
      approx_date: modalStates?.approx_date || "2025-01-01",
      approx_month:
        getMonthNumber(modalStates?.departure_time || monthsOptions[0]) || "",
      approx_year:
        getYear(modalStates?.departure_time || monthsOptions[0]) || "",
      tour_class: modalStates?.tour_class || "Deluxe",
      adult: modalStates?.guestAdults || 0,
      children: modalStates?.guestChildren || 0,
      infant: modalStates?.guestInfants || 0,
      notes: modalStates?.notes || "",
      trip_days: modalStates?.trip_days || "",
      budget: modalStates?.budget || "",
    };
      
    // Extend parameters based on title
    const requestParams = {
      Main: { ...params, location_ids: selectedData?.map((val: any) => val.id), interest_ids: selectedInterest.map((val: any) => val.id) },
      Map: { ...params, tour_id: modalStates?.map?.id },
    }[title] || params;
    
  
    try {
      const data = await HttpDataClients.postSerch(requestParams);
      setLoading(false)
      alert(data.message);
      if (data.status) {
        dispatch(closeModal());
        window.location.reload()

      }
    } catch (error) {
      setLoading(false)
      alert("An error occurred while submitting the form.");
    }
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
        className={`bg-white px-6 py-8 mt-8  pb-20 rounded-2xl shadow-lg w-96 sm:w-[520px] max-h-[800px] transition-transform overflow-auto duration-300 mx-auto`}
        style={{
          // maxHeight: "90vh",
          // overflowY: "auto",
          // transform: `translateY(-${translateY}px)`, // Adjust the translation on scroll
        }}
      >
        <h2 className="text-4xl font-indonesia font-bold">{title.includes("Main") ? "Create Your Perfect Tour with Us!" : title.includes('Map') ? "Tour inquiry" : "Contact Us"}</h2>
        <p className="text-xs font-semibold font-roboto py-2 text-gray-600 ">
          Looking for a unique experience? Our custom tours cater to your preferences, whether you want a relaxing day or an adventurous outing!
        </p>
        {/* Your form content */}
        <div className={`${title.includes('Main') ? 'block' : 'hidden'}`}>
          <SectionSliderBooking
            categories={dataLocation.data}
            categoryCardType="card4"
            itemPerRow={3}
            className="my-2"
            selectedData={selectedData}
            setSelectedData={setSelectedData}
          />
        </div>
        <div className="mt-4">
          <div className={`relative ${title.includes('Map') ? 'block' : 'hidden'}`}>
            <Image
              className="w-full h-48 rounded-xl object-cover"
              alt={modalStates?.map?.title}
              src={modalStates?.map?.banner_image}
              width={100}
              height={500}
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-black bg-opacity-50">
              <div className="container mx-auto text-center">
                <h1 className="text-white text-xl font-bold mb-4">
                  {modalStates?.map?.title}
                </h1>
                <p className="text-white text-lg mb-6">{modalStates?.map?.duration}</p>
              </div>
            </div>
          </div>

          {/* <h2 className="text-lg font-bold mb-2">Your Tour Preferences</h2> */}
          <div className="space-y-5">
            <div className={`${title.includes('Map') || title.includes("Envelope") ? 'hidden' : 'block'} space-y-1`}>
              <ModalWithCheckboxSelect label="Location" items={dataLocation.data} selectedData={selectedData} setSelectedData={setSelectedData} />
              {selectedData?.length < 1 && errors.location && <p className="text-red-500 text-sm mt-2">{errors.location}</p>}

              <DropdownWithCheckboxSelect label="Interest" items={dataInterest?.data || []} selectedData={selectedInterest} setSelectedData={setSelectedInterest} />
              {selectedInterest?.length < 1 && errors.interest && <p className="text-red-500 text-sm mt-2">{errors.interest}</p>}

              {/* <FormItem
                label="Interest"
              >
                <Select
                  onChange={(val) => console.log(val.target.value)
                  }
                >
                  {dataInterest && dataInterest?.map((val: any) => (
                    <option key={val.id} value={val.id}>{val.name}</option>
                  ))}

                </Select>
              </FormItem> */}
            </div>
            <div className={`${title.includes('Envelope') ? 'hidden' : 'flex'}   justify-between items-center gap-2`}>
              <FormItem
                label="Tour Class"
                className="w-full"
              // desc="Hotel: Professional hospitality businesses that usually have a unique style or theme defining their brand and decor"
              >
                <Select value={tourClass} onChange={(e: any) => setTourClass(e.target.value)
                }>
                  <option value={"Economi"}>Economi</option>
                  <option value={"Deluxe"}>Deluxe</option>
                  <option value={"Luxury"}>Luxury</option>
                </Select>
              </FormItem>
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
                                {errors.member && <p className="text-red-500 text-sm mt-2">{errors.member}</p>}

              </FormItem>

            </div>
            <div className={`${title.includes('Envelope') ? 'hidden' : 'flex'}   justify-between items-center gap-2`}>
              <FormItem
                label="Duration"
                className="w-full"
              // desc="Hotel: Professional hospitality businesses that usually have a unique style or theme defining their brand and decor"
              >
                <Input onChange={(e: any) => handleFormUpdate('trip_days', e.target.value)} placeholder="in day" />
                {errors.trip_days && <p className="text-red-500 text-sm mt-2">{errors.trip_days}</p>}

              </FormItem>
              <FormItem
                label="Departure Time"
                className="w-full"
              >
                <Select onChange={(e: any) => handleFormUpdate('departure_time', e.target.value)
                }>
                  {monthsOptions?.map((monthYear: any, index: number) => (
                    <option key={index} value={monthYear}>
                      {monthYear}
                    </option>
                  ))}
                </Select>
                {errors.departure_time && <p className="text-red-500 text-sm mt-2">{errors.departure_time}</p>}
              </FormItem>
            </div>
            <div className="space-y-1">
              <Label>Special Request </Label>
              <Textarea onChange={(e: any) => handleFormUpdate('notes', e.target.value)} placeholder="..." />
            </div>
            <h2 className="text-lg font-bold mb-2">Your Contact</h2>
            <div className="space-y-1">
              <Label>Full Name </Label>
              <Input onChange={(e: any) => handleFormUpdate('name', e.target.value)} placeholder="JOHN DOE" />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>
            <div className="space-y-1">
              <Label>*Budget </Label>
              <Input onChange={(e: any) => handleFormUpdate('budget', e.target.value)} placeholder="1.000.000" />
              {errors.budget && <p className="text-red-500 text-sm mt-2">{errors.budget}</p>}
            </div>
            <div className="space-y-1">
              <Label>Email </Label>
              <Input onChange={(e: any) => handleFormUpdate('email', e.target.value)} type="email" placeholder="example@gmail.com" />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>
            <div className="space-y-1">
              <Label>Phone number </Label>
              <Input onChange={(e: any) => handleFormUpdate('phone', e.target.value)} placeholder="(+62) 000-000-0000" />
              {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
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
        <ButtonPrimary loading={loading} onClick={handleSubmit} className="w-full mt-8">Submit Request</ButtonPrimary>
      </div>
    </div>
  );
};

export default ModalBookingRequest;


