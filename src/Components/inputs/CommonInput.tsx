import React from 'react'
import { CommonInputsProps } from './types'
import searchIcon from "@assets/svgs/search-normal.svg"
import Edit from "@assets/svgs/edit.svg"


const CommonInput: React.FC<CommonInputsProps> = ({ showImg, type, inputClass, placeholder, showEdit }) => {
  return (
    <div className="relative w-full  " >
      {showImg && (
        <img
          src={searchIcon}
          alt="Search"
          className="absolute left-3 top-1/2 -translate-y-1/2 size-5"
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-xl bg-white placeholder:text-[12px] shadow_bg placeholder:text-[var(--text-muted)] py-[14px] outline-none ${showImg ? 'pl-10' : 'pl-3'} ${showEdit ? 'pl-10' : 'pl-3'} pr-3 ${inputClass}`}
      />
      {
        showEdit && (
          <img src={Edit} alt="" className='absolute right-3 top-1/2 -translate-y-1/2 size-4 cursor-pointer' />
        )
      }
    </div>
  )
}

export default CommonInput;   
