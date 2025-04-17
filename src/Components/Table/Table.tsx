import React from "react";
import { ReactSVG } from "react-svg";
import Chevron from "../../assets/svgs/chevron.svg";

interface TableProps {
  // define your props here
}

const Table: React.FC = ({
  franchise,
  detailer,
  customer,
  dateTab,
  serviceTh,
  earningTh,
}: string) => {
  const rows = [
    {
      id: "001",
      franchise: "Vaclucia Motors",
      detailer: {
        name: "Ahmad Septiwan",
        avatar: "https://i.pravatar.cc/40?img=1",
      },
      customer: "Kaiya Botar",
      date: "04-05-2025",
      service: "Car Wash",
      vehicle: "Phoenix",
      earning: "$0.00",
      status: "Completed",
    },
    {
      id: "002",
      franchise: "DreamDrive Automobiles",
      detailer: {
        name: "Erin Vetrov",
        avatar: "https://i.pravatar.cc/40?img=2",
      },
      customer: "Alfredo Soris",
      date: "04-05-2025",
      service: "Detailing",
      vehicle: "Cobra",
      earning: "$0.00",
      status: "In Progress",
    },
    {
      id: "003",
      franchise: "Healthride Vehicles",
      detailer: {
        name: "Giancu Batrom Bachman",
        avatar: "https://i.pravatar.cc/40?img=3",
      },
      customer: "Lincoln Gusae",
      date: "04-05-2025",
      service: "Detailing",
      vehicle: "Raptor",
      earning: "$0.00",
      status: "In Progress",
    },
    {
      id: "004",
      franchise: "Biwered Motors",
      detailer: {
        name: "Alfredo Rihidl Madsson",
        avatar: "https://i.pravatar.cc/40?img=4",
      },
      customer: "Aspen Schieffer",
      date: "04-05-2025",
      service: "Detailing",
      vehicle: "Vortex",
      earning: "$20.00",
      status: "Completed",
    },
    {
      id: "005",
      franchise: "Fantasy Auto Group",
      detailer: {
        name: "Tachiona Curtis",
        avatar: "https://i.pravatar.cc/40?img=5",
      },
      customer: "Alfredo Philips",
      date: "04-05-2025",
      service: "Detailing",
      vehicle: "Stingray",
      earning: "$0.00",
      status: "Canceled",
    },
  ];

  return (
    <div className="p-4 overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full  text-sm text-left border-separate border-spacing-y-2">
        <thead className="bg-[#F1F3FB] uppercase text-xs ">
          <tr>
            <th className="px-3 py-4 font-normal">
              {" "}
              <span className="flex">ID</span>{" "}
            </th>
            {franchise ? (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  Franchise <ReactSVG src={Chevron} />
                </span>{" "}
              </th>
            ) : (
              ""
            )}
            {detailer ? (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  Detailer <ReactSVG src={Chevron} />{" "}
                </span>
              </th>
            ) : (
              ""
            )}

            {customer ? (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  Customer <ReactSVG src={Chevron} />
                </span>
              </th>
            ) : (
              ""
            )}

            {dateTab ? (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  Date <ReactSVG src={Chevron} />
                </span>
              </th>
            ) : (
              ""
            )}

            {serviceTh ? (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  Service <ReactSVG src={Chevron} />
                </span>
              </th>
            ) : (
              ""
            )}
            <th className="px-3 py-4 font-normal">
              <span className="flex gap-3">
                Vehicle <ReactSVG src={Chevron} />
              </span>
            </th>

            {earningTh ? (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  Earning <ReactSVG src={Chevron} />
                </span>
              </th>
            ) : (
              ""
            )}
            <th className="px-3 py-4 font-normal">
              <span className="flex gap-3">
                Status <ReactSVG src={Chevron} />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="bg-gray-50 rounded-md shadow-sm">
              <td className="px-3 py-2 font-semibold text-gray-700">
                {row.id}
              </td>

              {franchise ? (
                <td className="px-3 py-2 text-gray-700">
                  <div className="flex gap-2">
                    <img
                      src={row.detailer.avatar}
                      alt={row.detailer.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="text-sm">{row.franchise}</div>
                      <div className="text-xs text-gray-400">
                        📍 9272 Westheimer...
                      </div>
                    </div>
                  </div>
                </td>
              ) : (
                ""
              )}

              {detailer ? (
                <td className="px-3 py-2">
                  <div className="flex gap-2">
                    <img
                      src={row.detailer.avatar}
                      alt={row.detailer.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="text-sm">{row.franchise}</div>
                      <div className="text-xs text-gray-400">
                        📍 9272 Westheimer...
                      </div>
                    </div>
                  </div>
                </td>
              ) : (
                ""
              )}
              {customer ? (
                <td className="px-3 py-2">
                  <div className="flex gap-2">
                    <img
                      src={row.detailer.avatar}
                      alt={row.detailer.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="text-sm">{row.franchise}</div>
                      <div className="text-xs text-gray-400">
                        📍 9272 Westheimer...
                      </div>
                    </div>
                  </div>
                </td>
              ) : (
                ""
              )}

              {dateTab ? <td className="px-3 py-2">{row.service}</td> : ""}

              {serviceTh ? <td className="px-3 py-2">{row.vehicle}</td> : ""}
              {earningTh ? <td className="px-3 py-2">{row.earning}</td> : ""}
              <td className="px-3 py-2">
                <span className="bg-[#0676471A] text-green-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-green-900 dark:text-green-300">
                  Completed
                </span>
              </td>
              <td className="px-3 py-2">{row.earning}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {/* <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <p>Showing 1 to 10 of 200 entries</p>
        <div className="space-x-2">
          <button className="px-3 py-1 border rounded-md">Prev</button>
          <button className="px-3 py-1 border bg-blue-500 text-white rounded-md">
            1
          </button>
          <button className="px-3 py-1 border rounded-md">2</button>
          <button className="px-3 py-1 border rounded-md">3</button>
          <button className="px-3 py-1 border rounded-md">4</button>
          <button className="px-3 py-1 border rounded-md">Next</button>
        </div>
      </div> */}
    </div>
  );
};

export default Table;
