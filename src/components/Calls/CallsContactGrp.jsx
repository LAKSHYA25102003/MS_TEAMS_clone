import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import CallsContactGrpModal from "./CallsContactGrpModal";
import CallsContactDetailsCard from "./CallsCard/CallsContactDetailsCard";
export default function CallsContactGrp() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
    <div className="bg-[#f7f9fc] px-3 shadow-sm shadow-[#b0aeae] fixed md:w-auto md:left-[356px] md:top-[114px] md:bottom-[300px] sm:w-auto sm:left-[256px] sm:top-[115px] sm:bottom-[300px] bottom-0 right-0 top-[103px] w-[300px]">
      <div className="flex">
        <div className='md:hidden sm:hidden mt-2 font-bold text-[12px]'>Contact Grps</div>
        <button onClick={()=>{setIsOpen(true)}} className="mt-1 ml-auto"><AddIcon/></button>
      </div>
      <hr className='md:hidden sm:hidden mt-2'/>
      <div className='mx-2 mt-3 text-[13px]'>Speed Dial</div>
      <div className='md:hidden sm:hidden mx-2 mt-10 text-[13px]'>Other Contacts</div>
    </div>
    <CallsContactGrpModal open={isOpen} onClose={()=>{setIsOpen(false)}}/>
    
    </>
  );
}
