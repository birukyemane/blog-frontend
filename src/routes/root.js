import AppBar from "../components/AppBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <AppBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
