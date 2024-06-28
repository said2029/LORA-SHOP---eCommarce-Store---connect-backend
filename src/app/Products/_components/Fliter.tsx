import Slider from "@mui/material/Slider";
import {
  Button,
  Checkbox,
  Radio,
  FormControlLabel,
  FormGroup,
  TextField,
  RadioGroup,
} from "@mui/material";

import { AccordionFilter } from "./Accordion";
import RatingStars from "./RatingStars";
import CategoryItem from "./CategoryItem";
import { SyntheticEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getStoreState } from "../../../Redux/store";
import React from "react";

export default function FilterSidbar({
  categoryAction,
  applayFilter,
  FilterPriceSlider,
  priceFilterConfig,
  SelectRateFilter,
  RestartFilter,
}: {
  categoryAction: (value: SyntheticEvent<Element, Event>) => void;
  applayFilter: () => void;
  FilterPriceSlider: (value: number[] | number) => void;
  priceFilterConfig: number[];
  SelectRateFilter: (value: SyntheticEvent<Element, Event>) => void;
  RestartFilter: () => void;
}) {
  const [price_RangeValue, setPrice_RangeValue] = useState<number[]>([999, 0]);
  const [Categorys, SetCategorys] = useState({
    loading: true,
    categorys: { categores: [] },
  });
  const categorys = useSelector(getStoreState);
  const [PriceFilterConfig, setPriceFilterConfig] = useState<number[]>([0, 0]);
  useEffect(() => {
    setPriceFilterConfig(priceFilterConfig);
    setPrice_RangeValue(priceFilterConfig);
  }, [priceFilterConfig]);

  useEffect(() => {
    SetCategorys(categorys.CategoryData);

  }, [])


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
                  getAriaLabel={(index) =>
                    index === 0 ? PriceFilterConfig[0]?.toString() : PriceFilterConfig[1]?.toString()
                  }
                  className=" text-base-color-500"
                  value={price_RangeValue}
                  onChange={ChangeValueSlider}
                  valueLabelDisplay="auto"
                  max={PriceFilterConfig[0] || 999}
                  min={PriceFilterConfig[1] || 0}
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
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="RatingStars"
                  >
                    <FormControlLabel
                      control={<Radio />}
                      label={<RatingStars startconst={1} size={"large"} />}
                      value={1}
                      onChange={SelectRateFilter}
                    />
                    <FormControlLabel
                      control={<Radio />}
                      label={<RatingStars startconst={2} size={"large"} />}
                      value={2}
                      onChange={SelectRateFilter}
                    />
                    <FormControlLabel
                      control={<Radio />}
                      label={<RatingStars startconst={3} size={"large"} />}
                      value={3}
                      onChange={SelectRateFilter}
                    />
                    <FormControlLabel
                      control={<Radio />}
                      label={<RatingStars startconst={4} size={"large"} />}
                      value={4}
                      onChange={SelectRateFilter}
                    />
                    <FormControlLabel
                      control={<Radio />}
                      label={<RatingStars startconst={5} size={"large"} />}
                      value={5}
                      onChange={SelectRateFilter}
                    />
                  </RadioGroup>
                </FormGroup>
              </section>
            </div>
          </AccordionFilter>
        </section>
        {/* Rating Filter End */}
        <Button
          onClick={() => {
            FilterPriceSlider(price_RangeValue);
            applayFilter();
          }}
          className="mt-5 bg-base-color-500 hover:bg-base-color-200/75"
          size="large"
          fullWidth
          variant="contained"
        >
          Apply
        </Button>
        <Button
          onClick={RestartFilter}
          className="mt-5 border border-base-color-500 text-base-color-500 hover:border-base-color-200/75"
          size="large"
          fullWidth
          variant="outlined"
        >
          Restart
        </Button>
      </section>
    </div>
  );
}
