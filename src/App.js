import { useState } from 'react';
import './App.css';
import TodoTable from './components/todoTable/TodoTable';
import AddNewTodo from './components/addNewTodo/AddNewTodo';
import TodoTableItem from './utils/TodoTableItem';

function App() {
    const [todoItems, setTodoItems] = useState(TodoTableItem);
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          <h1>My Todo List</h1>
        </div>
        <div className='card-body'>
          <TodoTable todoItems={todoItems} />
          <hr />
          <button id='add-todo' className='btn btn-primary' onClick={handleAddNewTodo}>Add New Todo</button>
          <div id='add-new-todo' className='mb-3' style={{ visibility: 'hidden' }}><AddNewTodo todoItems={todoItems} setTodoItems={setTodoItems} /></div>
        </div>
      </div>
    </div>
  );
}

function handleAddNewTodo() {
  document.getElementById('add-todo').style.visibility = 'hidden';
  document.getElementById('add-new-todo').style.visibility = 'visible';
}
export default App;
