import { useEffect, useState } from "react";

import TicketCard from "../components/TicketCard";
import ticketData from "../data/tickets.json";

import type { Ticket } from "../types";

export default function Tickets() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTickets(ticketData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (tickets.length === 0) {
    return <div>No tickets found.</div>;
  }

  return (
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}
