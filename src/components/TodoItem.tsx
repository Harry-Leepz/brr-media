import type { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
  editingId: number | null;
  editingText: string;
  toggleComplete: (id: number) => void;
  startEditing: (id: number, text: string) => void;
  setEditingText: (text: string) => void;
  saveEdit: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export default function TodoItem({
  todo,
  editingId,
  editingText,
  toggleComplete,
  startEditing,
  setEditingText,
  saveEdit,
  deleteTodo,
}: TodoItemProps) {
  return (
    <div className='bg-white p-4 rounded shadow flex justify-between items-center'>
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
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
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
  );
}
