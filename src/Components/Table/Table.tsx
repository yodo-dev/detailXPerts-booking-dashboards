import React from "react";
import { ReactSVG } from "react-svg";
import Chevron from "../../assets/svgs/chevron.svg";

interface TableProps {
  franchise?: boolean;
  detailer?: boolean;
  customer?: boolean;
  dateTab?: boolean;
  serviceTh?: boolean;
  vehicleTh?: boolean;
  earningTh?: boolean;
  statusTh?: boolean;
  locationTh?: boolean;
  numberDetailsTh?: boolean;
  joinedTh?: boolean;
  jobCompleteTh?: boolean;
  bookingth?: boolean;
  lastBookingth?: boolean;
  spendingth?: boolean;
  amountth?: boolean;
  payMethodth?: boolean;
  invoicethv?: boolean;
  user?: boolean;
  category?: boolean;
  issue?: boolean;
  incident?: boolean;
  suggestions?: boolean;
}

const Table: React.FC = ({
  franchise,
  detailer,
  customer,
  dateTab,
  serviceTh,
  vehicleTh,
  earningTh,
  statusTh,
  locationTh,
  numberDetailsTh,
  joinedTh,
  jobCompleteTh,
  bookingth,
  lastBookingth,
  spendingth,
  amountth,
  payMethodth,
  invoicethv,
  user,
  category,
  issue,
  incident,
  appHelpfull,
  suggestions,
  recommendapp,
  howHelpfullApp,
  rate,
  userSuggestion,
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
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      numberDetails: 20,
      joined: "10-01-2025",
      jobComplete: 10,
      booking: 20,
      lastBooking: "10-june-2025",
      spending: "$0.00",
      amount: "$0.00",
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
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      numberDetails: 20,
      joined: "10-01-2025",
      jobComplete: 10,
      booking: 20,
      lastBooking: "10-june-2025",
      spending: "$0.00",
      amount: "$0.00",
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
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      numberDetails: 20,
      joined: "10-01-2025",
      jobComplete: 10,
      booking: 20,
      lastBooking: "10-june-2025",
      spending: "$0.00",
      amount: "$0.00",
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
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      numberDetails: 20,
      joined: "10-01-2025",
      jobComplete: 10,
      booking: 20,
      lastBooking: "10-june-2025",
      spending: "$0.00",
      amount: "$0.00",
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
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      numberDetails: 20,
      joined: "10-01-2025",
      jobComplete: 10,
      booking: 20,
      lastBooking: "10-june-2025",
      spending: "$0.00",
      amount: "$0.00",
    },
  ];

  return (
    <div className="p-4 overflow-x-auto bg-white ">
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

            {vehicleTh ? (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  Vehicle <ReactSVG src={Chevron} />
                </span>
              </th>
            ) : (
              ""
            )}

            {earningTh ? (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  Earning <ReactSVG src={Chevron} />
                </span>
              </th>
            ) : (
              ""
            )}
            {statusTh ? (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  Status <ReactSVG src={Chevron} />
                </span>
              </th>
            ) : (
              ""
            )}

            {/* <th className="px-3 py-4 font-normal">
              <span className="flex gap-3">
                Status <ReactSVG src={Chevron} />
              </span>
            </th> */}

            {joinedTh && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  Joined Data <ReactSVG src={Chevron} />
                </span>
              </th>
            )}

            {jobCompleteTh && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  Job Completed <ReactSVG src={Chevron} />
                </span>
              </th>
            )}

            {numberDetailsTh && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  number of Detailers <ReactSVG src={Chevron} />
                </span>
              </th>
            )}

            {locationTh && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  location <ReactSVG src={Chevron} />
                </span>
              </th>
            )}

            {bookingth && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  booking <ReactSVG src={Chevron} />
                </span>
              </th>
            )}
            {lastBookingth && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  last Booking <ReactSVG src={Chevron} />
                </span>
              </th>
            )}

            {spendingth && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  spending <ReactSVG src={Chevron} />
                </span>
              </th>
            )}
            {amountth && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  amount <ReactSVG src={Chevron} />
                </span>
              </th>
            )}

            {payMethodth && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  Payment method <ReactSVG src={Chevron} />
                </span>
              </th>
            )}

            {invoicethv && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  invoice data <ReactSVG src={Chevron} />
                </span>
              </th>
            )}

            {user && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  user <ReactSVG src={Chevron} />
                </span>
              </th>
            )}

            {category && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  category <ReactSVG src={Chevron} />
                </span>
              </th>
            )}

            {issue && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  issue <ReactSVG src={Chevron} />
                </span>
              </th>
            )}

            {incident && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                  incident <ReactSVG src={Chevron} />
                </span>
              </th>
            )}

            {appHelpfull && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                Is this app helpful for you?
                  <ReactSVG src={Chevron} />
                </span>
              </th>
            )}
            {recommendapp && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                Will you recommend this ap to your friends? <ReactSVG src={Chevron} />
                </span>
              </th>
            )}
            {howHelpfullApp && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                How helpful this app for you? <ReactSVG src={Chevron} />
                </span>
              </th>
            )}
            {rate && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                How helpful this app for you? <ReactSVG src={Chevron} />
                </span>
              </th>
            )}
            {userSuggestion && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                Users Suggestion <ReactSVG src={Chevron} />
                </span>
              </th>
            )}
            {suggestions && (
              <th className="px-3 py-4 font-normal">
                <span className="flex gap-3">
                Suggestion <ReactSVG src={Chevron} />
                </span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="bg-gray-50 rounded-md shadow-sm">
              <td className="px-3 py-2 font-semibold text-gray-700">
                {row.id}
              </td>

              {franchise && (
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
              )}

              {detailer && (
                <td className="px-3 py-2">
                  <div className="flex gap-2">
                    <img
                      src={row.detailer.avatar}
                      alt={row.detailer.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="text-sm">{row.detailer.name}</div>
                    </div>
                  </div>
                </td>
              )}

              {customer && (
                <td className="px-3 py-2">
                  <div className="flex gap-2">
                    <div className="text-sm">{row.customer}</div>
                  </div>
                </td>
              )}

              {dateTab && <td className="px-3 py-2">{row.date}</td>}

              {serviceTh && <td className="px-3 py-2">{row.service}</td>}

              {vehicleTh && <td className="px-3 py-2">{row.vehicle}</td>}

              {earningTh && <td className="px-3 py-2">{row.earning}</td>}

              {joinedTh && <td className="px-3 py-2">{row.joined}</td>}

              {bookingth && <td className="px-3 py-2">{row.booking}</td>}

              {payMethodth && <td className="px-3 py-2">{row.payMethod}</td>}

              {invoicethv && <td className="px-3 py-2">{row.invoice}</td>}

              {suggestions && <td className="px-3 py-2">{row.suggestions}</td>}

              {lastBookingth && (
                <td className="px-3 py-2">{row.lastBooking}</td>
              )}

              {spendingth && <td className="px-3 py-2">{row.spending}</td>}

              {amountth && <td className="px-3 py-2">{row.amount}</td>}

              {jobCompleteTh && (
                <td className="px-3 py-2">{row.jobComplete}</td>
              )}

              {numberDetailsTh && (
                <td className="px-3 py-2">{row.numberDetails}</td>
              )}

              {locationTh && <td className="px-3 py-2">{row.location}</td>}

              {statusTh && (
                <td className="px-3 py-2">
                  <span
                    className={`text-xs font-extrabold me-2 px-2.5 py-1 rounded-full ${
                      row.status === "Completed"
                        ? "bg-[#0676471A] text-[#067647] border border-[#067647] dark:bg-[#E7F2ED] dark:text-[#067647]" // Green for Completed
                        : row.status === "In Progress"
                        ? "bg-[#FFA5001A] text-[#FFAF3F] border border-[#FFAF3F] dark:bg-[#F9F5F0] dark:text-[#FFAF3F]" // Orange for In Progress
                        : row.status === "Canceled"
                        ? "bg-[#FEE4E2] text-[#F04438] border border-[#F04438] dark:bg-[#FEEDEC] dark:text-[#F04438]" // Red for Canceled
                        : "bg-[#F1F3FB] text-gray-600" // Default color for other statuses
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              )}
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
