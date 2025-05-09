import { useEffect, useState } from "react";

import DashboardCard from "../components/DashboardCard";

import staffData from "../data/staff.json";
import ticketData from "../data/tickets.json";
import todoData from "../data/todos.json";

export default function Dashboard() {
  const [staffCount, setStaffCount] = useState(0);
  const [openTickets, setOpenTickets] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [recentTickets, setRecentTickets] = useState<typeof ticketData>([]);
  const [recentTodos, setRecentTodos] = useState<typeof todoData>([]);

  useEffect(() => {
    setTimeout(() => {
      setStaffCount(staffData.length);
      setOpenTickets(ticketData.filter((t) => t.status === "Open").length);
      setPendingTasks(todoData.filter((t) => !t.completed).length);
      setRecentTickets(ticketData.slice(-3).reverse());
      setRecentTodos(
        todoData
          .filter((t) => !t.completed)
          .slice(-3)
          .reverse()
      );
    }, 500);
  }, []);

  return (
    <div className='space-y-6'>
      <div className='bg-white p-6 rounded shadow'>
        <h1 className='text-2xl font-bold mb-2'>
          Welcome to the BRR Media Dashboard
        </h1>
        <p className='text-gray-700'>
          Here you can access your IT tickets, manage tasks, and stay up-to-date
          with your team. Use the navigation menu above to get started.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <DashboardCard title='Team Members' value={staffCount} />
        <DashboardCard title='Open Tickets' value={openTickets} />
        <DashboardCard title='Pending Tasks' value={pendingTasks} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-white p-4 rounded shadow'>
          <h2 className='text-lg font-semibold mb-3'>Recent Tickets</h2>
          <ul className='text-sm text-gray-700 space-y-2'>
            {recentTickets.map((ticket) => (
              <li key={ticket.id} className='border-b pb-1'>
                <span className='font-medium'>{ticket.issueType}:</span>{" "}
                {ticket.description}
              </li>
            ))}
          </ul>
        </div>

        <div className='bg-white p-4 rounded shadow'>
          <h2 className='text-lg font-semibold mb-3'>Pending Tasks</h2>
          <ul className='text-sm text-gray-700 space-y-2'>
            {recentTodos.map((todo) => (
              <li key={todo.id} className='border-b pb-1'>
                {todo.task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
