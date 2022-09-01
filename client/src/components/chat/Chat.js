import React, { useContext } from "react";
import { UserContent } from "../../UserContent";
import { Link, useParams } from "react-router-dom";

const Chat = () => {
  const { room_id, room_name } = useParams();
  // const [user, setUser] = useContext(UserContent);

  return (
    <>
      <h5>
        Room Name - {room_name} , Room Id - {room_id}
      </h5>
      <Link to={"/"}>
        <button>go to home</button>
      </Link>
    </>
  );
};

export default Chat;
