import React from "react";
import renderer from "react-test-renderer";
import { AuthProvider } from "../contexts/auth.context";
import { useState } from "react";
import AppBar from "./AppBar";


const Root = () => {
  let user = localStorage.getItem("user");
  console.log("getting from local storage", user, user === "null");
  user = user === "null" ? null : user;
  const [currentUser, setCurrentUser] = useState(user);

  return (
    <>
      <AuthProvider currentUser={currentUser} setCurrentUser={setCurrentUser}>
        <AppBar />
      </AuthProvider>
    </>
  );
};

it("renders correctly with out props", () => {
  const tree = renderer.create(<Root />).toJSON();
  expect(tree).toMatchSnapshot();
});
