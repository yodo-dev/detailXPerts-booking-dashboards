import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function Legal() {
    const [emailTemplate, setEmailTemplate] = useState(true);
    const [smsNotification, setSmsNotification] = useState(true);
    const [setReminder, setSetReminder] = useState(true);
    const [adminAlert, setAdminAlert] = useState(true);
  return (
    <div className="p-4 border rounded-[15px] border-[#afacac56] space-y-6 max-w-full">
    <div>
    <h2 className="!font-semibold !text-[16px] mb-4 !text-[#252525]"> Legal</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
        <span className='text-[#546E7F] text-[14px]'>Email Templates (editable)</span>
        <ReactSwitch checked={emailTemplate} onChange={setEmailTemplate} checkedIcon={false} uncheckedIcon={false} />
      </div>
      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
        <span className='text-[#546E7F] text-[14px]'>SMS/Push Notifications Toggle</span>
        <ReactSwitch checked={smsNotification} onChange={setSmsNotification} checkedIcon={false} uncheckedIcon={false} />
      </div>
      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
        <span className='text-[#546E7F] text-[14px]'>Set Reminder Timings (e.g., 2 hrs before service)</span>
        <ReactSwitch checked={setReminder} onChange={setSetReminder} checkedIcon={false} uncheckedIcon={false} />
      </div>
      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
        <span className='text-[#546E7F] text-[14px]'>Admin Alert Email for Failed Bookings / Errors</span>
        <ReactSwitch checked={adminAlert} onChange={setAdminAlert} checkedIcon={false} uncheckedIcon={false} />
      </div>
    </div>
  </div>
    </div>
  )
}

export default Legal;