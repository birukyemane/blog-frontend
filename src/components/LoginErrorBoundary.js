import { useRouteError } from "react-router-dom";
import Login from "../routes/Login";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

export default function LoginErrorBoundary() {
  let error = useRouteError();

  // Uncaught ReferenceError: path is not defined
  return (
    <>
      <Login />
      <Container maxWidth="md">
        <Box sx={{ margin: 5 }}>
          <Typography variant="body1" sx={{ color: red[500] }}>
            The username and password are not correct!
          </Typography>
        </Box>
      </Container>
    </>
  );
}
