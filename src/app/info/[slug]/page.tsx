import store from "@/Redux/store";
import { Container } from "@mui/material";

export default function page({ params }: { params: any }) {
  const store2 = store.getState().p_a as { p_a: any };
  const p_a = store2?.p_a;
  let title = "";
  let content = "";
  if (p_a?.body != undefined) {
    switch (params.slug) {
      case "privacyPolicy": {
        content = p_a?.body[0].privacyPolicy;
        title = "Privacy Policy";
        break;
      }
      case "aboutUs": {
        content = p_a?.body[0].aboutUs;
        title = "About Us";
        break;
      }
      case "terms_conditions": {
        content = p_a?.body[0].terms_conditions;
        title = "Terms & Conditions";
        break;
      }
      default: {
        content = "";
        break;
      }
    }
  }

  return (
    <div className="mb-20">
      <div className="relative w-full h-52 flex justify-center items-center text-5xl font-bold bg-gray-400 mb-4">
        <img
          className="absolute w-full h-full object-cover z-0"
          src="/images/2148657725.jpg"
          alt=""
        />
        <h1 className="z-10">{title}</h1>
      </div>
      <Container maxWidth="xl">
        <div
          dangerouslySetInnerHTML={{
            __html: content ? content : "<p>undfind</p>",
          }}
        />
      </Container>
    </div>
  );
}
