import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/auth.context";

export default function ButtonAppBar() {
  const { currentUser, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.setItem("user", null);
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Biruk's personal blog
          </Typography>
          {currentUser && (
            <button className="button-primary" onClick={(e) => handleLogout()}>
              Logout
            </button>
          )}
          {!currentUser && (
            <>
              <Link to={`/login`} style={{ color: "white" }}>
                Log in
              </Link>
              <Link to={`/signup`} style={{ color: "white" }}>
                Sign up
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
