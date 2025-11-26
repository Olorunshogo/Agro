
// components/SearchableSelect.tsx
import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "~/lib/utils";

type Option = {
  value: string;
  label: string;
};

type SearchableSelectProps = {
  label?: string;
  required?: boolean;
  error?: boolean;
  placeholder?: string;
  options: Option[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
};

export const SearchableSelect: React.FC<SearchableSelectProps> = ({
  label,
  required = false,
  error = false,
  placeholder = "Search...",
  options,
  value,
  onValueChange,
  className = "",
}) => {
  const [open, setOpen] = React.useState(false);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="flex items-center gap-1 text-sm font-medium text-[#0F172A] lg:text-base lg:font-bold">
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "h-10 justify-between text-sm lg:text-base font-normal",
              error && "border-red-600 focus:ring-red-600",
              !value && "text-muted-foreground"
            )}
          >
            {selectedLabel}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder={placeholder} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => {
                      onValueChange(option.value);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {error && (
        <p className="text-sm text-red-600">This field is required</p>
      )}
    </div>
  );
};
