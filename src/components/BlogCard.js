import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuth } from "../contexts/auth.context";
import ActionButton from "./ActionButton";

export default function BlogCard({ blog }) {
  const { _id, title, description, image, createdAt, readingTime } = blog;
  const { currentUser, setCurrentUser } = useAuth();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={<Link style={{ color: "black" }} to={`/blogs/${_id}`}>{title}</Link>}
        subheader={`${moment(createdAt).format(
          "MMMM DD, YYYY"
        )} - ${readingTime} min read`}
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description.slice(0, 30)}
        </Typography>
      </CardContent>
      {currentUser && (
        <CardActions disableSpacing>
          <ActionButton
            urlsegment={`/blogs/${_id}/destroy`}
            name={<DeleteIcon />}
          />
          <Link to={`/blogs/${_id}/edit`}>
            <EditIcon />
          </Link>
        </CardActions>
      )}
    </Card>
  );
}
