import logo from './logo.svg';
import './App.css';
import TodoRowItem from './components/todoTable/TodoRowItem';
import TodoTableItem from './utils/constants/TodoTableItem';
import TodoTable from './components/todoTable/TodoTable';

function App() {
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'> 
          <h1>My Todo List</h1>
        </div>
        <div className='card-body'>
          <TodoTable TodoTableItem={TodoTableItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
