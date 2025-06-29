import React from 'react';
import './CustomCheckbox.css';

export function CustomCheckbox({ label, checked, onChange, id = 'custom-checkbox' }) {
  return (
 <div className="checkbox-wrapper-33">
  <label className="checkbox">
    <input onChange={onChange}  className="checkbox__trigger visuallyhidden !rounded-4xl" type="checkbox" />
    <span className="checkbox__symbol">
      <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14l8 7L24 7"></path>
      </svg>
    </span>
  </label>
</div>
  );
}
