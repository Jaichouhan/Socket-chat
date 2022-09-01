import React, { useState } from "react";
import { io } from "socket.io-client";
import RoomList from "./RoomList";

const Home = () => {
  const [room, setRoom] = useState("");
  const socket = io("http://localhost:4000", {
    transports: ["websocket", "polling"],
  });

  const roomData = [
    {
      name: "jai",
      _id: "2701",
    },
    {
      name: "mahak",
      _id: "2701",
    },
  ];

  const handleSubmitForm = (e) => {
    e.preventDefault();
    socket.emit("create-room", room);
    setRoom("");
  };

  return (
    <>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Welcome</span>
              <form className="col s12" onSubmit={handleSubmitForm}>
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      placeholder="Enter a Room Name"
                      id="first_name"
                      type="text"
                      className="validate"
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                    />
                    <label htmlFor="first_name">Room</label>
                  </div>
                </div>
                <button type="submit">go to chat</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col s6 m5 offset-1">
          <RoomList roomData={roomData} />
        </div>
      </div>
    </>
  );
};

export default Home;
