import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function Payment() {
      const [stripeApi, setStripeApi] = useState(true);
      const [maxBooking, setMaxBooking] = useState(true);
      const [maxAdvance, setMaxAdvance] = useState(true);
      const [cancelationPolicy, setCancelationPolicy] = useState(false);
      const [toggleInstant, setToggleInstant] = useState(false);

    
  return (
    <div className="p-4 border rounded-[15px] border-[#afacac56] space-y-6 max-w-full">
    <div>
    <h2 className="!font-semibold !text-[16px] mb-4 !text-[#252525]"> Payment & Finance</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
        <span className='text-[#546E7F] text-[14px]'>Stripe API Keys</span>
        <ReactSwitch checked={stripeApi} onChange={setStripeApi} checkedIcon={false} uncheckedIcon={false} />
      </div>
      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
        <span className='text-[#546E7F] text-[14px]'>Max Bookings per Technician per Day</span>
        <ReactSwitch checked={maxBooking} onChange={setMaxBooking} checkedIcon={false} uncheckedIcon={false} />
      </div>
      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
        <span className='text-[#546E7F] text-[14px]'>Minimum Advance Notice for Booking (e.g., 2 hrs)</span>
        <ReactSwitch checked={maxAdvance} onChange={setMaxAdvance} checkedIcon={false} uncheckedIcon={false} />
      </div>
      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
        <span className='text-[#546E7F] text-[14px]'>Cancellation Policy Text / Toggle Refund Logic</span>
        <ReactSwitch checked={cancelationPolicy} onChange={setCancelationPolicy} checkedIcon={false} uncheckedIcon={false} />
      </div>
      <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
        <span className='text-[#546E7F] text-[14px]'>Toggle Instant Booking (ON/OFF)</span>
        <ReactSwitch checked={toggleInstant} onChange={setToggleInstant} checkedIcon={false} uncheckedIcon={false} />
      </div>
    </div>
  </div>
    </div>
  )
}

export default Payment;