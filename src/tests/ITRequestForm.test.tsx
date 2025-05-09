import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

import ITRequestForm from "../components/ITRequestForm";

describe("ITRequestForm", () => {
  it("renders form and submits data", () => {
    render(<ITRequestForm />);
    fireEvent.change(screen.getByLabelText(/Issue Type/i), {
      target: { value: "Hardware" },
    });
    fireEvent.change(screen.getByLabelText(/Description/i), {
      target: { value: "My mouse is broken" },
    });
    fireEvent.click(screen.getByText(/Submit Request/i));
    expect(screen.getByText(/Submit Request/i)).toBeInTheDocument();
  });
});
