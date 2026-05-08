// import { useState } from 'react';
// import TaskForm from './components/TaskForm';
// import TaskList from './components/TaskList';
// import type { Todo } from './types/index';

// function App() {
//   const [todos, setTodos] = useState<Todo[]>([])

//   const addTodo = (text: string) => {
//     if (!text.trim()) return;
//     const newTodo: Todo = { id: crypto.randomUUID(), text, completed: false };
//     setTodos([newTodo, ...todos]);
//   };

//   const toggleTodo = (id: string) => {
//     setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t ))
//   }

//   const deleteTodo = (id: string) => {
//     setTodos(todos.filter((t) => t.id !== id))
//   }

//   return (
//     <div className='min-h-screen bg-gray-300 flex flex-col items-center py-10'>
//       <h1 className='text-8xl font-black text-gray-900 opacity-50 mb-8 tracking-widset uppercase'> Todos</h1>
//       <div className='w-full max-w-2xl px-4'>
//         <div className='bg-white shadow-lg rounded-full overflow-hidden mb-6 flex items-center px-6'>
//           <TaskForm onAdd={addTodo} />
//         </div>
//         <div className='bg-transparent flex flex-col gap-4'>
//           <TaskList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
//         </div>
//       </div>
//     </div>
//   );

// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Reviews from "./pages/Reviews";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ProtectedPayment from "./pages/ProtectedPayment";
function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/checkout" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="Cart" element= {<Cart />} />
          <Route path="Delivery" element={<Delivery />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route element={<ProtectedPayment />}>
            <Route path="checkout/payment" element={<Payment /> } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
  
export default App;



