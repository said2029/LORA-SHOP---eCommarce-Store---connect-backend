"use client";
import React from "react";

// Error components must be Client Components

const error = ({ error }: { error: Error }) => {
  return (
    <div className="flex items-center justify-center mt-9 flex-col gap-5">
      <img width={500} height={500} src="/images/Error.png" alt="" />

      {error.message}
    </div>
  );
};

export default error;
