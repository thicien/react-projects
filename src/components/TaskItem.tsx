import type { Todo } from '../types/index';

interface TaskItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ todo, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className="flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors group">
      <div className="flex items-center gap-4 flex-grow cursor-pointer" onClick={() => onToggle(todo.id)}>
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}
          className="w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
        />
        <span className={`text-lg text-gray-700 transition-all ${ todo.completed ? 'line-through text-gray-400' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => onDelete(todo.id)}
        className="w-10 h-10 rounded-full bg-gray-100 text-red-500 flex items-center justify-center hover:bg-gray-200 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
        title="Delete task"
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </li>
  );

}
