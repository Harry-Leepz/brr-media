import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";

import TodoItem from "../components/TodoItem";

const mockTodo = {
  id: 1,
  task: "Test task",
  completed: false,
};

describe("TodoItem", () => {
  it("renders todo and toggles complete", () => {
    const toggleComplete = vi.fn();
    const { getByRole } = render(
      <TodoItem
        todo={mockTodo}
        editingId={null}
        editingText=''
        toggleComplete={toggleComplete}
        startEditing={() => {}}
        setEditingText={() => {}}
        saveEdit={() => {}}
        deleteTodo={() => {}}
      />
    );
    fireEvent.click(getByRole("checkbox"));
    expect(toggleComplete).toHaveBeenCalled();
  });
});
