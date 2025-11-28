
"use client";

import * as React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { cn } from "~/lib/utils";

export type CheckboxInputProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  description?: string;
  required?: boolean;
  error?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
};

export const CheckboxInput = React.forwardRef<HTMLDivElement, CheckboxInputProps>(
  (
    {
      label,
      description,
      required = false,
      error = false,
      className,
      id: customId,
      checked,
      defaultChecked,
      disabled,
      onCheckedChange,
      ...props
    },
    ref
  ) => {
    const id = customId || `checkbox-${React.useId()}`;

    return (
      <div
        ref={ref}
        className={cn("flex gap-3 cursor-pointer duration-300 ease-in-out transition-all", className)}
        {...props}
      >
        <Checkbox
          id={id}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onCheckedChange={onCheckedChange}
          className={cn(
            "cursor-pointer duration-300 ease-in-out transition-all",
            error && "border-red-500 focus:ring-red-500"
          )}
        />

        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor={id}
            className={cn(
              "flex items-center gap-1 text-sm font-medium text-[#0F172A] lg:text-base lg:font-bold cursor-pointer duration-300 ease-in-out transition-all",
              disabled && "opacity-60 cursor-not-allowed",
              error && "text-red-600"
            )}
          >
            {label}
            {required && <span className="text-(--input-error-red)">*</span>}
          </Label>

          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }
);

CheckboxInput.displayName = "CheckboxInput";
