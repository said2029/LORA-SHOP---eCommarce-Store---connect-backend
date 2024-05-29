import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

export default function DropMenuCar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='z-30'>
      <button
        id="basic-button"
        onClick={handleClick}
      >
        <DragIndicatorIcon/>
        Categorys <KeyboardArrowDownIcon sx={{rotate:anchorEl?"180deg":"0deg",transition:"0.3s"}}/>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Smart Phone</MenuItem>
        <MenuItem onClick={handleClose}>Earbuds</MenuItem>
        <MenuItem onClick={handleClose}>Smartwatch</MenuItem>
        <MenuItem onClick={handleClose}>Trimmers</MenuItem>
      </Menu>
    </div>
  );
}
