import React from "react";
import cardImage from "../../images/image2.jpeg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function SideBar() {
  return (
    <div class="fixed top-[54px] bottom-0 border-2 border-black">
      <button class="mt-4 ml-4">
        <ArrowBackIosIcon /> All Teams
      </button>
      <div>
        <img class="rounded-md w-[100px] ml-4" src={cardImage}></img>
      </div>
      <div class='ml-4'>
        Grp_WHATEVER <MoreHorizIcon />
      </div>
      <div class='ml-4'>General</div>
    </div>
  );
}
