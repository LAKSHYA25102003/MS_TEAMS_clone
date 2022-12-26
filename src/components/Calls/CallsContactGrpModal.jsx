import React from 'react'
import * as ReactDOM from 'react-dom';

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}
const MODAL_STYLES = {
  top:'30%',
  bottom:'30%',
  left:'30%',
  right:'30%',
  position:'fixed',
  tranform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  zIndex: 1000,
  padding:'10px'
};
export default function CallsContactGrpModal({children, open, onClose}) {
  if(!open)return null
  return ReactDOM.createPortal(
    <>
    <div style={OVERLAY_STYLES} />
    <div style={MODAL_STYLES} class='rounded-lg bg-[#f7f9fc] border-2 border-grey'>
        <div className='font-bold'>Create a new contact group</div>
        <div className='text-[13px]'>Organize your contacts into groups to find them more easily.</div>
        <div className='mt-6 text-[13px]'>Contact group name</div>
        <div>
        <label className="relative block" >
        <input className="placeholder:text-slate-400 block bg-white w-full h-[25px] py-1 border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Type a contact group name" type="text" name="search"/>
        </label>
        </div>
        <div className='my-2'>
          <button onClick={onClose} className='rounded-sm px-2 border-2 border-grey font-bold'>Cancel</button>
          <button className='rounded-sm px-2 mx-2 my-2 text-white bg-[#444791]'>Create</button>
        </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}
