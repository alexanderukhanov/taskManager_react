import React from "react";
import TasksList from "./TasksList";
import TaskHeader from "./TaskHeader";
import TASKS from "../data/dataTasks";
const EMPTY_STRING = "";
const MIN_LENGTH_OF_TASK = 3;
const NUMBER_ONE = 1;
const FIELD_NAME = "task_field";
const STRING_DEL = "del";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: TASKS,
      value: EMPTY_STRING,
      showErrorAnnouncement: false
    }
    this.changeValue = (e) => {
      this.setState({ value: e.target.value, showErrorAnnouncement: false })
    }
    this.addTask = (e) => {
      e.preventDefault();
      let taskField = e.target.elements[FIELD_NAME].value;
      if (taskField.trim().length < MIN_LENGTH_OF_TASK) {
        this.setState({ showErrorAnnouncement: true })
        return;
      }
      this.setState(state => {
        let tasks = state.tasks;
        let newTask = {
          id: tasks.length
            ? tasks[tasks.length - NUMBER_ONE].id + NUMBER_ONE
            : NUMBER_ONE,
          isCrossed: false,
          name: taskField,
        }
        let newTasks = [...tasks, newTask];
        return { tasks: newTasks, value: EMPTY_STRING }
      })
    }
    this.switchCrossOutTask = (e, id, isCrossed) => {
      if (e.target.className === STRING_DEL) { return };
      this.setState(state => {
        let index = state.tasks.findIndex(v => v.id === id)
        let item = state.tasks[index];
        let newItem = { ...item }
        newItem.isCrossed = !isCrossed;
        let newTasks = [...state.tasks.slice(0, index), newItem, ...state.tasks.slice(index + 1)]
        return { tasks: newTasks }
      })
    }
    this.deleteTask = (id) => {
      this.setState(state => {
        let newTasks = state.tasks.filter(value => {
          return value.id !== id
        })
        return { tasks: newTasks }
      })
    }
  }
  render() {
    return (
      <div className="wrapper">
        <TaskHeader
          addTask={this.addTask}
          value={this.state.value}
          changeValue={this.changeValue}
          showErrorAnnouncement={this.state.showErrorAnnouncement}
        />
        <TasksList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          switchCrossOutTask={this.switchCrossOutTask}
        />
      </div>
    );
  }
}

export default App;
