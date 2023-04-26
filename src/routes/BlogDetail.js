import * as React from "react";
import { useLoaderData } from "react-router-dom";


import BlogMainView from "../components/BlogMainView";

export default function BlogDetail() {
  const blog = useLoaderData();

  return (
    <BlogMainView blog={blog}/>
  );
}
