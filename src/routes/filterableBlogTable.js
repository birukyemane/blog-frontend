import BlogTable from "../components/BlogTable";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { useLoaderData } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";

function FilterableBlogTable() {
  const blogs = useLoaderData();
  const { currentUser, setCurrentUser } = useAuth();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          margin: 2,
        }}
      >
        { currentUser &&  <Link to={`/blogs/add`}>Add Blog </Link>}
      </Box>
      <hr></hr>
      <BlogTable blogs={blogs} />
    </>
  );
}

export default FilterableBlogTable;

/* const BLOGS_SCHEMA = [
  {
    id: "1",
    title: "React custom hook",
    content:
      "Having the correct CSS class names in place ensures that the intended styles are applied to a given component,",
    author: "Biruk",
    description:
      "Having the correct CSS class names in place ensures that the intended styles are applied to a given component",
    readingTime: 5,
    image: "https://picsum.photos/200",
    category: "development",
    createdAt: "2023-04-23T04:17:51.381+00:00",
    updatedAt: "2023-04-23T04:17:51.381+00:00",
  },
  {
    id: "1",
    title: "React custom hook",
    content:
      "Having the correct CSS class names in place ensures that the intended styles are applied to a given component,",
    author: "Biruk",
    description:
      "Having the correct CSS class names in place ensures that the intended styles are applied to a given component",
    readingTime: 5,
    image: "https://picsum.photos/200",
    category: "development",
    createdAt: "2023-04-23T04:17:51.381+00:00",
    updatedAt: "2023-04-23T04:17:51.381+00:00",
  },
  {
    id: "1",
    title: "React custom hook",
    content:
      "Having the correct CSS class names in place ensures that the intended styles are applied to a given component,",
    author: "Biruk",
    description:
      "Having the correct CSS class names in place ensures that the intended styles are applied to a given component",
    readingTime: 5,
    image: "https://picsum.photos/200",
    category: "development",
    createdAt: "2023-04-23T04:17:51.381+00:00",
    updatedAt: "2023-04-23T04:17:51.381+00:00",
  },
  {
    id: "1",
    title: "React custom hook",
    content:
      "Having the correct CSS class names in place ensures that the intended styles are applied to a given component,",
    author: "Biruk",
    description:
      "Having the correct CSS class names in place ensures that the intended styles are applied to a given component",
    readingTime: 5,
    image: "https://picsum.photos/200",
    category: "development",
    createdAt: "2023-04-23T04:17:51.381+00:00",
    updatedAt: "2023-04-23T04:17:51.381+00:00",
  },
  {
    id: "1",
    title: "React custom hook",
    content:
      "Having the correct CSS class names in place ensures that the intended styles are applied to a given component,",
    author: "Biruk",
    description:
      "Having the correct CSS class names in place ensures that the intended styles are applied to a given component",
    readingTime: 5,
    image: "https://picsum.photos/200",
    category: "development",
    createdAt: "2023-04-23T04:17:51.381+00:00",
    updatedAt: "2023-04-23T04:17:51.381+00:00",
  },
  {
    id: "1",
    title: "React custom hook",
    content:
      "Having the correct CSS class names in place ensures that the intended styles are applied to a given component,",
    author: "Biruk",
    description:
      "Having the correct CSS class names in place ensures that the intended styles are applied to a given component",
    readingTime: 5,
    image: "https://picsum.photos/200",
    category: "development",
    createdAt: "2023-04-23T04:17:51.381+00:00",
    updatedAt: "2023-04-23T04:17:51.381+00:00",
  },
];
 */
