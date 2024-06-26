"use client";
import { getStoreState } from "@/Redux/store";
import UseIsClient from "@/hooks/IsClient";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";

export default function page({ params }: { params: any }) {

  const store2 = useSelector(getStoreState).p_a as { p_a: any };
  const p_a = store2?.p_a;
  let title = "";
  let content = "";
  if (p_a?.body != undefined) {
    switch (params.slug) {
      case "privacyPolicy": {
        content = p_a?.body?.privacyPolicy;
        title = "Privacy Policy";
        break;
      }
      case "aboutUs": {
        content = p_a?.body?.aboutUs;
        title = "About Us";
        break;
      }
      case "terms_conditions": {
        content = p_a?.body?.terms_conditions;
        title = "Terms & Conditions";
        break;
      }
      default: {
        content = "";
        break;
      }
    }
  }

  const isClient = UseIsClient();

  return (
    <div className="mb-20">
      {isClient &&
        <>
          <div className="relative w-full h-52 flex justify-center items-center text-5xl font-bold bg-gray-400 mb-4">
            <img
              className="absolute w-full h-full object-cover z-0"
              src="/images/bg-Tital.jpg"
              alt=""
            />
            <h1 className="z-10">{title}</h1>
          </div>
          <Container maxWidth="xl">
            <div
              dangerouslySetInnerHTML={{
                __html: content ? content : "<p>undefined</p>",
              }}
            />

          </Container>
        </>
      }
    </div>
  );
}
