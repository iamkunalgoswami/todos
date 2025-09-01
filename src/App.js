import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <div>
          <h1>My Todo List</h1>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Task</th>
                <th scope='col'>Assignee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope='row'>1</td>
                <td scope='row'>Learn React</td>
                <td scope='row'>John Doe</td>
              </tr>
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
