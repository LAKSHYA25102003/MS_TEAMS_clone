import React from "react";
import cardImage from "../../images/image2.jpeg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div class="z-[1] bg-[#ebebeb] shadow-lg shadow-[#b0aeae] w-[300px]  fixed top-[54px] bottom-0 ">
      <Link to='/'><button class="mt-4 ml-4">
        <ArrowBackIosIcon /> All Teams
      </button></Link>
      <div class='my-5'>
        <img class="rounded-md w-[100px] ml-4" src={cardImage}></img>
      </div>
      <div class='my-5 flex ml-4'>
        <div>Grp_WHATEVER</div> 
        <div class='ml-auto mr-2'><MoreHorizIcon /></div>
      </div>
      <div class='my-5 ml-4'>General</div>
    </div>
  );
}
