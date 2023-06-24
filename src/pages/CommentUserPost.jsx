import React from "react";
import { forumData } from "./data";
import ProductCard from "../components/productCard/productCard";
import Comments from "../components/productCard/comments";

function UserCommentsPost() {
  return (
    <div>
      {forumData?.posts?.map((post) => {
        return <Comments key={post.postId} item={post} />;
      })}
    </div>
  );
}

export default UserCommentsPost;
