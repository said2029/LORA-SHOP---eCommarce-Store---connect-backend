"use client";

import { Pagination } from "@mui/material";
import { useState } from "react";

export default function Pagination2() {
  // Pagination
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  // === Pagination ===
  return (
    <Pagination
      size="medium"
      page={page}
      onChange={handleChange}
      count={2}
      color="primary"
      siblingCount={0}
    />
  );
}
