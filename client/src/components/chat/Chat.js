import React, { useContext } from "react";
import { UserContent } from "../../UserContent";
import { Link } from "react-router-dom";

const Chat = () => {
  // const [user, setUser] = useContext(UserContent);

  return (
    <>
      {/* <h1>Chat {JSON.stringify(user)}</h1> */}
      <Link to={"/"}>
        <button>go to home</button>
      </Link>
    </>
  );
};

export default Chat;
