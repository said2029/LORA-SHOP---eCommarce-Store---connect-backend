"use client";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import storeSetting from "../../../Redux/feature/storeSetting/storeSetting";
import { Facebook, Linkedin } from "lucide-react";
import {
  FacebookOutlined,
  Instagram,
  Pinterest,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";

export default function Fooetr() {
  const pathName = usePathname();
  let [UtlAuthPage, setUtlAuthPage] = useState(false);

  useEffect(() => {
    setUtlAuthPage(pathName.includes("auth"));
  }, [pathName]);
  const settingStore = useSelector((state:{storeSetting:{settingData:{
    Header_Logo_image:string,
    footer_block_three_link_one_title:string,
    FooterLogo:string,
    footer_block_four_phone:string,
    footer_block_four_email:"",
    TopCategoryFooter:"",
    footer_block_two_title:"",
    footer_block_two_link_one:"",
    footer_block_two_link_one_title:"",
    footer_block_two_link_two:"",
    footer_block_two_link_three:"",
    footer_block_two_link_three_title:"",
    footer_block_two_link_four:"",
    footer_block_two_link_four_title:"",
    privacy_policy:"",
    contact_us:"",
    faq:"",
    CompanyFooter:"",
    footer_block_one_title:"",
    footer_block_one_link_one_title:"",
    footer_block_one_link_one:"",
    footer_block_one_link_two_title:"",
    footer_block_one_link_two:"",
    footer_block_one_link_three_title:"",
    footer_block_one_link_three:"",
    footer_block_one_link_four_title:"",
    footer_block_one_link_four:"",
    footer_block_three_link_two_title:"",
    Social_Links:"",
    social_facebook:"",
    social_twitter:"",
    social_whatsapp:"",
    social_pinterest:"",
    social_linkedin:"",

  }}}) => state.storeSetting.settingData);

  return (
    <>
      {!UtlAuthPage &&settingStore&& (
        <footer className="bg-stone-100 mt-10 shadow-md shadow-black">
          <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <div className="flex flex-col justify-center items-center text-teal-600 sm:justify-start gap-5">
                <img width={200} src={settingStore?.Header_Logo_image} alt="" />
                <p className="text-center text-pretty leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right">
                  {settingStore?.footer_block_three_link_one_title || ""}
                </p>
              </div>

              {/* <div className="text-center ms-7 sm:text-left md:col-span-4 lg:col-span-2 flex-grow ">
                <p className="text-lg font-semibold text-gray-900">
                  Stay in Touch
                </p>

                <div className=" w-full ">
                  <form className="mt-4 w-full ">
                    <div className="flex flex-col gap-4 md:flex-row  lg:items-start  ">
                      <input
                        className="w-full rounded-full border border-gray-600 px-6 py-3   flex-grow"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />

                      <button
                        className=" block rounded-full bg-blue-500 px-8 py-3 font-medium text-white transition hover:bg-blue-600"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div> */}
            </div>

            <div className="mt-16 flex flex-col sm:flex-row flex-wrap gap-10 border-t border-gray-100 pt-16  justify-around">
              {settingStore?.FooterLogo && (
                <div className="text-center sm:text-left ">
                  <p className="text-lg font-medium text-gray-900">About Us</p>

                  <ul className="mt-8 space-y-4 text-sm text-center flex flex-col items-center md:items-start ">
                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75 flex items-center gap-1"
                        href="#"
                      >
                        <Avatar sx={{ width: 24, height: 24 }}>
                          <LocalPhoneIcon className="w-4 h-4" />
                        </Avatar>
                        <p>{settingStore.footer_block_four_phone}</p>
                      </a>
                    </li>

                    <li className="mt-3">
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75 flex items-center gap-1"
                        href="#"
                      >
                        <Avatar sx={{ width: 24, height: 24 }}>
                          <MailIcon className="w-4 h-4" />
                        </Avatar>
                        <p> {settingStore.footer_block_four_email}</p>
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              {settingStore.TopCategoryFooter && (
                <div className="text-center sm:text-left md:max-w-96">
                  <p className="text-lg font-medium text-gray-900">
                    {settingStore.footer_block_two_title || "Top Category"}
                  </p>
                  <div className="flex gap-3 mt-3 text-sm">
                    <ul className="flex flex-wrap items-center justify-center  md:justify-start gap-4">
                      <li>
                        <a
                          className="text-gray-700 transition hover:text-gray-700/75 basis-1/2"
                          href={settingStore.footer_block_two_link_one}
                        >
                          {settingStore.footer_block_two_link_one_title}
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 transition hover:text-gray-700/75 basis-1/2"
                          href={settingStore.footer_block_two_link_two}
                        >
                          {settingStore.footer_block_two_link_one_title}
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 transition hover:text-gray-700/75 basis-1/2"
                          href={settingStore.footer_block_two_link_three}
                        >
                          {settingStore.footer_block_two_link_three_title}
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 transition hover:text-gray-700/75 basis-1/2"
                          href={settingStore.footer_block_two_link_four}
                        >
                          {settingStore.footer_block_two_link_four_title}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">
                  Hello Center
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {" "}
                      Track Order{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {settingStore.privacy_policy}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {settingStore.contact_us}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="#"
                    >
                      {settingStore.faq}
                    </a>
                  </li>
                </ul>
              </div>

              {settingStore.CompanyFooter && (
                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-gray-900">
                    {settingStore.footer_block_one_title}
                  </p>

                  <ul className="mt-8 space-y-4 text-sm">
                    {settingStore.footer_block_one_link_one_title && (
                      <li>
                        <a
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href={settingStore.footer_block_one_link_one}
                        >
                          {settingStore.footer_block_one_link_one_title}
                        </a>
                      </li>
                    )}

                    {settingStore.footer_block_one_link_two_title && (
                      <li>
                        <a
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href={settingStore.footer_block_one_link_two}
                        >
                          {settingStore.footer_block_one_link_two_title}
                        </a>
                      </li>
                    )}
                    {settingStore.footer_block_one_link_three_title && (
                      <li>
                        <a
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href={settingStore.footer_block_one_link_three}
                        >
                          {settingStore.footer_block_one_link_three_title}
                        </a>
                      </li>
                    )}

                    {settingStore.footer_block_one_link_four_title && (
                      <li>
                        <a
                          className="text-gray-700 transition hover:text-gray-700/75"
                          href={settingStore.footer_block_one_link_four}
                        >
                          {settingStore.footer_block_one_link_four_title}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
              <p className="text-center text-sm text-gray-500 sm:text-left">
                Copyright &copy; {settingStore.footer_block_three_link_two_title || "2024. All rights reserved."}
              </p>
              {settingStore.Social_Links && (
                <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
                  {settingStore.social_facebook && (
                    <li>
                      <a
                        href={settingStore.social_facebook}
                        rel="noreferrer"
                        target="_blank"
                        className="text-blue-600 transition hover:text-blue-200/75"
                      >
                        <span className="sr-only">Facebook</span>
                        <FacebookOutlined />
                      </a>
                    </li>
                  )}

                  {settingStore.social_twitter && (
                    <li>
                      <a
                        href={settingStore.social_twitter}
                        rel="noreferrer"
                        target="_blank"
                        className="text-blue-600 transition hover:text-blue-200/75"
                      >
                        <span className="sr-only">Twitter</span>
                        <Twitter />
                      </a>
                    </li>
                  )}

                  {settingStore.social_whatsapp && (
                    <li>
                      <a
                        href={settingStore.social_whatsapp}
                        rel="noreferrer"
                        target="_blank"
                        className="text-blue-600 transition hover:text-blue-200/75"
                      >
                        <span className="sr-only">Twitter</span>
                        <WhatsApp />
                      </a>
                    </li>
                  )}
                  {settingStore.social_pinterest && (
                    <li>
                      <a
                        href={settingStore.social_pinterest}
                        rel="noreferrer"
                        target="_blank"
                        className="text-blue-600 transition hover:text-blue-200/75"
                      >
                        <span className="sr-only">Twitter</span>
                        <Pinterest />
                      </a>
                    </li>
                  )}

                  {settingStore.social_linkedin && (
                    <li>
                      <a
                        href={settingStore.social_linkedin}
                        rel="noreferrer"
                        target="_blank"
                        className="text-blue-600 transition hover:text-blue-200/75"
                      >
                        <span className="sr-only">Twitter</span>
                        <Linkedin />
                      </a>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
