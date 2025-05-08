type TodoFormProps = {
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
};

export default function TodoForm({
  newTask,
  setNewTask,
  addTodo,
}: TodoFormProps) {
  return (
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
  );
}
