import Label from "@/components/Label";
import React from "react";
import { FC } from "react";

export interface FormItemProps {
  className?: string;
  label?: string;
  desc?: string;
  children?: React.ReactNode;
  error?: string;
}

const FormItem: FC<FormItemProps> = ({
  children,
  className = "",
  label,
  desc,
  error
}) => {
  return (
    <div className={className}>
      {label && <Label>{label}</Label>}
      <div className="mt-1">{children}</div>
      {desc && (
        <span className="block mt-3 text-xs text-neutral-500 dark:text-neutral-400 ">
          {desc}
        </span>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

    </div>
  );
};

export default FormItem;
