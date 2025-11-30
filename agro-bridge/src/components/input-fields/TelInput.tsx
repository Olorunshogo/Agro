
import React, { forwardRef }  from "react"; 
import { Input } from "../ui/input";

export type TelInputProps = React.ComponentProps<typeof Input> & {
  label?: string;
  required?: boolean;
  error?: boolean;
};

export const TelInput = forwardRef<HTMLInputElement, TelInputProps>(
  ({ label = "Tel", required = false, className = "", error, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label className="flex items-center gap-1 text-sm font-medium text-(--input-text-colour) lg:text-base lg:font-bold">
          {label}
          {required && <span className="text-(--input-error-red)">*</span>}
        </label>
        <Input
          ref={ref}
          type="tel"
          aria-label={label}
          className={`text-sm lg:text-base h-10 pr-10 caret-(--input-field-green) text-(--input-text-colour)
            ${error ? "border-(--input-error-red)" : "border-(--input-border-green)"}`}
          {...props}
        />
      </div>
    );
  }
);

TelInput.displayName = "TelInput";
