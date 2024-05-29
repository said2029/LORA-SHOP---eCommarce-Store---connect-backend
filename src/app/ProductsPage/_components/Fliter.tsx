import Slider from "@mui/material/Slider";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";

import { AccordionFilter } from "./Accordion";
import RatingStars from "./RatingStars";
import CategoryItem from "./CategoryItem";
import { useState } from "react";

export default function FilterSidbar() {
  
  const [price_RangeValue, setPrice_RangeValue] = useState<number[]>([20, 37]);

  const ChangeValueSlider = (event: Event, value: number[] | number) => {
    setPrice_RangeValue(value as number[]);
  };

  {
    /* price_Range_end */
  }

  return (
    <div>
      {/* Filters */}
      <section className="col-span-1  px-3 pb-9">
        <h1 className="text-2xl font-medium mb-5">Filters</h1>
        {/* Category Filter */}
        <section className="">
          <AccordionFilter name="Category">
            <div className="max-h-80 overflow-y-scroll">
              <section>
                <CategoryItem
                  action={(value) => {
                    const target = value.target as HTMLInputElement;
                    target?.checked, "1";
                  }}
                  itemName="Phone"
                />
                <CategoryItem
                  action={(value) => {
                    const target = value.target as HTMLInputElement;
                    target.checked, "2";
                  }}
                  itemName="Phone2"
                />
              </section>
            </div>
          </AccordionFilter>
        </section>
        {/* Category Filter End */}

        {/* price Range Filter */}
        <section >
          <AccordionFilter  name="Price Range">
            <div>
              <section className="px-2 mt-5">
                <Slider
                  getAriaLabel={(index) => (index === 0 ? "0" : "300")}
                  value={price_RangeValue}
                  onChange={ChangeValueSlider}
                  valueLabelDisplay="auto"
                  color="info"
                  max={300}
                  min={0}
                  // getAriaValueText={(value:number)=>{return 39}}
                />
                <div className=" flex gap-4 mt-2">
                  <TextField
                    disabled
                    value={price_RangeValue[0]}
                    size="small"
                    id="outlined-basic"
                    label="Min Price"
                    variant="outlined"
                  />
                  <TextField
                    disabled
                    value={price_RangeValue[1]}
                    size="small"
                    id="outlined-basic"
                    label="Max Price"
                    variant="outlined"
                  />
                </div>
              </section>
            </div>
          </AccordionFilter>
        </section>
        {/* price Range Filter End */}

        {/* Rating Filter */}
        <section className="">
          <AccordionFilter name="Rating">
            <div>
              <section>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<RatingStars startconst={1} size={"large"} />}
                    onChange={(value) => {
                      console.info(
                        "Select star",
                        (value.target as HTMLInputElement).checked
                      );
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<RatingStars startconst={2} size={"large"} />}
                    onChange={(value) => {
                      (value.target as HTMLInputElement).checked;
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<RatingStars startconst={3} size={"large"} />}
                    onChange={(value) => {
                      (value.target as HTMLInputElement).checked;
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<RatingStars startconst={4} size={"large"} />}
                    onChange={(value) => {
                      (value.target as HTMLInputElement).checked;
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<RatingStars startconst={5} size={"large"} />}
                    onChange={(value) => {
                      (value.target as HTMLInputElement).checked;
                    }}
                  />
                </FormGroup>
              </section>
            </div>
          </AccordionFilter>
        </section>
        {/* Rating Filter End */}
        <Button className="mt-5" size="large" fullWidth variant="contained">
          Apply
        </Button>
      </section>
    </div>
  );
}
