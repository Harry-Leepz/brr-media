import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

import StaffCard from "../components/StaffCard";

const mockStaff = {
  id: 1,
  name: "Alice Smith",
  role: "Developer",
  email: "alice@brr.com",
  status: "active",
  lastLogin: new Date().toISOString(),
  driveUsageGB: 25,
  deviceType: "MacBook Pro",
};

describe("StaffCard", () => {
  it("displays staff details", () => {
    const { getByText } = render(<StaffCard staff={mockStaff} />);
    expect(getByText(/Alice Smith/i)).toBeInTheDocument();
    expect(getByText(/Developer/i)).toBeInTheDocument();
  });
});
