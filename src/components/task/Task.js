import { TaskStyled } from "./Task.styled"
import TaskList from "./TaskList"
import { useState, useEffect } from "react"

import db from '../../firebase'

const Task = () => {
  // Les Task
  const [tasks, setTasks] = useState([])
  // Les inputs
  const [taskInput, setTaskInput] = useState('')

  // Run only on first launch
  useEffect(() => {
    getTasks()
  }, [])

  // Show all task saved when I refresh the page
  const getTasks = () => {
    db
    .collection('task')
    .onSnapshot(snapshot => (
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        task: doc.data().task
      })))
    ))
  }

  // Add new task
  const addTask = (e) => {
    e.preventDefault()

    // Add new task
    const newTask = taskInput
    setTasks([...tasks, newTask])

    // Save Task in the db
    db.collection('task').add({
      task: taskInput
    })

    // Empty field after validation
    setTaskInput('')
  }
  
  return (
    <TaskStyled>
      <h1>Task List App</h1>
      <form onSubmit={addTask}>
        <input 
          type="text"
          placeholder='Add task'
          value={taskInput}
          onChange={e => setTaskInput(e.target.value)}
        />
        <button>Add task</button>
      </form>
      {tasks.map((task) => (
        <TaskList
          id={task.id}
          todo={task.task}
        />
      ))}
    </TaskStyled>
  )
}

export default Task