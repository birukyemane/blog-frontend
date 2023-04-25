import { redirect } from "react-router-dom";
import axios from "../utilities";

export const addBlogAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    title: data.get("title"),
    description: data.get("description"),
    content: data.get("content"),
    readingTime: data.get("readingTime"),
    image: "https://picsum.photos/200",
    author: "Biruk",
    category: "development",
  };

  console.log(submission);

  try {
    const res = await axios.post("/blogs", submission);
    console.log(res.data);
  } catch (e) {
    return { error: e };
  }
  return redirect("/blogs");
};

export const editBlogAction = async ({ request, params }) => {
  const data = await request.formData();

  const submission = {
    title: data.get("title"),
    description: data.get("description"),
    content: data.get("content"),
    readingTime: data.get("readingTime"),
    image: "https://picsum.photos/200",
    author: "Biruk",
    category: "development",
  };

  console.log(submission);

  try {
    const res = await axios.put(`/blogs/${params.id}`, submission);
    console.log("edit success", res.data);
  } catch (e) {
    return { error: e };
  }

  return redirect("/blogs");
};
