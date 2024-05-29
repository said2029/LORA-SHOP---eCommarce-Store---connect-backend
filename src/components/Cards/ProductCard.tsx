import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AddShoppingCart } from "@mui/icons-material";
import Link from "next/link";
import { imagesCard } from "@/Manager";
export default function ProductCard({
  image = "",
  tital = "",
  peice = "",
  supPrice = "",
  discription = "",
  id = "",
}) {
  return (
    <Link  href={`/Product/${id}`}>
      <Card sx={{ maxHeight: 450,minHeight:450 }}>
        <CardMedia
          sx={{ minHeight: 270,objectFit:"fill"}}
          image={image || imagesCard}
          title="green iguana"
        />
        <CardContent >
          <Typography
            className="flex justify-between gap-2 items-center"
            gutterBottom
            variant="h6"
            component="div"
          >
            <p className="line-clamp-1 w-full">
              {tital ? tital : "LIFESTYLE COLLECTION SALE 20% OFF"}
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
            {discription
              ? discription
              : "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small">
            <AddShoppingCart />
            <p className="text-nowrap">Add To Card</p>
          </Button>
          <div>
            <Typography color="#3C5B6F" variant="h6" component="div">
              ${peice ? peice : "20.99"}
              <span className="line-through text-sm ms-1">
                ${supPrice ? supPrice : "30.68"}
              </span>
            </Typography>
          </div>
        </CardActions>
      </Card>
    </Link>
  );
}
