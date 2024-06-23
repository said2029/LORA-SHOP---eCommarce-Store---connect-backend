"use client";
import AccordionFaq from "@/components/AccordionFaq";
import axios from "axios";
import { Suspense, useEffect, useState } from "react";

export default async function page() {
  const [data, setData] = useState<any>({});

  async function getData() {
    const respons = await axios.get("/api/get_fqas");
    setData(respons.data.data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <>

      <div>
        {data.body?.FAQs_Page_Header_checkbox == "true" && (
          <div className="relative w-full h-52 flex justify-center items-center text-5xl font-bold mb-10">
            <img
              loading="lazy"
              decoding="async"
              className="absolute w-full h-full object-cover z-0"
              src={data.body?.FAQs_header_background_image}
              alt=""
            />
            <h1 className="z-10">{data.body?.faq_page_title}</h1>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 p-10 lg:px-20">
          <section>
            <img src={data.body?.FAQs_Left_Column_Image || ""} alt="" />
          </section>
          <section className="space-y-6">
            <AccordionFaq
              content={data.body?.faq_description_one}
              name={data.body?.faq_title_one}
            />
            <AccordionFaq
              content={data.body?.faq_description_two}
              name={data.body?.faq_title_two}
            />
            <AccordionFaq
              content={data.body?.faq_description_three}
              name={data.body?.faq_title_three}
            />
            <AccordionFaq
              content={data.body?.faq_description_four}
              name={data.body?.faq_title_four}
            />
            <AccordionFaq
              content={data.body?.faq_description_five}
              name={data.body?.faq_title_five}
            />
            <AccordionFaq
              content={data.body?.faq_description_six}
              name={data.body?.faq_title_six}
            />
            <AccordionFaq
              content={data.body?.faq_description_seven}
              name={data.body?.faq_title_seven}
            />
            <AccordionFaq
              content={data.body?.faq_description_eight}
              name={data.body?.faq_title_eight}
            />
          </section>
        </div>
      </div>

    </>
  );
}
