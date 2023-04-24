import { Form, useLoaderData } from "react-router-dom";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Container from "@mui/material/Container";

export const EditBlog = () => {
  const blog = useLoaderData();
  console.log("student edit compon", blog);

  const { id, title, content, description, readingTime } = blog;

  return (
    <Container maxWidth="sm" sx={{ margin: 4 }}>
      <Form className="form flex-column" method="post" action={`/blogs/${id}/edit`}>
        <TextField
          margin="dense"
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
          defaultValue={title}
        />
        <TextField
          margin="dense"
          fullWidth
          name="description"
          label="Description"
          variant="outlined"
          defaultValue={description}
        />
        <TextareaAutosize
          name="content"
          margin="dense"
          minRows={15}
          aria-label="empty textarea"
          placeholder="Content..."
          style={{ width: 700 }}
          defaultValue={content}
        />
        <TextField name="minuteToRead" margin="dense" label="Minute to read" type="number" defaultValue={readingTime} />
        <div>
          <button className="button-primary">Save</button>
        </div>
      </Form>
    </Container>
  );
};
