import React, { useState } from "react";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CallsFilterNav from "./CallsFilterNav";

export default function CallsHistoryNavbar(props) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div className="z-[1] bg-[#f7f9fc] text-[12px] px-3 py-2 fixed sm:top-[320px] sm:left-[256px] left-[356px] right-[300px] sm:right-0 md:top-[320px] md:right-0 top-[103px] flex">
      <div className="font-bold text-[15px]">History</div>
      <div className="flex ml-auto gap-4">
        <div>
          <button>All</button>
        </div>
        <div className="sm:hidden md:hidden lg:visible">
          <button>Missed</button>
        </div>
        <div className="sm:hidden md:hidden lg:visible">
          <button>Incoming</button>
        </div>
        <div>
          <button>Voicemail</button>
        </div>
        <div>
          <button
            onClick={() => {
              setIsFilterOpen(true);
            }}
          >
            <FilterListOutlinedIcon />
          </button>
        </div>
      </div>
      <CallsFilterNav filterOpen={isFilterOpen} onClose={()=>{setIsFilterOpen(false)}}/>
    </div>
  );
}
