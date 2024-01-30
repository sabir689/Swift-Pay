import { useState } from "react";
import Chart_fill from "../assets/icons/Chart_fill.png";
import control from "../assets/icons/control.png";
import logoIcon from "../assets/icons/logo.png";
import ChatIcon from "../assets/icons/Chart.png";
import UserIcon from "../assets/icons/User.png";
import CalendarIcon from "../assets/icons/Calendar.png";
import SearchIcon from "../assets/icons/Search.png";
import ChartIcon from "../assets/icons/Chart.png";
import FolderIcon from "../assets/icons/Folder.png";
import SettingIcon from "../assets/icons/Setting.png";
import { Link, NavLink, Outlet } from "react-router-dom";
const TestDashboard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: ChatIcon },
    { title: "Accounts", src: UserIcon, gap: true },
    { title: "Schedule", src: CalendarIcon },
    { title: "Search", src: SearchIcon },
    { title: "Analytics", src: ChartIcon },
    { title: "Files", src: FolderIcon, gap: true },
    { title: "Setting", src: SettingIcon },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } bg-gray-400 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logoIcon}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-[#212427] origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          ></h1>
        </div>
        <ul className="">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-md items-center gap-x-4 
              ${Menu.gap ? "mt-2" : "mt-2"} ${index === 0 && "bg-light-white"} 
              ${Menu.title === "Dashboard" ? "text-blue-500" : ""}`}
            >
              <NavLink
                to={
                  Menu.title === "Accounts"
                    ? "/dashboard/myDashboard"
                    : Menu.title === "Dashboard"
                    ? "/dashboard/myDashboard"
                    : Menu.title === "Inbox"
                    ? "/dashboard/receiveMoney"
                    : Menu.title === "Schedule"
                    ? "/dashboard/receiveMoney"
                    : Menu.title === "Search"
                    ? "/dashboard/sendMoney"
                    : Menu.title === "Analytics"
                    ? "/dashboard/receiveMoney"
                    : Menu.title === "Files"
                    ? "/dashboard/receiveMoney"
                    : Menu.title === "Setting"
                    ? "/dashboard/receiveMoney"
                    : ""
                }
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#49108B] bg-gray-200 py-2 px-5 w-full rounded-md"
                    : "text-gray-500"
                }
              >
                <div className="flex items-center justify-center gap-4">
                  <img src={Menu.src} />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default TestDashboard;
