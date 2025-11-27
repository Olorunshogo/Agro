
import React, { forwardRef, useMemo } from "react";
import { Textarea } from "./ui/textarea";

export type MessageInputProps = React.ComponentProps<typeof Textarea> & {
  label?: string;
  required?: boolean;
  error?: boolean;
  minWords?: number;
  maxWords?: number;
};

export const MessageInput = forwardRef<HTMLTextAreaElement, MessageInputProps>(
  (
    {
      label = "Message",
      required = false,
      className = "",
      error = false,    
      minWords,
      maxWords,
      value = "",
      ...props
    },
    ref
  ) => {
    const wordCount = useMemo(() => {
      const trimmed = value.toString().trim();
      return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
    }, [value]);

    // Live validation while typing
    const isBelowMin = minWords !== undefined && wordCount > 0 && wordCount < minWords;
    const isAboveMax = maxWords !== undefined && wordCount > maxWords;

    const hasLiveError = isBelowMin || isAboveMax;
    const hasError = error || hasLiveError; 

    const showCounter = minWords !== undefined || maxWords !== undefined;

    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label className="flex items-center gap-1 text-sm font-medium text-[#0F172A] lg:text-base lg:font-bold">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>

        <Textarea
          ref={ref}
          aria-label={label}
          className={`min-h-32 text-sm lg:text-base resize-none caret-(--input-field-green) text-(--input-text-colour) ${
            hasError ? "border-(--input-error-red)" : "border-(--input-border-green)"
          }`}
          value={value}
          {...props}
        />

        {/* Word counter */}
        {showCounter && (
          <div className="flex justify-end text-xs text-gray-500">
            <span className={isAboveMax ? "text-(--input-error-red) font-medium" : ""}>
              {wordCount} / {maxWords ?? "∞"} {minWords && `(min ${minWords})`}
            </span>
          </div>
        )}

        {/* Live word-count error (shows instantly while typing) */}
        {hasLiveError && (
          <p className="mt-1 text-sm text-(--input-error-red)">
            {isBelowMin
              ? `Minimum ${minWords} words required`
              : `Maximum ${maxWords} words allowed`}
          </p>
        )}
      </div>
    );
  }
);

MessageInput.displayName = "MessageInput";