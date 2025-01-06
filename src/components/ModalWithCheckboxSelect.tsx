import Input from "@/shared/Input";
import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

const DropdownWithCheckboxSelect: React.FC<any> = ({items, selectedData, setSelectedData}) => {
  const [isOpen, setIsOpen] = useState(false); // Toggle visibility

  
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
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
    return selectedData.some((selected: any) => selected.id === item.id);
  };

  return (
    <div className="relative">
      {/* Button to toggle dropdown */}
      <Input value={selectedData?.length < 1 ? '' : selectedData?.length + ` tempat`} placeholder="Where do you want to go"  onClick={toggleDropdown}/>

      {/* Dropdown list of items with checkboxes */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-300 z-10">
          <div className="p-4 space-y-2">
            {items.map((item: any) => (
              <label
                key={item.id}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={isChecked(item)}
                  onChange={() => handleCheckboxChange(item)}
                  className="form-checkbox h-4 w-4"
                />
                <span>{item.title}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithCheckboxSelect;
