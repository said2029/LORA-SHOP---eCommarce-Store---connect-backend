"use client";
import React from "react";

 // Error components must be Client Components

const error = ({ error }: { error: Error }) => {
  return <div>{error.message}</div>;
};

export default error;
