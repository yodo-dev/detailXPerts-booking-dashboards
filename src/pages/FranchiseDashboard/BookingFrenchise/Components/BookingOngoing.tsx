import { PrimaryButton } from "@components/Buttons/CommonButtons";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { customStyles } from "@components/CustomStylesTable";
import { useBookingApiFranchise } from "../../../../Hooks/useBookingFranchise";
import { ReactSVG } from "react-svg";
import LocationIcon from "@assets/svgs/location.svg";
import DummyImage from "@assets/images/user-dummy-img.jpg";
import { useMutation, useQueryClient } from "react-query";
import { BookingChangeStatus } from "../../../../Api/apiBookingsFranchise";
import SelectField from "@components/SelectField/SelectField";
import ArrowDown from "@assets/svgs/arrow-down.svg";
import { useDetailerFranchise } from "../../../../Hooks/useDetailerFranchise";

const BookingOngoing = () => {
  const [currentId, setCurrentId] = useState();
  const [currentStatus, setCurrentStatus] = useState();
  const [loadingId, setLoadingId] = useState(null);
  const [detailerId, setDetailerId] = useState();
  const { data: DetailerData } = useDetailerFranchise(1);

  const handleChange = (e) => {
    console.log("e", e.target.value);
  };

  const columns0 = [
    {
      name: "Customer",
      selector: (row) => row.franchise,
      minWidth: "230px",
      cell: (row) => (
        <div
          // onClick={() => setShowSubTask(true)}
          className="flex gap-2 w-[190px]"
        >
          <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
            <img
              src={
                row?.customer?.image
                  ? ` ${import.meta.env.VITE_APP_API_IMG_URL}${
                      row?.customer?.image
                    }`
                  : DummyImage
              }
              // alt={row.detailer.name}
              className="w-[100%] h-[100%] object-cover rounded-full"
            />
          </div>
          <div className="">
            <div className="text-sm cursor-pointer">
              {/* {row.franchise} */}
              Ben Ten
            </div>
            <div className="text-xs text-gray-400 flex gap-1 mt-1">
              <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272
              Westheimer...
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Service Details",
      minWidth: "200px",
      selector: (row) => row?.service,
      cell: (row) => <span>{row?.services[0]?.service?.name}</span>,
    },

    {
      name: "Vehicle Details",
      minWidth: "130px",
      selector: (row) => row.vehicle,
      cell: (row) => <span>{row?.vehicle?.model}</span>,
    },

    {
      name: "Service Date",
      minWidth: "115px",
      selector: (row) => row.date,
      cell: (row) => <span>04-05-2025</span>,
    },

    {
      name: "Price",
      minWidth: "80px",
      selector: (row) => row.service,
      cell: (row) => <span>$19.22</span>,
    },

    {
      name: "Status",
      selector: (row) => row.status,
      minWidth: "130px",

      cell: (row) => (
        <span
          className={`text-xs font-medium me-2 px-2.5 py-1 rounded-full ${
            row.status === "NEW"
              ? "bg-[#0676471A] text-[#067647] border border-[#067647] dark:bg-[#E7F2ED] dark:text-[#067647]" // Green for Completed
              : row.status === "PENDING"
              ? "bg-[#FFA5001A] text-[#FFAF3F] border border-[#FFAF3F] dark:bg-[#F9F5F0] dark:text-[#FFAF3F]" // Orange for In Progress
              : row.status === "Canceled"
              ? "bg-[#FEE4E2] text-[#F04438] border border-[#F04438] dark:bg-[#FEEDEC] dark:text-[#F04438]" // Red for Canceled
              : "bg-[#F1F3FB] text-gray-600"
          }`}
        >
          {row.status}
        </span>
      ),
    },

    {
      name: "Assigned Detailer",
      minWidth: "230px",
      selector: (row) => row.service,
      cell: (row) => (
        <span>
          <SelectField
            defaultValue="Select detailer"
            // options={dataArr}
            styleSelect="select-style !w-[196px] bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-3"
            imageSrc={ArrowDown}
            // options={[{label:DetailerData?.records.first_name,value:DetailerData?.records?.id}]}
            options={DetailerData?.records?.map((item) => ({
              label: item.first_name,
              value: item.id,
            }))}
            onChange={handleChange}
          />
        </span>
      ),
    },

    {
      name: "Action",
      minWidth: "230px",
      selector: (row) => row.action,
      cell: (row) => (
        <span className="flex gap-[10px]">
          <div>
            <PrimaryButton
              btnText="Assign"
              btnClass="bg-[#003CA6] text-white text-[16px] !w-[88px] py-[8px] "
              onClick={() => {
                setCurrentStatus("ACCEPTED");
                setCurrentId(row?.id);
              }}
              // isLoading={row?.id === loadingId}
              isLoading={row?.id === loadingId && currentStatus == "ACCEPTED"}
            />
          </div>
        </span>
      ),
    },
  ];

  const queryClient = useQueryClient();

  const { data } = useBookingApiFranchise("ACCEPTED");

  // const {data:DetailersData} = useDetailerFranchise(1)
  // console.log("asdasdasdasdasdasd",DetailersData?.records)
  // console.log("oppoppo00000----",DetailersData)
  const updateMutation = useMutation({
    mutationFn: ({ currentId, formData }) =>
      BookingChangeStatus(currentId, formData),

    onMutate: () => setLoadingId(currentId),
    onSuccess: async () => {
      queryClient.invalidateQueries(["getBookings"]); // refetch list
      setLoadingId(null);
      console.log("User deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
    },
  });

  // console.log("sssssaaaa",currentStatus)
  const handleUpdateStatus = () => {
    const formData = new FormData();
    if (currentStatus == "DECLINE") {
      formData.append("status", "REJECTED");
    } else {
      formData.append("status", "ACCEPTED");
    }
    updateMutation.mutate({ currentId, formData });
  };

  useEffect(() => {
    if (currentStatus) {
      handleUpdateStatus();
    }
  }, [currentStatus, currentId]);
  return (
    <>
      <DataTable
        columns={columns0}
        customStyles={customStyles}
        data={data}
        // progressPending={loading}
        // progressComponent={customLoader}
      />
    </>
  );
};

export default BookingOngoing;
