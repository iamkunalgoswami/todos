function TodoRowItem(props) {
    return (
        <tr>
            <td scope='row'>{props.rowNumber}</td>
            <td scope='row' className={props.isCompleted ? 'text-decoration-line-through text-muted' : ''}>{props.description}</td>
            <td scope='row'>{props.assignee}</td>
            <td scope='row'>{props.isCompleted ? 'Complete' : 'Pending'}</td>
        </tr>
    )
};
export default TodoRowItem;