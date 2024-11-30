import React from "react";

import { notFound } from "next/navigation";

function PostSingleCommentPage({ params }) {
  if (!Number(params.commentId)) {
    notFound();
  }

  return (
    <div>
      Comment {params.commentId} for post {params.postId}
    </div>
  );
}

export default PostSingleCommentPage;
