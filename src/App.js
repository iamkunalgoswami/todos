import { useState } from 'react';
import './App.css';
import TodoTable from './components/todoTable/TodoTable';
import AddNewTodo from './components/addNewTodo/AddNewTodo';
import TodoTableItem from './utils/TodoTableItem';


function App() {
  const [todoItems, setTodoItems] = useState(TodoTableItem);
  const [showTodoForm, setShowTodoForm] = useState(false);

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          <h1>My Todo List</h1>
        </div>
        <div className='card-body'>
          <TodoTable todoItems={todoItems} />
          <button id='add-todo' className='btn btn-primary' onClick={() => setShowTodoForm(showTodoForm => !showTodoForm)}>{!showTodoForm ? 'Add New Todo' : 'Close Todo'}</button>
          <hr />
          {showTodoForm &&
            <AddNewTodo todoItems={todoItems} setTodoItems={setTodoItems} setShowTodoForm={setShowTodoForm} showTodoForm={showTodoForm} />
          }
        </div>
      </div>
    </div>
  );
}
export default App;
