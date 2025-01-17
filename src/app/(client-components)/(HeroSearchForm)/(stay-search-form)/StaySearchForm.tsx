import React, { FC, useEffect, useState } from "react";
import LocationInput from "../LocationInput";
import GuestsInput from "../GuestsInput";
import StayDatesRangeInput from "./StayDatesRangeInput";
import ExperienceInput from "../ExperienceInput";
import HttpDataClients from "config/utils";
import { initialStateSearchLocation, SearchApiResponse } from "config/location/types";
import { initialStateExperiences } from "config/experiences/types";
import { title } from "process";
import ClassInput from "../ClassInput";

const StaySearchForm: FC<{}> = ({}) => {
  const [dataLocation, setDataLocation] = useState<SearchApiResponse>(initialStateSearchLocation)
  const [dataExperience, setDataExperience] = useState<any>(initialStateExperiences)

  const getLocation = async () => {
    let res = await HttpDataClients.SearchLocation({ page: 1, s: '' })
    if (res.status) {
      setDataLocation(res)

    }
  }

  const getExperience = async () => {
    let res = await HttpDataClients.SearchInterest({ lang: 'id', s: '' })
    if (res.status) {
      setDataExperience(res)
    }
  }

  useEffect(() => {
    getLocation()
    getExperience()
  },[])
  const renderForm = () => {
    return (
      <form className="w-full relative z-10 mt-8 flex rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800">
        <LocationInput data={dataLocation.data} className="flex-[1]" />
        <ExperienceInput data={dataExperience.data} className="flex-[1]" />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        {/* <StayDatesRangeInput className="flex-1" /> */}
        <ClassInput placeHolder="Class" desc="class" data={[
          {
            title: "Economy",
            id: "Economi"
          },
          {
            title: "Deluxe",
            id: "Deluxe"
          },
          {
            title: "Luxury",
            id: "Luxury"
          },
        ]} className="flex-[1]" />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <GuestsInput className="flex-1" />
      </form>
    );
  };

  return renderForm();
};

export default StaySearchForm;
