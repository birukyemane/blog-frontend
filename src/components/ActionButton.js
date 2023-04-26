import { Form } from "react-router-dom";
import React from "react";

class ActionButton extends React.Component {
  render() {
    return (
      <Form method="post" action={this.props.urlsegment}>
        <button style={{ borderStyle: "none" }} variant="text">
          {this.props.name}
        </button>
      </Form>
    );
  }
}

export default ActionButton;
