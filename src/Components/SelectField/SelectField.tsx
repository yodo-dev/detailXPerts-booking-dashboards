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
  options,
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
          // className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-3"
          className={styleSelect}
          defaultValue={defaultValue}
          onChange={onChange}
        >
          {options?.map((option) => (
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
