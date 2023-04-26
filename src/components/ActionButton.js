import { Form } from "react-router-dom";

const ActionButton = ({ urlsegment, name }) => {
    console.log('action button', urlsegment)
  return (
    <Form method="post" action={urlsegment}>
      <button style={{borderStyle: "none"}} variant="text">
        {name}
      </button>
      
    </Form>
  );
};

export default ActionButton;
