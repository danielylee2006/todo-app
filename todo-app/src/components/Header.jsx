export function Header(properties) {

    const {todos} = properties; //unpack properties and access argument via key
    const todosLength = todos.length;

    const isTasksPlural = todosLength > 1;
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task' 

    return (
        <header>
            <h1>
                You have {todosLength} open {taskOrTasks}.
            </h1>
        </header>
    )
}

