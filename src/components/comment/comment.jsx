import React from 'react'

function CommentCard({data}) {
    const {username,comment,commentID,picUrl} = data
  return (
    <div >
        {/* <hr /> */}
       <img style={{width:"15px"}} src={picUrl}  alt="" />
      <p>
        <strong>{username}</strong> @{username}
      </p>
      <p>Replying to @tanaypratap</p>
      <p>
        <strong>{comment}</strong>
      </p>
    </div>
  );
}

export default CommentCard