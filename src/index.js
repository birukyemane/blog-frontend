import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

import Root from "./routes/root";
import FilterableBlogTable from "./routes/filterableBlogTable";
import { AddBlog } from "./routes/addBlog";
import { addBlogAction } from "./actions/actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<FilterableBlogTable />} />
      <Route path="/blogs" element={<FilterableBlogTable />} />
      <Route
        path="blogs/add"
        element={<AddBlog />}
        action={addBlogAction}
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
