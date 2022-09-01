import React, { useContext } from "react";
import { UserContent } from "../../UserContent";
import { Link } from "react-router-dom";

const Home = () => {
  //   const [user, setUser] = useContext(UserContent);
  //   const setAsJohn = () => {
  //     const join = {
  //       name: "join",
  //       email: "join@gmail.com",
  //       password: "123",
  //       id: "1234",
  //     };
  //     setUser(join);
  //   };
  //   const setAsTom = () => {
  //     const tom = {
  //       name: "tom",
  //       email: "tom@gmail.com",
  //       password: "423",
  //       id: "5234",
  //     };
  //     setUser(tom);
  //   };

  //   console.log(user);
  return (
    <>
      {/* <h1>Home {JSON.stringify(user)}</h1> */}
      {/* <button onClick={setAsJohn}>set as John</button>
      <button onClick={setAsTom}>set as Tom</button> */}
      <Link to={"/chat"}>
        <button>go to chat</button>
      </Link>
    </>
  );
};

export default Home;
