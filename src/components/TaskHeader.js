const ERROR_TEXT = "Enter minimum 3 symbols";
const EMPTY_STRING = "";
const DISABLED_TEXT = "disabled";

export default function TaskHeader(props) {
    return (
        <div className="header">
            <h1>Task Manager</h1>
            <form className="header__task" onSubmit={props.addTask}>
                <div className="header__text">
                    <input id="task_field"
                        value={props.value}
                        onChange={props.changeValue}
                        className={props.showErrorAnnouncement
                            ? "task_text"
                            : EMPTY_STRING
                        }
                        type="text"
                        placeholder="New task"
                    />
                    <p
                        id="p"
                        className={props.showErrorAnnouncement
                            ? "error_message"
                            : EMPTY_STRING
                        }
                    >
                        {props.showErrorAnnouncement
                            ? ERROR_TEXT
                            : EMPTY_STRING
                        }
                    </p>
                </div>
                <div className="header__button">
                    <input
                        type="submit"
                        value="Add"
                        disabled={props.showErrorAnnouncement
                            ? DISABLED_TEXT
                            : EMPTY_STRING
                        }
                    />
                </div>
            </form>
        </div>
    )
}