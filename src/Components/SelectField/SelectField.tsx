// import React from "react";

// interface Option {
//   value: string;
//   label: string;
// }

// interface SelectFieldProps {
//   label: string;
//   options?: Option[];
//   defaultValue?: string;
//   onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
//   imageSrc?: string;
//   styleSelect: string;
// }

// const SelectField: React.FC<SelectFieldProps> = ({
//   label,
//   options = [],
//   defaultValue,
//   onChange,
//   imageSrc,
//   styleSelect,
// }) => {
//   return (
//     <div className="w-full">
//       <label className="block text-sm text-gray-700 mb-1">{label}</label>
//       <div className="relative">
//         <select className={styleSelect} defaultValue="" onChange={onChange}>
//           {/* Placeholder shown first */}
//           <option value="" disabled hidden>
//             {defaultValue || "Select an option"}
//           </option>

//           {options.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>

//         {imageSrc && (
//           <img
//             src={imageSrc}
//             alt="Map"
//             className="w-[20px] h-[20px] absolute top-[13px] right-[15px]"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default SelectField;

import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  options?: Option[];
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  imageSrc?: string;
  styleSelect: string;
  register?: UseFormRegister<any>; // or replace `any` with your form type
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options = [],
  defaultValue,
  onChange,
  imageSrc,
  styleSelect,
  register,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          {...(register && register(name))}
          className={styleSelect}
          defaultValue=""
          onChange={onChange}
        >
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
            alt="icon"
            className="w-[20px] h-[20px] absolute top-[13px] right-[15px]"
          />
        )}
      </div>
    </div>
  );
};

export default SelectField;
