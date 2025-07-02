import React from "react";

const ServicesLoader = () => {
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

      <div className="h-8 w-50 ms-5 bg-gray-300 mt-20 rounded mb-2"></div>
      <div className="flex justify-around flex-wrap gap-6 ">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-[500px] mt-20 h-[500px] bg-gray-100 rounded-xl p-4 animate-pulse flex flex-col justify-between"
          >
            <div>
              <div className="h-5 w-3/4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded mb-6"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <div className="h-4 w-12 bg-gray-300 rounded"></div>
              <div className="h-6 w-10 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesLoader;
