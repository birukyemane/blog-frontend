import { redirect } from "react-router-dom";
import axios from "../utilities";
import { useAuth } from "../contexts/auth.context";

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

export function deleteBlog({ params }) {
  console.log("destory route");

  axios.delete(`/blogs/${params.id}`).then(() => {
    console.log("delte success");
  });

  console.log("redirect ");

  return redirect("/blogs");
}

export const handleLogin = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    userName: data.get("userName"),
    password: data.get("password"),
  };


  try {
    const token = await fakeAuth(submission);
    return { token };
  } catch (e) {
    throw e;
  }
};

const fakeAuth = ({ userName, password }) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve("2342f2f1d131rf12"), 250);

    if (userName === "biruk" && password === "M#WZPdC#DL@4") {
      resolve("2342f2f1d131rf12");
    } else {
      reject(Error("login failed"));
    }
  });

  export const useHandleLogout = () => {
    const { setCurrentUser } = useAuth();
    setCurrentUser(null);
    localStorage.setItem("user", null);
    return redirect("/login");
  };
