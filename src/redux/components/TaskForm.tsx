import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store';

export const TaskForm: React.FC = () => {
  const [text, setText] = useState(' ');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };


  return (
    <form onSubmit={handleSubmit} className='mb-4'>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}
        className='border p-2 rounded mr-2'
        placeholder='Add a new task here'
      />
      <button type='submit' className='bg-blue-700 text-white p-2 rounded '> Add Task</button>
    </form>
  )
}