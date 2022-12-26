import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import Groups3Icon from "@mui/icons-material/Groups3";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CallIcon from "@mui/icons-material/Call";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";
export default function SideBarComponent() {
  return (
    <div className="bg-[#ebebeb] shadow-lg shadow-[#b0aeae] z-[1] fixed left-0 top-[42px] bottom-0 text-center text-[9px] w-14">
      <div>
        <button className="my-2">
          <div>
            <NotificationsIcon />
          </div>
          <div>Activity</div>
        </button>
      </div>

      {/* <button class='grid my-2 grid-cols-1'>
            <div><ChatIcon/></div>
            <div>Chats</div>
        </button> */}
      <div>
        <button className="my-2">
          <div>
            <ChatIcon />
          </div>
          <div>Chats</div>
        </button>
      </div>
      <Link to='/'>
        <button className="my-2">
          <div>
            <Groups3Icon />
          </div>
          <div>Teams</div>
        </button>
      </Link>
      <div>
        <button className="my-2">
          <div>
            <AssignmentIcon />
          </div>
          <div>Assignment</div>
        </button>
      </div>

      <div>
        <button className="my-2">
          <div>
            <CalendarMonthIcon />
          </div>
          <div>Calendar</div>
        </button>
      </div>

      <Link to='/calls'>
        <button className="my-2">
          <div>
            <CallIcon />
          </div>
          <div>Calls</div>
        </button>
      </Link>

      <div>
        <button className="my-2">
          <div>
            <InsertDriveFileIcon />
          </div>
          <div>Files</div>
        </button>
      </div>
      <div className="my-2">
        <button>
          <div>
            <HelpIcon />
          </div>
          <div>Help</div>
        </button>
      </div>
    </div>
  );
}
