import React, { useRef } from "react";
import { MapIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { openModal, updateFormData } from "store/modal/modalSlice";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const FloatingMenu = ({data}: any) => {    
  const modalStates = useSelector((state: RootState) => state.modal.formData);
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const openDynamicModal = (title: string, content: string) => {
    // if (!data) {
    //   console.error("Data is not available yet.");
    //   return;
    // }
  
    // if (title.includes("Map")) {
    //   dispatch(updateFormData({ map: data }));
    // }
  
    dispatch(openModal({ title, content }));
  };
  
  // Array of icons with their corresponding actions
  const icons = [
    {
      Icon: MapIcon,
      label: "Map",
      action: () => openDynamicModal("Map", "Map modal content"),
    },
    {
      Icon: PhoneIcon,
      label: "Phone",
      action: () => openDynamicModal("Envelope", "Phone modal content"),
    },
    {
      Icon: EnvelopeIcon,
      label: "Envelope",
      action: () => openDynamicModal("Envelope", "Envelope modal content"),
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed z-50 right-0 top-96 rounded-md"
    >
      <div
        ref={menuRef}
        className="bg-white rounded-lg p-4 cursor-move"
      >
        <ul className="mt-2 space-y-4">
          {icons.map(({ Icon, label, action }) => (
            <li
              key={label}
              onClick={action}
              className="p-2 rounded-md border cursor-pointer hover:bg-slate-200"
            >
              <Icon className="w-5 h-5 lg:w-8 lg:h-8" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FloatingMenu;
