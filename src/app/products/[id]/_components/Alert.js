import React from "react";

function Alert() {
  return (
    <div className="w-full p-4 bg-slate-100 flex items-center justify-start gap-4 border-2 border-slate-300 rounded-md">
      {/* icon */}
      <div className="size-6 aspect-square bg-slate-400 flex items-center justify-center rounded-full">
        <span className="text-sm text-white font-mono">i</span>
      </div>

      {/* text */}
      <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
}

export default Alert;
