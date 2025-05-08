import type { Ticket } from "../types";

type TicketCardProps = {
  ticket: Ticket;
};

export default function TicketCard({ ticket }: TicketCardProps) {
  const statusStyles: Record<string, string> = {
    Open: "bg-yellow-100 text-yellow-800",
    "In Progress": "bg-blue-100 text-blue-800",
    Resolved: "bg-green-100 text-green-800",
  };
  return (
    <div className='bg-white rounded-lg shadow p-4 max-w-sm w-full hover:shadow-md transition'>
      <h3 className='text-lg font-semibold mb-1'>{ticket.issueType}</h3>
      <p className='text-sm text-gray-600 mb-1'>{ticket.description}</p>
      <p className='text-sm text-gray-500 mb-1'>
        📅 Created: {new Date(ticket.createdDate).toLocaleDateString()}
      </p>
      <span
        className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full ${
          statusStyles[ticket.status] || "bg-gray-200 text-gray-700"
        }`}
      >
        {ticket.status}
      </span>
    </div>
  );
}
