import React from "react";
import ReactSwitch from "react-switch";

interface Permission {
  label: string;
  key: string;
}

interface PermissionsProps {
  permissions: Record<string, boolean>;
  onToggle: (key: string) => void;
  permissionList?: Permission[];
}

const Permissions: React.FC<PermissionsProps> = ({
  permissions,
  onToggle,
  permissionList = [
    { label: "View customer profiles", key: "viewProfiles" },
    { label: "View and manage bookings", key: "manageBookings" },
    { label: "Cancel or reschedule bookings", key: "cancelBookings" },
    { label: "Respond to feedback and complaints", key: "respondFeedback" },
  ],
}) => {
  return (
    <div>
      <h3 className="font-medium text-lg mb-4">Permissions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px] text-[#546E7F]">
        {permissionList.map((permission) => (
          <div
            key={permission?.key}
            className="bg-[#F7F8FC] px-[15px] py-[20px] rounded-xl flex justify-between items-center"
          >
            <span className="text-sm font-medium">{permission?.label}</span>
            <ReactSwitch
              onChange={() => onToggle(permission?.key)}
              checked={permissions[permission?.key]}
              offColor="#ccc"
              onColor="#34D399"
              checkedIcon={false}
              uncheckedIcon={false}
              height={20}
              width={40}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Permissions;
