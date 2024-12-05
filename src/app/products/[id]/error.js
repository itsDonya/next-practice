"use client";

import React from "react";

function SinglePageError({ error }) {
  return (
    <p>
      Error while fetching product data:{" "}
      <span className="text-red-500">{error.message}</span>
    </p>
  );
}

export default SinglePageError;
