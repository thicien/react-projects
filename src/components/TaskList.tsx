import type { Todo } from '../types/index';
import TaskItem from './TaskItem';

interface TaskListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({ todos, onToggle, onDelete }: TaskListProps) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500 py-6"></p>;
  }

  return (
    <ul className="flex flex-col">
      {todos.map((todo) => (
        <TaskItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
