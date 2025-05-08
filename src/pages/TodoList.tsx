import { useEffect, useState } from "react";

import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

import type { Todo } from "../types";

import todoData from "../data/todos.json";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setTodos(todoData);
    }, 500);
  }, []);

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = () => {
    if (newTask.trim() === "") return;
    const newTodo: Todo = {
      id: todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
      task: newTask,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setNewTask("");
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const startEditing = (id: number, currentText: string) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const saveEdit = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, task: editingText } : todo
      )
    );
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className='space-y-4 max-w-xl mx-auto'>
      <TodoForm newTask={newTask} setNewTask={setNewTask} addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editingId={editingId}
          editingText={editingText}
          toggleComplete={toggleComplete}
          startEditing={startEditing}
          setEditingText={setEditingText}
          saveEdit={saveEdit}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
