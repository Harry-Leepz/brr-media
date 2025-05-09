import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";

import TodoForm from "../components/TodoForm";

describe("TodoForm", () => {
  it("calls addTodo when Add is clicked", () => {
    const addTodo = vi.fn();
    const { getByText } = render(
      <TodoForm newTask='' setNewTask={() => {}} addTodo={addTodo} />
    );
    fireEvent.click(getByText(/Add/i));
    expect(addTodo).toHaveBeenCalled();
  });
});
