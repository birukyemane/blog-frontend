import AppBar from "../components/AppBar";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../contexts/auth.context";
import { useState } from "react";

const Root = () => {
  let user = localStorage.getItem("user");
  console.log("getting from local storage", user, user === "null");
  user = user === "null" ? null : user;
  const [currentUser, setCurrentUser] = useState(user);

  return (
    <>
      <AuthProvider currentUser={currentUser} setCurrentUser={setCurrentUser}>
        <AppBar />
        <div>
          <Outlet />
        </div>
      </AuthProvider>
    </>
  );
};

export default Root;
