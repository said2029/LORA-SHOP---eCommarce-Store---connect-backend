"use client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { CircleUserRound } from "lucide-react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import Log_in from "./_components/log_in";
import Sign_in from "./_components/sign_up";
import VerifayEmail from "./_components/verifayEmail";
import ForgetPassword from "./_components/forgetPassword";
import ResetPassword from "./_components/ResetPassword";
import { useCookies } from "react-cookie";
import { cookies } from "next/headers";



export class Contaroller {
  DeloadStata: Dispatch<SetStateAction<boolean>> | undefined;
  openAuthDelog: () => void;
  CloseAuthDelog: () => void;
  log_out: () => void;
  setCookis2: any;
  constructor() {
    this.openAuthDelog = () => {
      if (this.DeloadStata != undefined) this.DeloadStata(true);
    };
    this.CloseAuthDelog = () => {
      if (this.DeloadStata != undefined) this.DeloadStata(false);
    };

    this.log_out = () => {
      if (typeof window !== "undefined") {
        try {
          window.localStorage.removeItem("UserImage");
          window.localStorage.removeItem("UserId");
          cookies().delete("access_token");
        } catch (error) {
          console.error("Failed to remove local storage items:", error);
        }
      }
      window.location.reload();
    };
  }
}
export const ContarollerAuthDeloag = new Contaroller();

export default function AuthDialog({
  name,
  variantBtn,
  useIcon,
  className = "flex items-center gap-2 text-white bg-base-color-500 hover:bg-base-color-200/75",
}: {
  name: string;
  variantBtn: "outlined" | "contained" | "text";
  useIcon: true | false;
  className?: string;
}) {
  const [mode, setMode] = useState("log in");
  const [_, setCookis] = useCookies(["access_token"]);


  const [open, setOpen] = useState(false);
  ContarollerAuthDeloag.DeloadStata = setOpen;
  ContarollerAuthDeloag.setCookis2 = setCookis;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [body, set_body] = useState();
  const selectMode = (mode: string, body?: any) => {
    set_body(body);
    setMode(mode);
  };

  return (
    <Fragment>
      <Button
        className={className}
        variant={variantBtn}
        onClick={handleClickOpen}
      >
        {useIcon && <CircleUserRound size={20} />}
        <span>{name}</span>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {mode == "log in" && <Log_in selectMode={selectMode} />}
        {mode == "sign in" && <Sign_in selectMode={selectMode} />}
        {mode == "verifayEmail" && (
          <VerifayEmail next="log in" selectMode={selectMode} bodyUser={body} />
        )}

        {mode == "ForgetPassword" && <ForgetPassword selectMode={selectMode} />}
        {mode == "ResetPassword" && <ResetPassword bodyUser={body} selectMode={selectMode} />}
      </Dialog>
    </Fragment>
  );
}
