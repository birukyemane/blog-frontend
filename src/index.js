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
import { EditBlog } from "./routes/editBlog";
import {
  addBlogAction,
  deleteBlog,
  editBlogAction,
  handleLogin,
} from "./router-actions/actions";
import {
  blogEditLoader,
  BlogLoader,
  blogsLoader,
} from "./rotuer-loaders/loaders";
import BlogDetail from "./routes/BlogDetail";
import Login from "./routes/Login";
import LoginErrorBoundary from "./components/LoginErrorBoundary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<FilterableBlogTable />} loader={blogsLoader} />
      <Route
        path="/blogs"
        element={<FilterableBlogTable />}
        loader={blogsLoader}
      />
      <Route path="blogs/:id" element={<BlogDetail />} loader={BlogLoader} />

      <Route path="blogs/add" element={<AddBlog />} action={addBlogAction} />
      <Route
        path="blogs/:id/edit"
        element={<EditBlog />}
        loader={blogEditLoader}
        action={editBlogAction}
      />
      <Route path="blogs/:id/destroy" action={deleteBlog} />
      <Route
        path="login"
        element={<Login />}
        action={handleLogin}
        errorElement={<LoginErrorBoundary />}
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
