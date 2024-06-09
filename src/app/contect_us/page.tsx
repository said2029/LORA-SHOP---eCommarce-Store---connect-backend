"use client";
import UseGET from "@/hooks/GET";
import { Textarea } from "@material-tailwind/react";
import {
  EmailOutlined,
  LocationCityOutlined,
  VibrationOutlined,
} from "@mui/icons-material";
import { Button, TextField, TextareaAutosize } from "@mui/material";
import Image from "next/image";

export default function page() {
  const data = UseGET(
    process.env.BACKENDURL + "/setting/GetContactus"
  ) as { body: [any] };
  return (
    <>
      {data.body != undefined && (
        <div className="mb-20">
          {data.body[0].checked_bg_Hero && (
            <div className="relative w-full h-52 flex justify-center items-center text-5xl font-bold bg-gray-400 mb-10">
              <img
                loading="lazy"
                decoding="async"
                className="absolute w-full h-full object-cover z-0"
                src={data.body[0].header_background_image}
                alt=""
              />
              <h1 className="z-10">{data.body[0].contact_page_title}</h1>
            </div>
          )}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 xl:gap-24 px-4 md:px-10">
            {data.body[0].checked_EmailBox && (
              <div className="p-8 rounded-md border border-gray-400 flex justify-center text-center">
                <ul className="space-y-5">
                  <li className="text-base-color-500">
                    <EmailOutlined style={{ fontSize: "60px" }} />
                  </li>
                  <li className="text-2xl font-semibold mt-3">
                    {data.body[0].email_box_title}
                  </li>
                  <li>
                    <p>
                      <span className="text-base-color-500">
                        {data.body[0].email_box_email}
                      </span>{" "}
                      {data.body[0].email_box_text}
                    </p>
                  </li>
                </ul>
              </div>
            )}
            {data.body[0].checked_CallBox && (
              <div className="p-8 rounded-md border border-gray-400 flex items-center justify-center text-center">
                <ul className="space-y-5">
                  <li className="text-base-color-500">
                    <VibrationOutlined style={{ fontSize: "60px" }} />
                  </li>
                  <li className="text-2xl font-semibold">
                    {data.body[0].callUs_box_title}
                  </li>
                  <li>
                    <p>
                      <span className="text-base-color-500">
                        {data.body[0].callUs_box_phone}
                      </span>{" "}
                      {data.body[0].callUs_box_text}
                    </p>
                  </li>
                </ul>
              </div>
            )}
            {data.body[0].checked_Address_Box && (
              <div className="p-8 rounded-md border border-gray-400 flex items-center justify-center text-center">
                <ul className="space-y-5">
                  <li className="text-base-color-500">
                    <LocationCityOutlined style={{ fontSize: "60px" }} />
                  </li>
                  <li className="text-2xl font-semibold">
                    {data.body[0].address_box_title}
                  </li>
                  <li>
                    <p>{data.body[0].address_box_address_one}</p>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 mt-16 items-center gap-36 px-10 lg:grid-cols-2 lg:px-20 ">
            <div>
              <Image
                className="object-cover w-full h-full"
                width={600}
                height={600}
                alt=""
                src={data.body[0].middle_left_colum_Image}
              />
            </div>
            <div  >
              <h1 className="font-semibold text-4xl mb-6">
                {data.body[0].contact_form_title}
              </h1>
              <p>{data.body[0].contact_form_description}</p>

              <form className="mt-10  space-y-6 text-gray-500">
                <div className="flex justify-between gap-4">
                  <TextField
                    required
                    id="outlined-required"
                    label="Your Name"
                    sx={{ flexGrow: "1" }}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="your email"
                    sx={{ flexGrow: "1" }}
                  />
                </div>
                <TextField
                  required
                  id="outlined-required"
                  label="Subject"
                  sx={{ width: "100%" }}
                />
                <Textarea
                  required
                  variant="outlined"
                  label="Message"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />

                <Button size="large" className=" p-2 !bg-base-color-500"  variant="contained">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
