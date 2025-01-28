import axios from "axios";

const getAllToDo = (setToDo) => {
  fetch("https://fullstack-todoapp-backend-do0u.onrender.com")
    .then((res) => res.json())
    .then((data) => {
      setToDo(data);
    }).catch((err) => {
      console.log(err);
    });
};

const addToDo = (text, setText, setToDo) => {
  fetch("https://fullstack-todoapp-backend-do0u.onrender.com/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({text}),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data ---->", data);
      getAllToDo(setToDo);
      setText("");
    }).catch((err) => {
      console.log(err);
    });
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios.put(`https://fullstack-todoapp-backend-do0u.onrender.com/update`, {_id: toDoId, text})
    .then((data) => {
      getAllToDo(setToDo);
      setText("");
      setIsUpdating(false);
    }).catch((err) => {
      console.log(err);
    });
};

const deleteToDo = (_id, setToDo) => {
  console.log(_id);
  axios.delete(`https://fullstack-todoapp-backend-do0u.onrender.com/delete`, { data: { _id: _id } })
    .then((data) => {
      console.log(data)
      getAllToDo(setToDo);
    }).catch((err) => {
      console.log(err);
    });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
