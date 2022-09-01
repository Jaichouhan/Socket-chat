import React, { useState } from "react";
import Chat from "./components/chat/Chat";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import { UserContent } from "./UserContent";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <div className="App">
        <UserContent.Provider value={{ user, setUser }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/chat" element={<Chat />}></Route>
          </Routes>
        </UserContent.Provider>
      </div>
    </>
  );
};

export default App;
