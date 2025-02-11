import { useRef, useState, MouseEvent } from "react";
import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { SweetAlertDelete, SweetAlertEdit } from "./SweetAlert";
interface TypeofTodoValue {
  todoValue: string;
  date: string;
}

function Todoitem({
  todo,
  id,
  deleteTask,
  updateTask,
}: {
  todo: TypeofTodoValue;
  id: number;
  deleteTask: (id: number) => void;
  updateTask: (newTodoValue: TypeofTodoValue, id: number) => void;
}) {
  const [todoValue, setTodoValue] = useState<string>(todo.todoValue);
  const [editing, setEditing] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  // แสดง moodal ผ่าน ref / conditional rendering isEditing?
  function showMoodal(isEditing: boolean) {
    setEditing(isEditing ? true : false);
    console.log(isEditing);
    dialog.current?.showModal();
  }
  // ปิด moodal
  function closeModal() {
    dialog.current?.close();
  }
  //close modal when clickOutside
  const clickOutside = (e: MouseEvent) => {
    if (e.target === dialog.current) {
      // console.log(e.target);
      closeModal();
    }
  };

  //Event submitForm ของ dialog ***ต้องให้ปุ่ม confirm/Delete เป็น type submit ด้วย ***
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ถ้ากด edit ให้ set todovalue ใหม่ใน object newEditTask
    if (editing) {
      const newEditTask = {
        todoValue: todoValue,
        date: todo.date,
      };
      console.log(newEditTask);
      updateTask(newEditTask, id);
      SweetAlertEdit();
    } else {
      // ถ้ากด delete ให้ delete task
      deleteTask(id);
      SweetAlertDelete(todoValue);
    }
    closeModal();
  }

  return (
    <>
      <li className="flex flex-row justify-between bg-white dark:bg-black rounded-md shadow-sm p-4 mt-4 first:mt-0">
        <div className="flex flex-row gap-x-4 mr-auto items-center">
          <div className="h-6 w-6 rounded-full shadow-sm text-white  text-sm bg-teal-500 dark:bg-[#FF6500] text-center content-center">
            {id + 1}
          </div>
          <div className="flex flex-col">
            <p className="font-semibold dark:text-white">{todo.todoValue}</p>
            <p className="text-sm text-gray-400">{todo.date}</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 ms-4">
          <button
            onClick={() => showMoodal(false)}
            className="border-2 px-2 border-red-500 rounded-md bg-red-500  hover:bg-red-600 duration-200 transition-all ease-in hover:-translate-y-0.5"
          >
            <MdDeleteForever className="text-white text-2xl " />
          </button>
          <button
            onClick={() => showMoodal(true)}
            className="border-2 px-2 border-amber-400 rounded-md bg-amber-400 hover:bg-amber-500 duration-200 transition-all ease-in hover:-translate-y-0.5"
          >
            <BiEdit className="text-white text-2xl " />
          </button>
        </div>
      </li>

      {/* ใส่ ref ให้ dialog เพื่อ showMoodal/closeModal */}
      <dialog
        ref={dialog}
        onClick={clickOutside}
        className="px-4 py-2 rounded-md shadow-md"
      >
        <form onSubmit={submitForm}>
          {/* ถ้า edit จะเป็น Edit ถ้า delete จะเป็น Delete */}
          <h3 className="text-2xl font-semibold">
            {editing ? "Edit" : "Delete"}
          </h3>
          <div className="mt-4 mb-8 text-xl px-4">
            {editing ? (
              <input
                type="text"
                className="border-2 rounded-md px-4 py-2 text-xl"
                placeholder="Edit your task"
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                autoFocus
                required
              />
            ) : (
              "Are you sure to delete this task?"
            )}
          </div>
          {/* render edit button or delete button */}
          <div className="flex flex-row justify-between">
            <button
              onClick={closeModal}
              type="button"
              className="rounded bg-stone-300 px-3 py-2 text-black hover:bg-slate-300"
            >
              Close
            </button>
            <button
              type="submit"
              className={
                editing
                  ? "rounded font-semibold bg-teal-500 px-3 py-2 text-white hover:bg-teal-600"
                  : "rounded font-semibold bg-red-500 px-3 py-2 text-white hover:bg-red-600"
              }
            >
              {editing ? "Confirm" : "Delete"}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Todoitem;
