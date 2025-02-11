import { useState } from "react";
import { SweetAlert } from "./SweetAlert";

interface TypeofTodoValue {
  todoValue: string;
  date: string;
}

function AddTodo({ addTask }: { addTask: (task: TypeofTodoValue) => void }) {
  const [todoValue, setTodoValue] = useState<string>("");

  function getValue(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoValue(e.target.value);
  }

  function submitValue(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // กำหนดว่าจะส่งอะไรไปบ้าง เก็บไว้ใน obj
    const task = {
      todoValue: todoValue,
      date: new Date().toLocaleDateString(),
    };
    console.log(task);
    // ส่ง task ไปยัง addTask addTask มี parameter
    addTask(task);
    setTodoValue(""); // reset value = ""
    SweetAlert(task.todoValue);
  }
  return (
    <div className="max-w-[700px] mt-16">
      <h3 className="text-xl font-bold text-gray-400 flex md:hidden justify-center items-center text-center mb-4">
        Add new task:
      </h3>
      <form
        className="flex flex-row gap-4 justify-center items-center md:flex-nowrap flex-wrap"
        onSubmit={submitValue}
      >
        <label
          htmlFor="new task"
          className="text-lg font-semibold text-gray-400 md:flex hidden"
        >
          Add new task:
        </label>

        <input
          type="text"
          className="border-2 rounded-md px-2 md:px-4 py-2 text-lg w-64 md:w-full"
          placeholder="Add your task.."
          onChange={getValue}
          value={todoValue}
          autoFocus
          required
        />

        <button
          type="submit"
          className="bg-teal-500  dark:bg-[#FF6500] dark:hover:bg-[#FF6500]/80 px-4 py-2 rounded-md h-12 text-white text-md md:text-xl font-semibold hover:bg-teal-600 duration-200 transition-all"
        >
          Add now
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
