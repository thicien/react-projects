import { useState } from "react"
import type { Task } from "./types/Task"

function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [taskText, setTaskText] = useState<string>("")

  const addTask = () => {
    if (!taskText.trim()) return

    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      completed: false
    }

    setTasks([...tasks, newTask])
    setTaskText("")
  }

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div>
      <h1>Task Manager</h1>

      <input
        type="text"
        value={taskText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTaskText(e.target.value)
        }
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {task.text}
            </span>

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p>Remaining Tasks: {tasks.filter(t => !t.completed).length}</p>

    </div>
  )
}

export default App