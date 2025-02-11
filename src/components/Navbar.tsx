import { useTheme } from "./ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
function Navbar() {
  interface ThemeContext {
    theme: string;
    toggleTheme: () => void;
  }

  const { theme, toggleTheme } = useTheme() as ThemeContext;
  return (
    <div className="bg-teal-500 text-white font-inter dark:bg-black duration-200 transition-all ease-in">
      <div className="container mx-auto flex flex-row justify-between p-4">
        <div>
          <p className="text-xl md:text-3xl font-semibold dark:text-[#FF6500]">
            MyTodoLists
          </p>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <div>
            <button onClick={toggleTheme} className="">
              {theme === "dark" ? (
                <MdDarkMode className="text-3xl  hover:scale-110 hover:animate-pulse hover:text-amber-400" />
              ) : (
                <MdLightMode className="text-3xl hover:scale-110 hover:animate-pulse hover:text-slate-900" />
              )}
            </button>
          </div>
          <span>|</span>
          <p className="text-md  dark:text-[#FF6500]">
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
