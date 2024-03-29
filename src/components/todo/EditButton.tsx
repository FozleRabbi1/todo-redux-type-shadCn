import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useUpdateTodoMutation } from "@/redux/api/api";

type TTaskDetails = {
  title: string;
  description: string;
  id: string;
  priority: string;
};

const EditButton = ({ id, title, description, priority }: TTaskDetails) => {
  const [updatePost, { isLoading: isUpdating }] = useUpdateTodoMutation();
  const [task, setTask] = useState("");
  const [descriptionn, setDescription] = useState("");
  const [priorityy, setPriority] = useState("");

  if (isUpdating) {
    return <></>;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const taskDetails = {
      title: task || title,
      description: descriptionn || description,
      isCompleted: false,
      priority: priorityy || priority,
    };
    updatePost({ id, ...taskDetails });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-400">
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Your data</DialogTitle>
          <DialogDescription>solve here</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task">Task</Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 ">
              <Label htmlFor="description">Description</Label>
              <Textarea
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3 "
                placeholder="Type your message here."
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 ">
              <Label>Priority</Label>
              <Select value={priorityy} onValueChange={setPriority}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="High" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority ...</SelectLabel>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditButton;
