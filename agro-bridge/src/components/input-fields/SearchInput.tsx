
import React from "react";
import { forwardRef } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export type SearchInputProps = React.ComponentProps<typeof Input> & {
  label?: string;
  required?: boolean;
  error?: boolean;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ label = "", required = false, className = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label className="flex items-center gap-1 text-sm font-medium text-[#0F172A] lg:text-base lg:font-bold">
          {label}
          {required && <span className="text-(--input-error-red)">*</span>}
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 flex items-center pointer-events-none left-3">
            <Search size={18} />
          </div>

          <Input
            type="search"
            ref={ref}
            aria-label={label}
            className={`pl-10 text-sm lg:text-base pr-10 h-10 caret-(--input-field-green) text-(--input-text-colour)
              ${props.error ? "border-(--input-error-red)" : "border-(--input-border-green)"}`}
            {...props}
          />
        </div>
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

