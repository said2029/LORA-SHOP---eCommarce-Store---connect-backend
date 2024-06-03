"use client";

import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { SyntheticEvent } from "react";

export default function CategoryItem(props: {
  itemName: string;
  action: (event: SyntheticEvent<Element, Event>, checked: boolean) => void;
}) {
  return (
    <div className="flex gap-1">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label={props.itemName}
          value={props?.itemName}
          onChange={props.action}
        />
      </FormGroup>
    </div>
  );
}
