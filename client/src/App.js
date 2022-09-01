import React, { useState } from "react";
import "./App.css";
import Chat from "./components/chat/Chat";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import { SocketContext } from "./UserContent";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <div className="App">
        <SocketContext.Provider value={{ user, setUser }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              exact
              path="/chat/:room_id/:room_name"
              element={<Chat />}
            ></Route>
          </Routes>
        </SocketContext.Provider>
      </div>
    </>
  );
};

export default App;
