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
import { SyntheticEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function FilterSidbar({
  categoryAction,
  applayFilter,
}: {
  categoryAction: (value: SyntheticEvent<Element, Event>) => void;
  applayFilter: () => void;
}) {
  const [price_RangeValue, setPrice_RangeValue] = useState<number[]>([20, 37]);
  const [Categorys, SetCategorys] = useState({
    loading: true,
    categorys: { categores: [] },
  });
  const categorys = useSelector(
    (state: {
      CategoryData: { loading: boolean; categorys: { categores: [] } };
    }) => state.CategoryData
  );
  useEffect(() => {
    SetCategorys(categorys);
  }, []);

  const ChangeValueSlider = (event: Event, value: number[] | number) => {
    setPrice_RangeValue(value as number[]);
  };

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
                {Categorys &&
                  Categorys.loading == false &&
                  Categorys?.categorys.categores.map(
                    (cat: { name: ""; _id: "" }) => {
                      return (
                        <CategoryItem
                          key={cat._id}
                          action={categoryAction}
                          itemName={cat.name}
                        />
                      );
                    }
                  )}
              </section>
            </div>
          </AccordionFilter>
        </section>
        {/* Category Filter End */}

        {/* price Range Filter */}
        <section>
          <AccordionFilter name="Price Range">
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
        <Button
          onClick={() => {
            applayFilter();
          }}
          className="mt-5"
          size="large"
          fullWidth
          variant="contained"
        >
          Apply
        </Button>
      </section>
    </div>
  );
}
