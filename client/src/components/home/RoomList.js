import React from "react";
import { Link } from "react-router-dom";
import Room from "./Room";

const RoomList = ({ roomData }) => {
  return (
    <div>
      {roomData &&
        roomData.map((data) => (
          <Link to={`chat/ + ${data} + '/' + ${data.name}`} key={data._id}>
            <Room name={data.name} />
          </Link>
        ))}
    </div>
  );
};

export default RoomList;
