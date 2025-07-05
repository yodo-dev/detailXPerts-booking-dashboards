import React from "react";
// import { usePaymentInputs } from "react-payment-inputs";
// import arrowRight from "@assets/svgs/dashboard-svgs/arrow-right.svg";
// import Loader from "@/Components/Loader/Loader";
// import FormInput from "@/Components/Inputs/FormInput";
import FormInput from "../../../Admin/Login/Components/CommonInput";


interface CheckOutProps {
  onSubmit: () => void;
  isLoading: boolean;
}

export default function CheckOut({ onSubmit, isLoading }: CheckOutProps) {
//   const {
//     getCardNumberProps,
//     getExpiryDateProps,
//     getCVCProps,
//     getCardImageProps,
//     meta,
//     wrapperProps,
//   } = usePaymentInputs();

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <FormInput
          type="text"
          name="name"
          label="Card Holder Name"
          placeholder="Name of card holder"
        />

        <FormInput
          name="Card Number"
          label="Card Number"
          placeholder="eg 123"
        //   {...getCardNumberProps({ onBlur: () => {} })}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <FormInput
          name="name"
          label="CVV"
          placeholder="eg 123"
        //   {...getCVCProps()}
        />

        <div className="flex flex-col space-y-1">
          <label
            className={`text-[16px] font-semibold  text-[var(--secondary-text-color)] `}
          >
            Card Expiry
          </label>

          <input
            // {...getExpiryDateProps()}
            placeholder="MM/YY"
            className="w-full px-[10px] py-4 border-[1.5px] border-[var(--inputs-border)] rounded-[12px] outline-none mb-[10px] transition-colors duration-300 ease-in-out focus:border-black/50"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4"></div>

      {/* {meta.error && <div className="text-red-500 mb-4">{meta.error}</div>} */}

      <button
        disabled={isLoading}
        onClick={onSubmit}
        className="bg-[var(--primary-color)] rounded-lg px-[23px] py-3 cursor-pointer flex items-center justify-center gap-1 min-w-[180px]"
      >
        <span className="text-white text-[16px] font-semibold">
          {isLoading ? "Processing ..." : "Pay & Go to Next Step"}
        </span>
        {/* {isLoading ? <Loader /> : <img src={arrowRight} alt="Next" />} */}
      </button>
    </div>
  );
}
