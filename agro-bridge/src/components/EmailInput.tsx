
import React from "react";
import { forwardRef } from "react";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

export type EmailInputProps = React.ComponentProps<typeof Input> & {
  label?: string;
  required?: boolean;
  error?: boolean;
};

export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ label = "Email", required = false, className = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label className="flex items-center gap-1 text-sm font-medium text-[#0F172A] lg:text-base lg:font-bold">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          <Input
            type="email"
            ref={ref}
            aria-label={label}
            className={`text-sm lg:text-base pr-10 caret-(--input-field-green) text-(--input-text-colour) 
              ${props.error ? "border-(--input-error-red)" : "border-(--input-border-green)"}`}
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

