"use client";
import { getStoreState } from "@/Redux/store";
import UseIsClient from "@/hooks/IsClient";
import React from "react";
import { useSelector } from "react-redux";

export default function ColorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = useSelector(getStoreState).storeSetting;

  let baseColor = "#10b981";
  let secendColor = "#059669";

  baseColor = data?.settingData.Base_Color_option;
  secendColor = data?.settingData.Secend_Color_option;
  const iscl = UseIsClient();

  return (
    <div>
      {iscl && (
        <style>
          {`
            .bg-base-color-500 {
              background-color: ${baseColor};
            }
            .bg-base-color-200/75 {
              background-color: ${secendColor};
            }
            .text-base-color-500 {
              color: ${baseColor};
            }
            .text-base-color-200/75  {
              color: ${secendColor};
            }
            .border-base-color-200/75 {
                border-color: ${secendColor};
            }
            .border-base-color-500 {
               border-color: ${baseColor};

            }

          `}
        </style>
      )}

      {children}
    </div>
  );
}
