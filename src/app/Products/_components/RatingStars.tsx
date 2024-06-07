import { Rating } from "@mui/material";

export default function RatingStars(prop: {
  startconst: number;
  size: "large"|"small";
}) {

  return (
    <div className="flex gap-1">
      <Rating
        readOnly
        size={prop.size || "large"}
        value={prop.startconst}
        name="product-rating"
        defaultValue={0}
        precision={0.1}
      />
    </div>
  );
}
