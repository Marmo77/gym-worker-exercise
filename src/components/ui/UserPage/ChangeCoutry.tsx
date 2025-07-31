"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// IMPORT COUNTRIES
// import type {
//   ICountry,
//   ICountryData,
//   ILanguage,
//   TContinentCode,
//   TCountryCode,
//   TLanguageCode,
// } from 'countries-list'

import { countries } from "countries-list";

// Convert countries object to array for mapping
const countryList = Object.entries(countries).map(([code, data]) => ({
  value: code,
  label: data.name,
}));

interface ChangeCountryProps {
  country: string;
  onChange: (country: string) => void; // <-- update type
}

export function ChangeCountry({ country, onChange }: ChangeCountryProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(country); // use country name

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value || "Select country..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder={`Search country... ${country}`}
            className="h-9"
            value={value}
            onValueChange={setValue}
          />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countryList
                .filter((c) =>
                  c.label.toLowerCase().includes(value.toLowerCase())
                )
                .map((c) => (
                  <CommandItem
                    key={c.value}
                    value={c.label} // use label (name) as value
                    onSelect={() => {
                      setValue(c.label);
                      setOpen(false);
                      onChange(c.label); // pass full name
                    }}
                  >
                    {c.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === c.label ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
