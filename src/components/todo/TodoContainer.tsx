import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
const bgStyle =
  "linear-gradient(to bottom right, rgba(255,255,255,0.1), white, rgba(255,255,255,0.1))";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // From local
  // const { todos } = useAppSelector((state) => state.todos);

  // from server
  // console.log(priority);
  const { data: todos, isLoading } = useGetTodosQuery(priority);
  if (isLoading) {
    return <p>Loading......</p>;
  }

  return (
    <div>
      <div>
        <div className="my-5 flex justify-between ">
          <AddTodoModal></AddTodoModal>
          <TodoFilter
            priority={priority}
            setPriority={setPriority}
          ></TodoFilter>
        </div>
        <div className="bg-primary-gradient w-full  rounded-xl p-1.5  mb-10">
          {/* <div>
            <p className="text-center font-semibold bg-white p-3 rounded-md">
              There is no task pending
            </p>
          </div> */}
          <div
            style={{ background: bgStyle }}
            className=" rounded-[8px] p-3 space-y-3"
          >
            {todos?.data?.map((item) => (
              <TodoCard
                // title={item.title}
                // description={item.description}
                // id={item.id}
                {...item}
              ></TodoCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
