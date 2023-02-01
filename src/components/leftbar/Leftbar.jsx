import LogoutIcon from '@mui/icons-material/Logout';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import HearingOutlinedIcon from '@mui/icons-material/HearingOutlined';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import React from "react";
import MenuLink from "../menuLink/MenuLink";
import "./leftbar.css";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <MenuLink icon={<AddHomeOutlinedIcon />} text="Homepage" />
        <MenuLink icon={<ListOutlinedIcon />} text="Lists" />
        <MenuLink icon={<ShoppingBasketOutlinedIcon />} text="Products" />
        <MenuLink icon={<GroupOutlinedIcon />} text="Groups" />
        <MenuLink icon={<FileCopyOutlinedIcon />} text="Pages" />
        <MenuLink icon={<PhotoSizeSelectActualOutlinedIcon />} text="Photos" />
        <MenuLink icon={<MovieCreationOutlinedIcon />} text="Videos" />
        <MenuLink icon={<ScheduleOutlinedIcon />} text="Schedule" />
        <MenuLink icon={<HearingOutlinedIcon />} text="Wishlist" />
        <MenuLink icon={<SettingsOutlinedIcon />} text="Settings" />
        <MenuLink icon={<LogoutIcon />} text="Logout" />
      </div>
    </div>
  );
}
