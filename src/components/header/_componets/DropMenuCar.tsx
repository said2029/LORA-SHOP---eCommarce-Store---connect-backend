import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import Link from "next/link";

export default function DropMenuCar({
  categorys,
  name,
}: {
  categorys: { categores: []; MaxCategores: 0 };
  name:"Categorys"
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="z-30">
      <button id="basic-button" onClick={handleClick}>
        <DragIndicatorIcon />
        {name}
        <KeyboardArrowDownIcon
        
          sx={{ rotate: anchorEl ? "180deg" : "0deg", transition: "0.3s" }}
        />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {categorys &&
          categorys.categores?.map((e: { name: string,_id:string }) => {
            return <MenuItem  key={e._id} onClick={handleClose}><Link href={`/Products?category=${e.name}`}>{e.name}</Link></MenuItem>;

          })}
      </Menu>
    </div>
  );
}
