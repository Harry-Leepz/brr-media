import { useEffect, useState } from "react";

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
      <div className='flex gap-2 mb-4'>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add a new task...'
          className='flex-grow p-2 border rounded'
        />
        <button
          onClick={addTodo}
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          Add
        </button>
      </div>

      {todos.map((todo) => (
        <div
          key={todo.id}
          className='bg-white p-4 rounded shadow flex justify-between items-center'
        >
          <div className='flex items-center'>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className='mr-2'
            />
            {editingId === todo.id ? (
              <input
                type='text'
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className='border p-1 rounded'
              />
            ) : (
              <span
                className={todo.completed ? "line-through text-gray-500" : ""}
              >
                {todo.task}
              </span>
            )}
          </div>
          <div className='flex gap-2'>
            {editingId === todo.id ? (
              <button
                onClick={() => saveEdit(todo.id)}
                className='text-green-600 hover:text-green-800 text-sm'
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => startEditing(todo.id, todo.task)}
                className='text-blue-500 hover:text-blue-700 text-sm'
              >
                Edit
              </button>
            )}
            <button
              onClick={() => deleteTodo(todo.id)}
              className='text-red-500 hover:text-red-700 text-sm'
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
