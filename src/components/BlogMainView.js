import * as React from "react";
import Typography from "@mui/material/Typography";
import moment from "moment";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

import ContainerCenter from "./ContainerCenter";

export default function BlogMainView({ blog }) {
  const {
    title,
    description,
    content,
    image,
    author,
    createdAt,
    readingTime,
  } = blog;

  return (
    <ContainerCenter>
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
    </ContainerCenter>
  );
}
