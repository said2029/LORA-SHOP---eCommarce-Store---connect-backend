"use client";
import { Rating } from "@mui/material";
import { Star } from "lucide-react";
import { useState } from "react";

export default function RatingStars(prop: {
  startconst: number;
  size: "large";
}) {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  return (
    <div className="flex gap-1">
      <Rating
        readOnly
        size={prop.size}
        name="half-rating"
        defaultValue={prop.startconst}
        precision={0.5}
      />
    </div>
  );
}
