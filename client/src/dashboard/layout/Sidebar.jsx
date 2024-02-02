import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillDashboard, AiOutlinePlus } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { BiNews } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import Logo from "../../components/Logo";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-[250px] h-screen fixed left-0 top-0 bg-white">
      <div className="h-[70px] flex justify-center items-center">
        <Link to="/" >
          <Logo />
        </Link>
      </div>
      <ul className="px-3 flex flex-col gap-y-1 font-medium">
        <li>
          <Link
            to="/dashboard/admin"
            className={`px-3 ${
              pathname === "/dashboard/admin" ? "link-active" : "bg-white text-[#404040f6]"
            } link-general`}
          >
            <span className="text-xl">
              <AiFillDashboard />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/news"
            className={`px-3 ${
              pathname === "/dashboard/news" ? "link-active" : "bg-white text-[#404040f6]"
            } link-general`}
          >
            <span className="text-xl">
              <BiNews />
            </span>
            <span>News</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/writer/add"
            className={`px-3 ${
              pathname === "/dashboard/writer/add" ? "link-active" : "bg-white text-[#404040f6]"
            } link-general`}
          >
            <span className="text-xl">
              <AiOutlinePlus />
            </span>
            <span>Add Writer</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/writers"
            className={`px-3 ${
              pathname === "/dashboard/writers" ? "link-active" : "bg-white text-[#404040f6]"
            } link-general`}
          >
            <span className="text-xl">
              <FiUsers />
            </span>
            <span>Writers</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/profile"
            className={`px-3 ${
              pathname === "/dashboard/profile" ? "link-active" : "bg-white text-[#404040f6]"
            } link-general`}
          >
            <span className="text-xl">
              <ImProfile />
            </span>
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
