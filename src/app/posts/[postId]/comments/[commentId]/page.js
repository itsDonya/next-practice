import React from "react";

function PostSingleCommentPage({ params }) {
  return (
    <div>
      Comment {params.commentId} for post {params.postId}
    </div>
  );
}

export default PostSingleCommentPage;
