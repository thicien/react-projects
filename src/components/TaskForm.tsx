import { useState } from 'react';

interface TaskFormProps {
  onAdd: (text: string) => void;
}

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <form className="w-full flex items-center" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add todo..."
        className="flex-grow py-3 text-lg focus:outline-none text-black placeholder-gray-900"
        value={text} onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center hover:bg-gray-300"
        title="Add task"
      > + </button>
    </form>
  );
}
