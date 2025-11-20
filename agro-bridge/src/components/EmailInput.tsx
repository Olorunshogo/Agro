
import React from "react";
import { forwardRef } from "react";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

export type EmailInputProps = React.ComponentProps<typeof Input> & {
  label?: string;
  required?: boolean;
};

export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ label = "Email", required = false, className = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label className="flex items-center gap-1 text-sm font-bold">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          <Input
            type="email"
            ref={ref}
            aria-label={label}
            className="pr-10"
            {...props}
          />
          <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
            <Mail size={18} />
          </div>
        </div>
      </div>
    );
  }
);

EmailInput.displayName = "EmailInput";

