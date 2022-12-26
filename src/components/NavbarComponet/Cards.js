import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import cardImage from "../../images/image2.jpeg";
import { Link } from 'react-router-dom';

export default function Cards() {
  return (
    <Link to="/grp">
    <button className="bg-[#ffffff] shadow-sm shadow-[#b0aeae] border-2 border-grey mx-2 my-2 grid grid-cols-1">
        <div className="text-right"><MoreHorizIcon/></div>
        <div className='scale-50 text-center m-auto'><img src={cardImage} alt="Grp displayPicture"/></div>
        <div className='text-center mb-6 mx-auto'>Grp_WHATEVER</div>
    </button>
    </Link>
  )
}
