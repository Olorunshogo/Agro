
import React, { useState, forwardRef } from "react";
import { Input } from "./ui/input";
import { Eye, EyeOff } from "lucide-react";

export type PasswordInputProps = React.ComponentProps<typeof Input> & {
  label?: string;
  required?: boolean;
  error?: boolean;
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label = "Password", required = false, className = "", ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label className="flex items-center gap-1 text-sm font-medium text-[#0F172A] lg:text-base lg:font-bold">
          {label}
          {required && <span className="text-(--input-error-red)">*</span>}
        </label>
        <div className="relative">
          <Input
            type={visible ? "text" : "password"}
            ref={ref}
            aria-label={label}
            className={`text-sm lg:text-base pr-10 h-10 caret-(--input-field-green) text-(--input-text-colour)
              ${props.error ? "border-(--input-error-red)" : "border-(--input-border-green)"}`}
            {...props}
          />
          <button
            type="button"
            aria-label={visible ? "Hide password" : "Show password"}
            onClick={() => setVisible((v) => !v)}
            className="absolute inset-y-0 flex items-center px-2 transition-all duration-300 ease-in-out right-2 hover:cursor-pointer"
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";


