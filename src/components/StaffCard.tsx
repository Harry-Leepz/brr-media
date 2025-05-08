import type { Staff } from "../types";

type StaffCardProps = {
  staff: Staff;
};

export default function StaffCard({ staff }: StaffCardProps) {
  return (
    <div className='bg-white rounded-xl shadow-md p-4 w-full max-w-sm hover:shadow-lg transition'>
      <h2 className='text-xl font-semibold mb-1'>{staff.name}</h2>
      <p className='text-gray-600 text-sm'>{staff.role}</p>
      <p className='text-sm text-gray-500'>📧 {staff.email}</p>
      <p className='text-sm text-gray-500'>🖥 {staff.deviceType}</p>
      <p className='text-sm text-gray-500'>💾 {staff.driveUsageGB} GB used</p>
      <p className='text-sm text-gray-500'>
        🔒 Last login: {new Date(staff.lastLogin).toLocaleDateString()}
      </p>
      <span
        className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full ${
          staff.status === "active"
            ? "bg-green-100 text-green-800"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        {staff.status}
      </span>
    </div>
  );
}
