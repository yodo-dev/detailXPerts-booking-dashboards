import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function Booking() {
      const [uploadLogo, setUploadLogo] = useState(true);
      const [colorScheme, setColorScheme] = useState(true);
      const [emailSignature, setEmailSignature] = useState(true);
      const [customApp, setCustomApp] = useState(false);
    
  return (
    <div className="p-4 border rounded-[15px] border-[#afacac56] space-y-6 max-w-full">
    <div>
    <h2 className="!font-semibold !text-[16px] mb-4 !text-[#252525]"> Branding Settings (White Label Support)</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
        <span className='text-[#546E7F] text-[14px]'>Upload Logo (light/dark versions)</span>
        <ReactSwitch checked={uploadLogo} onChange={setUploadLogo} checkedIcon={false} uncheckedIcon={false} />
      </div>
      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
        <span className='text-[#546E7F] text-[14px]'>App Color Scheme (primary, secondary)</span>
        <ReactSwitch checked={colorScheme} onChange={setColorScheme} checkedIcon={false} uncheckedIcon={false} />
      </div>
      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
        <span className='text-[#546E7F] text-[14px]'>Email Signature / Footer</span>
        <ReactSwitch checked={emailSignature} onChange={setEmailSignature} checkedIcon={false} uncheckedIcon={false} />
      </div>
      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
        <span className='text-[#546E7F] text-[14px]'>Custom App Title / Meta Description</span>
        <ReactSwitch checked={customApp} onChange={setCustomApp} checkedIcon={false} uncheckedIcon={false} />
      </div>
    </div>
  </div>
    </div>
  )
}

export default Booking;