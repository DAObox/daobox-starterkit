import React from "react";
import { Dropdown as Dropdown_, DropdownItem } from "@tremor/react";

interface Option<T> {
  value: T;
  text: string;
  disabled?: boolean;
}

interface DropdownProps<T> {
  options: Option<T>[];
  value: T;
  defaultValue?: T;
  placeholder?: string;
  setValue: (value: T) => void;
}

export const Dropdown = <T,>({
  options,
  value,
  setValue,
  placeholder,
}: DropdownProps<T>): React.ReactElement => {
  return (
    <Dropdown_
      value={value as unknown as string}
      onValueChange={(e) => setValue(e as unknown as T)}
      placeholder={placeholder}
    >
      {options.map((option, index) => (
        <DropdownItem
          disabled={option.disabled}
          defaultValue={option.value as unknown as string}
          value={option.value as unknown as string}
          text={option.text}
          key={index}
        />
      ))}
    </Dropdown_>
  );
};
