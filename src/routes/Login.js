import { Navigate, useActionData } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";
import { useEffect } from "react";
import { Form } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import ContainerCenter from "../components/ContainerCenter";

const Login = () => {
  const { currentUser, setCurrentUser } = useAuth();
  let token = useActionData();

  useEffect(() => {
    if (token) {
      setCurrentUser({ token });
      console.log("after setting current", token);
      localStorage.setItem("user", { token });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  console.log("action data", token);
  console.log("current user in home", currentUser);

  if (currentUser) {
    console.log("current user found", currentUser);
    return <Navigate to="/blogs" replace={true} />;
  }

  return (
    <ContainerCenter>
      <h2>Login</h2>
      <Form className="form flex-column" method="post" action="/login">
        <TextField
          margin="dense"
          fullWidth
          name="userName"
          label="Title"
          variant="outlined"
        />
        <TextField
          margin="dense"
          fullWidth
          type="password"
          name="password"
          label="password"
          variant="outlined"
        />

        <div>
          <button className="button-primary">Login</button>
        </div>
      </Form>
    </ContainerCenter>
  );
};

export default Login;
