"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Linkedin } from "lucide-react";
import { getStoreState } from "@/Redux/store";
import {
  FacebookOutlined,
  Pinterest,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import Image from "next/image";
import DeliveryCard from "../deliveryCard";
import UseIsClient from "@/hooks/IsClient";

export default function Fooetr() {
  const pathName = usePathname();
  let [UtlAuthPage, setUtlAuthPage] = useState(true);
  const isclient = UseIsClient();

  useEffect(() => {
    setUtlAuthPage(pathName.includes("auth"));
  }, [pathName]);
  let settingStore = useSelector(getStoreState).HomeSetting;
  settingStore = settingStore?.settingData;

  return (
    <>
      {isclient && !UtlAuthPage && settingStore && (
        <footer className="bg-stone-100  shadow-md shadow-black pt-10 mt-28 print:hidden">
          <DeliveryCard />

          <div className="mx-auto w-full px-4 pb-6 pt-2 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
            <div className="my-16 flex flex-wrap gap-10  justify-around w-full">
              {settingStore.TopCategoryFooter && (
                <div className="text-center sm:text-left md:max-w-96">
                  <p className="text-lg font-medium text-gray-900">
                    {settingStore.footer_block_two_title || "Top Category"}
                  </p>
                  <div className="flex gap-3 text-sm justify-center md:justify-start">
                    <ul className="mt-8 space-y-4 text-sm text-center">
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
                          {settingStore.footer_block_two_link_two_title}
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
                  {settingStore.footer_block_three_title}
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href={settingStore.footer_block_three_link_one}
                    >
                      {settingStore.footer_block_three_link_one_title}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href={settingStore.footer_block_three_link_two}
                    >
                      {settingStore.footer_block_three_link_two_title}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href={settingStore.footer_block_three_link_three}
                    >
                      {settingStore.footer_block_three_link_three_title}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href={settingStore.footer_block_three_link_four}
                    >
                      {settingStore.footer_block_three_link_four_title}
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

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href={settingStore.footer_block_one_link_two}
                      >
                        {settingStore.footer_block_one_link_two_title}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href={settingStore.footer_block_one_link_three}
                      >
                        {settingStore.footer_block_one_link_three_title}
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href={settingStore.footer_block_one_link_four}
                      >
                        {settingStore.footer_block_one_link_four_title}
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              <div className="text-center sm:text-left flex justify-center md:items-start flex-col items-center">
                <p className="text-lg font-medium text-gray-900">
                  <Image
                    alt="logo"
                    width={200}
                    height={200}
                    src={settingStore.Footer_logo_image}
                  />
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>Tel:{settingStore.footer_block_four_address}</li>
                  <li>Tel:{settingStore.footer_block_four_phone}</li>
                  <li>Email:{settingStore.footer_block_four_email}</li>
                </ul>
              </div>
            </div>
            <hr className="border border-gray-200 w-1/2 block"/>
            <div className="mt-10 w-full">
              <ul className="flex items-center flex-wrap justify-around">
                <li>
                  <p>Follow Us</p>
                  
                  {settingStore.Social_Links && (
                    <ul className="mt-3 flex  justify-center gap-6">
                      {settingStore.social_facebook && (
                        <li>
                          <a
                            href={settingStore.social_facebook}
                            rel="noreferrer"
                            target="_blank"
                            className="text-base-color-500 transition hover:text-red-200/75"
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
                            className="text-base-color-500 transition hover:text-red-200/75"
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
                            className="text-base-color-500 transition hover:text-red-200/75"
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
                            className="text-base-color-500 transition hover:text-red-200/75"
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
                            className="text-base-color-500 transition hover:text-red-200/75"
                          >
                            <span className="sr-only">Twitter</span>
                            <Linkedin />
                          </a>
                        </li>
                      )}
                    </ul>
                  )}
                </li>
                <li className="text-center">
                  <span>Call Us Today!</span>
                  <h1 className="text-2xl text-base-color-500 font-semibold">
                   {settingStore.footer_block_four_phone}
                  </h1>
                </li>
                <li className="hidden md:block">
                  <Image
                    width={300}
                    height={300}
                    alt="er"
                    src={settingStore.PaymentMethod_logo}
                  />
                </li>
              </ul>
            </div>

            <div className="mt-16 border-t border-gray-100 pt-6 justify-center flex items-center">
              <p className="text-center text-sm text-gray-500 sm:text-left">
                Copyright 2024 @ HtmlLover, All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
