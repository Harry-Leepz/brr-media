import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("renders navigation links", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(getByText(/Dashboard/i)).toBeInTheDocument();
    expect(getByText(/Staff Directory/i)).toBeInTheDocument();
  });
});
