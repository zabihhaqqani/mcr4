import React from "react";
import { forumData } from "./data";
import ProductCard from "../components/productCard/productCard";

function UserPosts() {

    const updatedData = forumData?.posts.filter(item=>item)


  return (
    <div>
      {updatedData?.map((post) => {
        return <ProductCard key={post.postId} item={post} />;
      })}
      
    </div>
  );
}

export default UserPosts;
