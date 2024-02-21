import { removeTodo, toggleComplete } from "@/redux/fretures/todoSlice";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hook";
import EditButton from "./EditButton";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  // ======
  const dispatch = useAppDispatch();
  const toggleState = () => {
    // console.log(id);
    dispatch(toggleComplete(id));
  };
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border ">
      <input
        className="mr-3"
        onChange={toggleState}
        type="checkbox"
        name="complete"
        id="complete"
      />
      <p className="font-semibold  flex-1">{title}</p>
      <div className="flex-1 flex items-center gap-2">
        <div
          className={`size-3 rounded-full 
          ${priority === "High" && "bg-red-500"}
          ${priority === "Medium" && "bg-yellow-500"}
          ${priority === "Low" && "bg-slate-500"}
          `}
        ></div>
        <p>{priority}</p>
      </div>

      <div className="flex-1">
        {" "}
        {isCompleted ? (
          <p className="text-green-500 font-semibold">Done</p>
        ) : (
          <p className="text-red-500 font-semibold">Pending</p>
        )}
      </div>
      <p className=" flex-[2]">{description} </p>
      <div className="space-x-5">
        <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
        <EditButton id={id}></EditButton>
      </div>
    </div>
  );
};

export default TodoCard;
