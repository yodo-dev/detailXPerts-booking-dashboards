import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  options?: Option[];
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  imageSrc?: string;
  styleSelect: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options = [],
  defaultValue,
  onChange,
  imageSrc,
  styleSelect,
}) => {
  return (
    <div className="w-full">
      <label className="block text-sm text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <select
  className={styleSelect}
  defaultValue=""
  onChange={onChange}
>
  {/* Placeholder shown first */}
  <option value="" disabled hidden>
    {defaultValue || "Select an option"}
  </option>

  {options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
</select>


        {imageSrc && (
          <img
            src={imageSrc}
            alt="Map"
            className="w-[20px] h-[20px] absolute top-[13px] right-[15px]"
          />
        )}
      </div>
    </div>
  );
};

export default SelectField;
