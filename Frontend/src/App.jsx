import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('');

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/todos");
      setTodos(response.data);
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to fetch tasks.');
    }
  };

  useEffect(() => {
    document.title = '📝 Task Manager'
  })

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      setMessage('Task cannot be empty.');
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/todos", { title: todo });
      setTodo('');
      setMessage('✅ Task added!');
      fetchTodos();
    } catch (error) {
      console.error(error);
      setMessage('❌ Server error.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to delete task.');
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      await axios.p(`http://localhost:5000/api/todos/${id}`, { completed: !completed });
      fetchTodos();
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to update task.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 Task Manager</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
          >
            Add Task
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}

        <ul className="mt-6 space-y-2">
          {todos.map((task) => (
            <li
              key={task._id}
              className="bg-gray-200 px-4 py-2 rounded text-gray-800 flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task._id, task.completed)}
                />
                <span className={task.completed ? 'line-through text-gray-500' : ''}>
                  {task.title}
                </span>
              </div>
              <button
                onClick={() => handleDelete(task._id)}
                className="text-red-500 hover:text-red-700"
                title="Delete task"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
