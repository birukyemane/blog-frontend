import React from "react";
import renderer from "react-test-renderer";

import DeleteIcon from "@mui/icons-material/Delete";


import ActionButton from "./ActionButton";

it("renders correctly with url and icon", () => {
  const _id = '1234555'

  const tree = renderer
    .create(
      <ActionButton
        urlsegment={`/blogs/${_id}/destroy`}
        name={<DeleteIcon />}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
