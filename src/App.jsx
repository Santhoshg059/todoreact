import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import Edit from "./Components/Edit";

function App() {
  const [todoname, setTodoname] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Router>
        <div>
          <h3>My ToDo</h3>
          <NavBar todoname={todoname} setTodoname={setTodoname} />
          <Routes>
            <Route
              path="/cards"
              element={
                <Cards
                  todoname={todoname}
                  setTodoname={setTodoname}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              }
            />
          </Routes>
        </div>
      </Router>
      {/* <Edit showModal={showModal} setShowModal={setShowModal}></Edit> */}
    </>
  );
}

export default App;