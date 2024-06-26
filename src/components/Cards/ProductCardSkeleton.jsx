import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Skeleton } from "@mui/material";
export default function ProductCardSkeleton({
}) {
  return (
    <div style={{ maxHeight: 450, minHeight: 450, minWidth: "100%", width: "100%" }}>
      <Skeleton animation="wave" variant="rounded" width={"100%"} height={270} />
      <CardContent>
        <Typography
          className="flex justify-between gap-2 items-center"
          gutterBottom
          variant="h6"
          component="div"
        >
          <Box className="line-clamp-1 w-full">
            <Skeleton animation="wave" variant="rounded" width={"70%"} height={30} />
          </Box>
          <Skeleton animation="wave" variant="rounded" width={"10%"} height={10} />{" "}
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
        <Box className="w-full">
          <Typography color="#3C5B6F" variant="h6" component="div">
            <Skeleton animation="wave" variant="rounded" width={"100%"} height={30} />
          </Typography>
        </Box>
      </CardActions>
    </div>
  );
}
