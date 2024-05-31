import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AddShoppingCart } from "@mui/icons-material";
import Link from "next/link";
import { imagesCard } from "@/_lib/Manager";
import { Skeleton } from "@mui/material";
export default function ProductCardSkeleton({
  image = "",
  tital = "",
  peice = "",
  supPrice = "",
  discription = "",
  id = "",
}) {
  return (
    <Link href={`/Product/${id}`}>
      <Card sx={{ maxHeight: 450, minHeight: 450 }}>
        <Skeleton animation="wave" variant="rounded" width={"100%"} height={270} />
        <CardContent>
          <Typography
            className="flex justify-between gap-2 items-center"
            gutterBottom
            variant="h6"
            component="div"
          >
            <p className="line-clamp-1 w-full">
              <Skeleton animation="wave" variant="rounded" width={"70%"} height={30} />
            </p>
            <span className="bg-orange-600 px-3 rounded-xl h-fit text-sm text-white">
              5
            </span>
          </Typography>
          <Typography
            className="line-clamp-3"
            variant="body2"
            color="text.secondary"
          >
            <Skeleton animation="wave" variant="rounded" width={"90%"} height={60} />{" "}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className="w-full">
            <Typography color="#3C5B6F" variant="h6" component="div">
              <Skeleton animation="wave" variant="rounded" width={"100%"} height={30} />
            </Typography>
          </div>
        </CardActions>
      </Card>
    </Link>
  );
}
