import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

import DashboardCard from "../components/DashboardCard";

describe("DashboardCard", () => {
  it("renders the title and value", () => {
    render(<DashboardCard title='Open Tickets' value={5} />);

    // Expect title to be in the document
    expect(screen.getByText(/open tickets/i)).toBeInTheDocument();

    // Expect value to be in the document
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
