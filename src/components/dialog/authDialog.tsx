"use client";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { CircleUserRound } from "lucide-react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import Log_in from "./_components/log_in";
import Sign_in from "./_components/sign_up";

export class Contarole {
  DeloadStata: Dispatch<SetStateAction<boolean>> | undefined;
  openAuthDelog: () => void;
  CloseAuthDelog: () => void;
  constructor() {
    this.openAuthDelog = () => {
      if (this.DeloadStata != undefined) this.DeloadStata(true);
    };
    this.CloseAuthDelog = () => {
      if (this.DeloadStata != undefined) this.DeloadStata(false);
    };
  }
}
export const ContaroleDeloag = new Contarole();

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
  const [open, setOpen] = useState(false);
  ContaroleDeloag.DeloadStata = setOpen;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectMode = (mode: string) => {
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
      </Dialog>
    </Fragment>
  );
}
