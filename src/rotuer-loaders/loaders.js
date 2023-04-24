// import axios from "axios";

export const blogEditLoader = async ({ params }) => {
  //   try {
  //     const res = await axios.get(`students/${params.id}`);
  //     return res.data;
  //   } catch (e) {
  //     return { error: e };
  //   }
  return {
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
};
