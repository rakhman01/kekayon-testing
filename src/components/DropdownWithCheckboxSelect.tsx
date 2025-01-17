import React, { useState, useRef, useEffect } from "react";
import Input from "@/shared/Input";
import Label from "./Label";

interface Item {
  id: number;
  name: string;
}

const DropdownWithCheckboxSelect: React.FC<any> = ({ items, label, selectedData, setSelectedData }) => {
  const [isOpen, setIsOpen] = useState(false); // Toggle visibility
  const dropdownRef = useRef<HTMLDivElement>(null); // Reference to dropdown container

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const handleCheckboxChange = (item: Item) => {
    setSelectedData((prevSelected: any) => {
      const isSelected = prevSelected.some((selected: any) => selected.id === item.id);

      // Toggle logic: remove if selected, add if not
      if (isSelected) {
        return prevSelected.filter((selected: any) => selected.id !== item.id);
      } else {
        return [...prevSelected, item];
      }
    });
  };

  const isChecked = (item: Item) => {
    return selectedData?.some((selected: any) => selected.id === item.id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button to toggle dropdown */}
      {label && <Label>{label}</Label>}
      <Input
        value={selectedData?.length < 1 ? "" : `${selectedData?.length} tempat`}
        placeholder="Your Interests?"
        onClick={toggleDropdown}
      />

      {/* Dropdown list of items with checkboxes */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-300 z-10">
          <div className="p-4 space-y-2">
            {items.map((item: any) => (
              <label key={item.id} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked(item)}
                  onChange={() => handleCheckboxChange(item)}
                  className="form-checkbox h-4 w-4"
                />
                <span>{item.name}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithCheckboxSelect;
