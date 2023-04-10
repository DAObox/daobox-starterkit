import React from "react";
import { Dropdown as Dropdown_, DropdownItem } from "@tremor/react";
import { DropdownProps } from "@Types/index";

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
          className=" "
        />
      ))}
    </Dropdown_>
  );
};
