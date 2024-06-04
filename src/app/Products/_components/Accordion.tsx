import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  AccordionProps,
  AccordionHeaderProps,
} from "@material-tailwind/react";

function Icon({ id, open }: { id: number; open: number | null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionFilter({
  children,
  name,
}: {
  children:JSX.Element|JSX.Element[];
  name: string;
}) {
  const [open, setOpen] = React.useState<number | null>(null);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <AccordionHeader
          className="text-sm"
          onClick={() => handleOpen(1)}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {name}
        </AccordionHeader>
        <AccordionBody>{children}</AccordionBody>
      </Accordion>
    </>
  );
}
