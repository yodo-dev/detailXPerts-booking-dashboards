import React from "react";

const DashboardLoader = () => {
  return (
    <div className="p-2 animate-pulse space-y-6">
      {/* Top Welcome Message */}
      <div className="h-[100px] w-full bg-gray-200  rounded p-2">
        <div className="grid grid-cols-1 h-full md:grid-cols-10 gap-2">
          {[1].map((_, index) => (
            <>
              <div
                key={index}
                className="col-span-6 mt-7 h-[28px] bg-white rounded shadow-md w-full"
              ></div>
              <div className="col-span-4 flex justify-end gap-4 items-center pe-[20px]">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="h-24 bg-white rounded-full h-[45px] w-[45px] rounded-full shadow-md"
                  ></div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>

      {/* Summary Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {[1].map((_, index) => (
          <div
            key={index}
            className="col-span-3 h-24 bg-gray-200 rounded shadow-md"
          >
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <div
                  key={index}
                  className="h-6 w-[40%] bg-white mt-5 ms-3 shadow-md"
                ></div>
                <div
                  key={index}
                  className="h-4 w-[40%] bg-white mt-5 ms-3 shadow-md"
                ></div>
              </div>
              <div className="col-span-2 flex justify-end ">
                <div
                  key={index}
                  className="h-[52px] me-3 w-[40%] bg-white mt-5 ms-3 shadow-md"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Booking Table */}
        <div className="lg:col-span-3 space-y-3">
          <div className="h-6 w-1/4 bg-gray-200 rounded" />
          <div className="grid grid-cols-4 space-y-2 flex w-full">
            {[...Array(4)].map((_, i) => (
              <div key={i} className=" p-4 bg-gray-100 rounded">
                <div className="w-[326px] h-[173px] p-[20px] bg-gray-300 rounded">
                  <div className="w-[44px] h-[44px] bg-white rounded mb-[20px]"></div>
                  <div className="w-[150px] h-[14px] bg-white rounded mb-[10px]"></div>
                  <div className="w-[100px] h-[14px] bg-white rounded mb-[10px]"></div>
                  <div className="w-[150px] h-[14px] bg-white rounded mb-[10px]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking & Reviews Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Booking Table */}
        <div className="lg:col-span-2 space-y-3">
          <div className="h-6 w-1/4 bg-gray-200 rounded" />
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-4 bg-gray-100 rounded"
              >
                <div className="w-1/4 h-4 bg-gray-300 rounded" />
                <div className="w-1/4 h-4 bg-gray-300 rounded" />
                <div className="w-1/6 h-4 bg-gray-300 rounded" />
                <div className="w-1/6 h-4 bg-gray-300 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Table */}
        <div className="space-y-3">
          <div className="h-6 w-1/4 bg-gray-200 rounded" />
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-4 bg-gray-100 rounded"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full" />
                  <div className="w-20 h-4 bg-gray-300 rounded" />
                </div>
                <div className="w-16 h-4 bg-gray-300 rounded" />
                <div className="w-8 h-4 bg-gray-300 rounded" />
                <div className="w-6 h-4 bg-gray-300 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLoader;
