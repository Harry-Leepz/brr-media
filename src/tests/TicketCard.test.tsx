import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

import TicketCard from "../components/TicketCard";

describe("TicketCard", () => {
  it("displays ticket info", () => {
    const mockTicket = {
      id: 1,
      issueType: "Network",
      status: "Open",
      createdDate: new Date().toISOString(),
      description: "Cannot connect to VPN",
    };
    const { getByText } = render(<TicketCard ticket={mockTicket} />);
    expect(getByText(/Network/i)).toBeInTheDocument();
    expect(getByText(/Cannot connect to VPN/i)).toBeInTheDocument();
  });
});
