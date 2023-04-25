import { Form } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionButton = ({ urlsegment, name }) => {
    console.log('action button', urlsegment)
  return (
    <Form method="post" action={urlsegment}>
      <button style={{borderStyle: "none"}} variant="text">
        <DeleteIcon />
      </button>
      
    </Form>
  );
};

export default ActionButton;
