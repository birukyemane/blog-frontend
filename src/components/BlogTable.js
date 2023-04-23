import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import BlogCard from "./BlogCard";

const BlogTable = ({ blogs }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} md={12}>
          <Typography variant="h6" gutterBottom>
            All stories
          </Typography>
        </Grid>
        {blogs.map((blog, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogTable;
