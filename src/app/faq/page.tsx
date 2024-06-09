import axiosClient from "@/_utils/axiosClient";
import AccordionFaq from "@/components/AccordionFaq";

export default async function page() {
  const data = await axiosClient.get("/setting/GetFAQs");
  return (
    <div>
      {data.data.body[0].FAQs_Page_Header_checkbox == "true" && (
        <div className="relative w-full h-52 flex justify-center items-center text-5xl font-bold mb-10">
          <img
            loading="lazy"
            decoding="async"
            className="absolute w-full h-full object-cover z-0"
            src={data.data.body[0].FAQs_header_background_image}
            alt=""
          />
          <h1 className="z-10">{data.data.body[0].faq_page_title}</h1>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 p-10 lg:px-20">
        <section>
          <img src={data.data.body[0]. FAQs_Left_Column_Image} alt="" />
        </section>
        <section className="space-y-6">
          <AccordionFaq
            content={data.data.body[0].faq_description_one}
            name={data.data.body[0].faq_title_one}
          />
          <AccordionFaq
            content={data.data.body[0].faq_description_two}
            name={data.data.body[0].faq_title_two}
          />
          <AccordionFaq
            content={data.data.body[0].faq_description_three}
            name={data.data.body[0].faq_title_three}
          />
          <AccordionFaq
            content={data.data.body[0].faq_description_four}
            name={data.data.body[0].faq_title_four}
          />
          <AccordionFaq
            content={data.data.body[0].faq_description_five}
            name={data.data.body[0].faq_title_five}
          />
          <AccordionFaq
            content={data.data.body[0].faq_description_six}
            name={data.data.body[0].faq_title_six}
          />
          <AccordionFaq
            content={data.data.body[0].faq_description_seven}
            name={data.data.body[0].faq_title_seven}
          />
          <AccordionFaq
            content={data.data.body[0].faq_description_eight}
            name={data.data.body[0].faq_title_eight}
          />
        </section>
      </div>
    </div>
  );
}
