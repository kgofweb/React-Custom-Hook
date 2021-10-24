import { TaskListStyled } from "./TaskList.styled"
import db from "../../firebase"

const Task = ({ todo, id }) => {
  // Delete always via the id
  const deleteTask = () => {
    db.collection('task').doc(id).delete()
  }

  return (
    <TaskListStyled>
      <p>{todo}</p>
      <button onClick={deleteTask}>Delete</button>
    </TaskListStyled>
  )
}

export default Task