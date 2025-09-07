function TodoRowItem(props) {
    return (
        <tr>
            <td scope='row'>{props.rowNumber}</td>
            <td scope='row'>{props.description}</td>
            <td scope='row'>{props.assignee}</td>
            <td scope='row'>{props.isCompleted ? 'Undo' : 'Complete'}</td>
        </tr>
    )
};
export default TodoRowItem;