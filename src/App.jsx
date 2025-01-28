import ToDo from "./components/ToDo";
import { useState, useEffect } from "react";

import { addToDo, getAllToDo, updateToDo, deleteToDo} from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoid, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);


  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setToDoId(_id);
    setText(text);
 }

  return (
    <>
      <div className="app">
        <div className="container">
          <h1 className="text-4xl text-bold">ToDo App</h1>
          <div className="w-lg flex item-center justify-centert gap-4 mt-8">
            <div className="relative z-0 w-full my-5 group">
              <input
                type="text"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your ToDo
              </label>
            </div>
            <button
              className="w-full h-[50px] my-auto max-w-[100px] rounded bg-neutral-800 px-2 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              onClick={
                isUpdating
                  ? () => updateToDo(toDoid, text, setToDo, setText, setIsUpdating)
                  : () => addToDo(text, setText, setToDo)
              }
            >
              {isUpdating ? "Update" : "Add"}
            </button>
          </div>
          {toDo.map((item, index) => (
            <ToDo 
            key={item._id} 
            text={item.text}
            updateMode ={() => updateMode(item._id, item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
