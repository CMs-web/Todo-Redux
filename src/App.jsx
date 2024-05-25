import { useEffect } from "react";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import { useDispatch } from "react-redux";
import { getTodo } from "./features/todo/todoSlice";

const App = () => {
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodo())
  },[])

  return (
    <div className="container p-5">
      <h1 className="display-6 my-3 text-center">REDUX TODO</h1>
      <Form />
      <ListGroup />
    </div>
  );
};

export default App;
