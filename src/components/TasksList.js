const TEXT_CHECKED = "checked";
export default function TaskList(props) {
    return (
        <div className="list">
            <ul id="myList">
                {props.tasks.map(task => (
                    <li onClick={(e) => props.switchCrossOutTask(e, task.id, task.isCrossed)}
                        className={task.isCrossed ? TEXT_CHECKED : null}
                        key={task.id}>
                        {task.name}
                        <button onClick={() => props.deleteTask(task.id)} className="del"></button>
                    </li>
                ))}
            </ul>
        </div>
    )
}