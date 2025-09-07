import TodoRowItem from "./TodoRowItem";
function TodoTable(props) {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Task</th>
                    <th scope='col'>Assignee</th>
                    <th scope='col'>Status</th>
                </tr>
            </thead>
            <tbody>
                {props.todoItems.map(
                    (todo) => <TodoRowItem
                        rowNumber={todo.id}
                        description={todo.description}
                        assignee={todo.assignee}
                        isCompleted={todo.isCompleted}
                    />
                )}
            </tbody>
        </table>
    )
};
export default TodoTable;