import logo from './logo.svg';
import './App.css';
import TodoRowItem from './components/TodoRowItem';

function App() {
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'> 
          <h1>My Todo List</h1>
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Task</th>
                <th scope='col'>Assignee</th>
              </tr>
            </thead>
            <tbody>
              <TodoRowItem/>
              <tr>
                <td scope='row'>2</td>
                <td scope='row'>Learn Java</td>
                <td scope='row'>John Mark</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default App;
