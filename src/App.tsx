import { useState } from 'react';
import Tasklist from './components/TaskList';
import TaskForm from './components/TaskForm';
import type { Todo } from './types/index';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'I Am here', completed: false },
    { id: '2', text: 'reactjsexample.com', completed: false },
    { id: '3', text: 'A To do app developed using to consolidate your knowledge about React', completed: false }
  ]);

  const addTodo = (text: string) => {
  if (!text.trim()) return;
  const newTodo: Todo = { id: crypto.randomUUID(), text, completed: false };
  setTodos([newTodo, ...todos]);
  }; 
  const toggleTodo = (id: string) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id: string) => {
   setTodos(todos.filter((t) => t.id !== id))
  }

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center py-10'>
      <h1 className='text-6xl sm: text-8xl font-black text-gray-200 opacity-50 mb-8 tracking-widset lowercase'> todos</h1>
      <div className='w-full max-w-2xl px-4'>
        <div className='bg-white shadow-lg rounded-full overflow-hidden mb-6 flex items-center px-6'>
          <TaskForm onAdd={addTodo} />
        </div>
        <div className='bg-transparent flex flex-col gap-4'>
          <TaskList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );

}
export default App;