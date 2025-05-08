import { useState, useEffect } from "react";

import StaffCard from "../components/StaffCard";
import staffData from "../data/staff.json";
import type { Staff } from "../types";

export default function StaffDirectory() {
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setStaffList(
          staffData.map((staff) => ({
            ...staff,
            status:
              staff.status === "active" || staff.status === "inactive"
                ? staff.status
                : "inactive",
          }))
        );
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (staffList.length === 0) {
    return <div>No staff members found.</div>;
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {staffList.map((staff) => (
        <StaffCard key={staff.id} staff={staff} />
      ))}
    </div>
  );
}
