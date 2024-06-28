"use client";

import { FormControlLabel, Radio } from "@mui/material";
import { SyntheticEvent } from "react";

export default function CategoryItem(props: {
  itemName: string;
}) {
  return (
    <div className="flex gap-1">
        <FormControlLabel
          control={<Radio />}
          label={props.itemName}
          value={props?.itemName}
        />
    </div>
  );
}
