
import React, { useState, forwardRef } from "react";
import { Input } from "./ui/input";
import { Eye, EyeOff } from "lucide-react";

export type PasswordInputProps = React.ComponentProps<typeof Input> & {
  label?: string;
  required?: boolean;
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label = "Password", required = false, className = "", ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label className="flex items-center gap-1 text-sm font-bold">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          <Input
            type={visible ? "text" : "password"}
            ref={ref}
            aria-label={label}
            className="pr-10"
            {...props}
          />
          <button
            type="button"
            aria-label={visible ? "Hide password" : "Show password"}
            onClick={() => setVisible((v) => !v)}
            className="absolute inset-y-0 flex items-center px-2 right-2"
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";


