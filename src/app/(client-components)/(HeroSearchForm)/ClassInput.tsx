"use client";

import { MapPinIcon } from "@heroicons/react/24/outline";
import React, { useState, useRef, useEffect, FC } from "react";
import ClearDataButton from "./ClearDataButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { updateFormData } from "store/modal/modalSlice";

export interface LocationInputProps {
  placeHolder?: string;
  desc?: string;
  className?: string;
  divHideVerticalLineClass?: string;
  autoFocus?: boolean;
  data?: any;
}

const ClassInput: FC<LocationInputProps> = ({
  autoFocus = false,
  placeHolder = "Location",
  desc = "Where are you going?",
  className = "nc-flex-1.5",
  divHideVerticalLineClass = "left-10 -right-0.5",
  data = [],
}) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchValue, setSearchValue] = useState("");
  const [showPopover, setShowPopover] = useState(autoFocus);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const modalStates = useSelector((state: RootState) => state.modal.formData);

  useEffect(() => {
    setShowPopover(autoFocus);
  }, [autoFocus]);

  const handleClickOutside = React.useCallback((event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setShowPopover(false);
    }
  }, []);

  useEffect(() => {
    if (showPopover) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showPopover]);

  useEffect(() => {
    if (showPopover && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showPopover, handleClickOutside]);

  const handleFormUpdate = (field: string, value: any) => {
    dispatch(updateFormData({ [field]: value }));
  };

  const handleSelectLocation = (item: any) => {
    if (selectedLocation === item.title) {
      // If the same item is selected, deselect it
      setSelectedLocation(null);
      handleFormUpdate("clases", null);
    } else {
      // Select the new item
      setSelectedLocation(item.title);
      handleFormUpdate("clases", item.id);
    }
    setShowPopover(false);
  };

  const renderRecentSearches = () => (
    <>
      <h3 className="block mt-2 sm:mt-0 px-4 sm:px-8 font-semibold text-base sm:text-lg text-neutral-800 dark:text-neutral-100">
        Recent searches
      </h3>
      <div className="mt-2">
        {data.map((item: any) => (
          <label
            key={item.id}
            className={`flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer truncate ${
              selectedLocation === item.title ? "bg-gray-200" : ""
            }`}
          >
            <input
              type="radio"
              checked={selectedLocation === item.title}
              onChange={() => handleSelectLocation(item)}
              className="form-radio"
            />
            <span className="block font-medium text-neutral-700 dark:text-neutral-200">
              {item.title}
            </span>
          </label>
        ))}
      </div>
    </>
  );

  return (
    <div className={`relative flex ${className}`} ref={containerRef}>
      <div
        onClick={() => setShowPopover(true)}
        className={`flex z-10 flex-1 relative flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left px-2 ${
          showPopover ? "nc-hero-field-focused" : ""
        }`}
      >
        <div className="text-neutral-300 dark:text-neutral-400">
          <MapPinIcon className="w-5 h-5 lg:w-7 lg:h-7" />
        </div>
        <div className="flex-grow">
          <input
            className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate"
            placeholder={selectedLocation ? "" : placeHolder}
            value={selectedLocation || ""}
            autoFocus={showPopover}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
            ref={inputRef}
          />
          <span className="block mt-0.5 text-sm text-neutral-400 font-light">
            {!!searchValue || selectedLocation ? placeHolder : desc}
          </span>
          {searchValue && showPopover && (
            <ClearDataButton onClick={() => setSearchValue("")} />
          )}
        </div>
      </div>

      {showPopover && (
        <div className="absolute left-0 z-40 w-full min-w-[300px] sm:min-w-[500px] bg-white dark:bg-neutral-800 top-full mt-3 py-3 sm:py-6 rounded-3xl shadow-xl max-h-96 overflow-y-auto">
          {renderRecentSearches()}
        </div>
      )}
    </div>
  );
};

export default ClassInput;
