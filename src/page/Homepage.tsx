import AddTodo from "../components/AddTodo";
import { useState, useEffect } from "react";
import Todoitem from "../components/Todoitem";
interface TypeofTodoValue {
  todoValue: string;
  date: string;
}
function Homepage() {
  // รับ prop value ที่ submit มาจาก AddTodo เก็บไว้ใน todo
  const [todos, setTodos] = useState<TypeofTodoValue[]>([]);
  // เก็บ localStorage
  const [localStorage] = useState(() =>
    JSON.parse(window.localStorage.getItem("todo") || "[]")
  );
  useEffect(() => {
    setTodos(localStorage);
  }, []);
  useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const addTask = (task: TypeofTodoValue) => {
    setTodos((prevTodos) => [...prevTodos, task] as TypeofTodoValue[]);
  };

  // delete task
  const deleteTask = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== id));
  };

  // update task
  const updateTask = (newTodoValue: TypeofTodoValue, id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((t, i) => (i === id ? newTodoValue : t))
    );
  };

  return (
    <>
      <AddTodo addTask={addTask}></AddTodo>

      <ul className="bg-gray-300 md:mx-0 mx-4 dark:bg-gray-600 rounded-md shadow-sm p-4 mt-8 mb-16 duration-200 transition-all ease-in">
        {todos.map((todo, i) => (
          <Todoitem
            todo={todo}
            key={i}
            id={i}
            deleteTask={deleteTask}
            updateTask={updateTask}
          ></Todoitem>
        ))}
        {/* ส่ง props เป้น function deleteTask and updateTask หน้านี้ไป */}
      </ul>
    </>
  );
}

export default Homepage;
