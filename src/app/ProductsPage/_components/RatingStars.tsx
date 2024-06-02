import { Rating } from "@mui/material";

export default function RatingStars(prop: {
  startconst: number;
  size: "large";
}) {

  return (
    <div className="flex gap-1">
      <Rating
        readOnly
        size={prop.size || 0}
        name="product-rating"
        defaultValue={prop.startconst}
        precision={0.5}
      />
    </div>
  );
}
