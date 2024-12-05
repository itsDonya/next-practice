import React from "react";

import Alert from "./_components/Alert";

function SingleProductLayout({ children }) {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-8">
      <Alert />

      {children}
    </div>
  );
}

export default SingleProductLayout;
