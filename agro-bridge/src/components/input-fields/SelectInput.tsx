
// components/SelectInput.tsx
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { forwardRef } from "react";

type SelectInputProps = {
  label?: string;
  required?: boolean;
  error?: boolean;
  placeholder?: string;
  className?: string;
};

export const SelectInput = forwardRef<
  HTMLButtonElement,
  SelectInputProps & React.ComponentProps<typeof Select>
>(
  (
    {
      label,
      required = false,
      error = false,
      placeholder = "Select an option",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {label && (
          <label className="flex items-center gap-1 text-sm font-medium text-[#0F172A] lg:text-base lg:font-bold">
            {label}
            {required && <span className="text-red-600">*</span>}
          </label>
        )}
        <Select {...props}>
          <SelectTrigger
            ref={ref}
            className={`h-10 text-sm lg:text-base ${
              error
                ? "border-red-600 focus:ring-red-600"
                : "border-gray-300 focus:ring-green-600"
            }`}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>{children}</SelectContent>
        </Select>
      </div>
    );
  }
);

SelectInput.displayName = "SelectInput";