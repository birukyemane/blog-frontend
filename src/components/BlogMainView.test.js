import React from "react";
import renderer from "react-test-renderer";

import BlogMainView from "./BlogMainView";

const blog = {
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
};

it("renders correctly with url and icon", () => {
  const tree = renderer.create(<BlogMainView blog={blog} />).toJSON();
  expect(tree).toMatchSnapshot();
});
