/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, remove } from "../features/todo/todoSlice";
import { edit } from "../features/todo/todoSlice";

const ListItem = ({ todo }) => {
  const {isSuccess} = useSelector(state=>state.todos)
  const dispatch = useDispatch()
  const handleEdit = (id) => {
    dispatch(deleteTodo(id))
    if (isSuccess) {
      dispatch(remove(id))
    }
  }
  const { _id, title, description } = todo;
  // if(!todo) return
  return (
    <li className="list-group-item rounded-0">
      <h1>{title}</h1>
      <p>{description}</p>
      <span className="float-end">
        <button className="btn btn-sm btn-warning rounded-0" onClick={()=>dispatch(edit({_id,title,description}))}>Edit</button>
        <button className="btn btn-sm btn-danger rounded-0" onClick={()=>handleEdit(_id)}>Delete</button>
      </span>
    </li>
  );
};

export default ListItem;
