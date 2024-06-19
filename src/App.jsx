import { useState } from 'react';

export default function App() {
  // lista de todos

  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  function addTodo() {
    // todos.push(text) De esta forma no se hace

    setTodos([...todos, text])
  }

  function removeTodo(index){
    // Muta el arreglo
    // todos.splice(index, 1)
    // setTodos([...todos])

    // Hace uno nuevo
    const newTodos = todos.filter((todo, idx) => idx !== index)
    setTodos(newTodos)
  }

  function onSubmit(event) {
    event.preventDefault();
    addTodo();
    setText('');
  }

  return (
    <main className="w-full min-h-screen flex flex-col">
      <form className='flex flex-row gap-2 justify-center p-5' onSubmit={onSubmit}>
        <input 
            type="text"
            className='p-2 rounded text-black w-full max-w-screen-sm'
            placeholder='Ingresa una tarea'
            value={text}
            required
            onChange={(event) => setText(event.target.value)} 
        />
        <button className='bg-white text-black px-3 rounded'> + Agregar</button>
      </form>

      <div className='text-white max-w-screen-sm w-full mx-auto p-4 flex flex-col gap-1'>
        {todos.length === 0 && <p className='text-white/50'>No hay tareas pendientes : 😵</p>}
        {todos.map((todo, index) => {
          return (
            <div
              key={`todo-${index}`}
              className="bg-white/10 rounded p-4 flex flex-row justify-between"
            >
              <span className='select-none'>{todo}</span>
              <span className='text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-full p-1 size-6 text-center items-center' onClick={() => removeTodo(index)}>X</span>
            </div>
          );
        })}
      </div>
    </main>
    )
}