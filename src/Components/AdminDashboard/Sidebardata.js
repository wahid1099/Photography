import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { AiFillFolderAdd } from "react-icons/ai";
import { BsViewStacked } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

export const SidebarData = [
  {
    title: "Home",
    path: "/admindashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "AddServices",
    path: "/addservice",
    icon: <AiFillFolderAdd />,
    cName: "nav-text",
  },
  {
    title: "View Services",
    path: "/allservices",
    icon: <BsViewStacked />,
    cName: "nav-text",
  },
  {
    title: "Manage Orders",
    path: "/allorders",
    icon: <BiCart />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Return Main Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
];
