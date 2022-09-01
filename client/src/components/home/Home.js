import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
let socket;

const Home = () => {
  const ENDPT = "localhost:4000";
  useEffect(() => {
    socket = io(ENDPT);
    return () => {
      socket.emit("disconnected");
      socket.off();
    };
  }, [ENDPT]);

  const [room, setRoom] = useState("");

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
            {/* <div className="card-action" style={{ backgroundColor: "none" }}>
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div> */}
          </div>
        </div>
      </div>
      {/* <Link to={"/chat"}> */}

      {/* </Link> */}
    </>
  );
};

export default Home;
