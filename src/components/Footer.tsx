function Footer() {
  const date = new Date().toLocaleDateString();
  return (
    <div className="bg-slate-900 dark:bg-black font-inter text-white duration-200 transition-all ease-in">
      <div className="container mx-auto flex flex-row justify-center">
        <div className="p-6">
          <p>Copyright &copy; 2024 MyTodoLists {date}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
