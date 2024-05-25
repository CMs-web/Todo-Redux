import { useSelector } from "react-redux";
import ListItem from "./ListItem";

const ListGroup = () => {
  const { allTodos, isLoading, isError } = useSelector((state) => state.todos);
  if (isError) {
    return <h1 className="text-center">Something Went Wrong..</h1>;
  }
  if (isLoading) {
    return <h1 className="text-center">Please Wait..</h1>;
  }

  if (!allTodos || allTodos.length === 0) {
    return <h1 className="text-center">No Todos yet..</h1>;
  }

  return (
    <ul className="list-group my-2">
      {allTodos.map((tds) => (
        <ListItem key={tds._id} todo={tds} />
      ))}
    </ul>
  );
};

export default ListGroup;
