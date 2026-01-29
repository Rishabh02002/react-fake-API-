import React from "react";
import "../ShowPost.css";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from "reactstrap";
import { deletePost } from "../api/PostApi";

export const ShowPosts = ({ post }) => {

  return (
    <>
      <Card>
        <CardHeader key={post.id}></CardHeader>
        <CardTitle tag="h2">{post.title}</CardTitle>
        <CardBody>{post.body}</CardBody>
      </Card>
    </>
  );
};
