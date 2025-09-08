import { useState } from "react";

export default function AddNewTodo(props) {
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");

    return (
        <div>
            <h2>Add New Todo</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="assignee" className="form-label">Assignee</label>
                    <input
                        type="text"
                        className="form-control"
                        id="assignee"
                        onChange={(e) => setAssignee(e.target.value)}
                        value={assignee}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleAddNewTodo}
                >Add Todo
                </button>
            </form>
        </div>
    );

    function handleAddNewTodo(event) {
        event.preventDefault();
        const description = document.getElementById('description').value;
        const assignee = document.getElementById('assignee').value;
        if (description === "" || assignee === "") {
            alert("Please fill all the fields");
            return;
        }
        else {
            // Create a new todo item
            const newTodo = {
                id: props.todoItems.length > 0 ? props.todoItems[props.todoItems.length - 1].id + 1 : 1,
                description: description,
                assignee: assignee,
                isCompleted: false
            };
            console.log(newTodo);
            props.setTodoItems(todoItems => [...todoItems, newTodo]);
        }
        setDescription("");
        setAssignee("");
        props.setShowTodoForm(showTodoForm => !showTodoForm);
    };
};
