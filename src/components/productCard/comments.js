import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { forumData } from "../../pages/data";
import { useDataContext } from "../context/context";
import CommentCard from "../comment/comment";

function Comments({ item }) {
  const { dataDispatch, commentHandler } = useDataContext();

  const {
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    comments,
    isBookmarked,
  } = item;

  const [isBookmarkeds, setIsBookmarkeds] = useState(isBookmarked);

    const [votes, setVotes] = useState(upvotes - downvotes);

  const navigate = useNavigate();
  return (
    <div className="product-container">
      <div className="product-card">
        <div className="product-info">
          <div>
            <span
              className="votes-btn"
              onClick={() => setVotes((votes) => votes + 1)}
            >
              ▲
            </span>
            {votes < downvotes ? (
              <span className="votes-btn" style={{ color: "red" }}>
                {" "}
                {votes}
              </span>
            ) : (
              <span className="votes-btn" style={{ color: "green" }}>
                {" "}
                {votes}
              </span>
            )}
            <span
              className="votes-btn"
              onClick={() => setVotes((votes) => votes - 1)}
            >
              ▼
            </span>
          </div>

          <span>posted by @{username}</span>
          <h3 style={{ padding: "0.5rem 0rem" }}>{post}</h3>
          <div>
            <span className="tags">
              {tags?.map((tag) => (
                <p
                  style={{ margin: "0rem 0.5rem", color: "#5348C7" }}
                  className="actual-tag"
                >
                  {tag.toUpperCase()}
                </p>
              ))}
            </span>
          </div>
          <p>{postDescription}</p>
          <hr />
          <div className="icons-container">
            <i
              onClick={() => {
                navigate("/comments");
                commentHandler(comments);
              }}
              class="fa-solid fa-comment fa-lg"
            ></i>

            <i className="fa-solid fa-share fa-lg"></i>

            {isBookmarkeds ? (
              <i
                onClick={() => setIsBookmarkeds(!isBookmarkeds)}
                class="fa-solid fa-bookmark fa-lg"
              ></i>
            ) : (
              <i
                onClick={() => setIsBookmarkeds(!isBookmarkeds)}
                className="fa-regular fa-bookmark fa-lg"
              ></i>
            )}
          </div>
          {comments?.map((item) => (
            <CommentCard key={item.commentId} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comments;
