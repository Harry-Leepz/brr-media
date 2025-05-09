import { useEffect, useState } from "react";

import DashboardCard from "../components/DashboardCard";

import staffData from "../data/staff.json";
import ticketData from "../data/tickets.json";
import todoData from "../data/todos.json";

export default function Dashboard() {
  const [staffCount, setStaffCount] = useState(0);
  const [openTickets, setOpenTickets] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStaffCount(staffData.length);
      setOpenTickets(ticketData.filter((t) => t.status === "Open").length);
      setPendingTasks(todoData.filter((t) => !t.completed).length);
    }, 500);
  }, []);

  return (
    <div className='bg-white p-6 rounded shadow'>
      <h1 className='text-2xl font-bold mb-2'>
        Welcome to the BRR Media Dashboard
      </h1>
      <p className='text-gray-700'>
        Here you can access your IT tickets, manage tasks, and stay up-to-date
        with your team. Use the navigation menu above to get started.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <DashboardCard title='Team Members' value={staffCount} />
        <DashboardCard title='Open Tickets' value={openTickets} />
        <DashboardCard title='Pending Tasks' value={pendingTasks} />
      </div>
    </div>
  );
}
