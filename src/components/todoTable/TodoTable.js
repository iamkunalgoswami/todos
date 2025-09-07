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
                <TodoRowItem
                    rowNumber={props.TodoTableItem[0].id}
                    description={props.TodoTableItem[0].description}
                    assignee={props.TodoTableItem[0].assignee}
                    isCompleted={props.TodoTableItem[0].isCompleted}
                />
                <TodoRowItem
                    rowNumber={props.TodoTableItem[1].id}
                    description={props.TodoTableItem[1].description}
                    assignee={props.TodoTableItem[1].assignee}
                    isCompleted={props.TodoTableItem[1].isCompleted}
                />
                <TodoRowItem
                    rowNumber={props.TodoTableItem[2].id}
                    description={props.TodoTableItem[2].description}
                    assignee={props.TodoTableItem[2].assignee}
                    isCompleted={props.TodoTableItem[2].isCompleted}
                />
                <TodoRowItem
                    rowNumber={props.TodoTableItem[3].id}
                    description={props.TodoTableItem[3].description}
                    assignee={props.TodoTableItem[3].assignee}
                    isCompleted={props.TodoTableItem[3].isCompleted}
                />
                <TodoRowItem
                    rowNumber={props.TodoTableItem[4].id}
                    description={props.TodoTableItem[4].description}
                    assignee={props.TodoTableItem[4].assignee}
                    isCompleted={props.TodoTableItem[4].isCompleted}
                />
                <TodoRowItem
                    rowNumber={props.TodoTableItem[5].id}
                    description={props.TodoTableItem[5].description}
                    assignee={props.TodoTableItem[5].assignee}
                    isCompleted={props.TodoTableItem[5].isCompleted}
                />
                <TodoRowItem
                    rowNumber={props.TodoTableItem[6].id}
                    description={props.TodoTableItem[6].description}
                    assignee={props.TodoTableItem[6].assignee}
                    isCompleted={props.TodoTableItem[6].isCompleted}
                />
            </tbody>
        </table>
    )
};
export default TodoTable;