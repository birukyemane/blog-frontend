import { Form } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";

export const AddBlog = () => {
  return (
    <Container maxWidth="sm" sx={{ margin: 4 }}>
      <Form className="form flex-column" method="post" action="/blogs/add">
        <TextField
          margin="dense"
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
        />
        <TextField
          margin="dense"
          fullWidth
          name="description"
          label="Description"
          variant="outlined"
        />
        <TextareaAutosize
          margin="dense"
          minRows={15}
          aria-label="empty textarea"
          placeholder="Content..."
          style={{ width: 700 }}
        />
        <TextField margin="dense" label="Minute to read" type="number" />
        <div>
          <button className="button-primary">Submit</button>
        </div>
      </Form>{" "}
    </Container>
  );
};
