import * as React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import moment from "moment";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function BlogDetail() {
  const blog = useLoaderData();

  const {
    _id,
    title,
    description,
    content,
    image,
    author,
    createdAt,
    readingTime,
  } = blog;
  console.log(image);
  return (
    <Container maxWidth="md">
      <Box sx={{ bgcolor: "#cfe8fc", margin: 5 }}>
        <Card sx={{ maxWidth: "md", border: "none", boxShadow: "none" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            title={author}
            subheader={`${moment(createdAt).format(
              "MMMM DD, YYYY"
            )} - ${readingTime} min read`}
          />
          <CardContent>
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
          </CardContent>
          <img
            src={`${image}`}
            style={{ width: "100%", height: 500 }}
            alt={title}
            loading="lazy"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontStyle: "italic", m: 1 }}
            >
              {description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">{content}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
