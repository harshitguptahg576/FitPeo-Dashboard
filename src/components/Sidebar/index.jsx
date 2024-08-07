import React, { useState } from "react";
import "./styles.css";
import Images from "../../constants/Images";
import {
  Home,
  AssessmentOutlined,
  AssignmentTurnedInOutlined,
  InventoryOutlined,
  AccountBalanceWalletOutlined,
  LocalMallOutlined,
  Menu,
} from "@mui/icons-material";
import { COLORS } from "../../constants/Theme";

const Sidebar = () => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="sidebar" style={navToggle ? { height: "inherit" } : {}}>
      <div className="sidebar-toggle" onClick={() => setNavToggle(!navToggle)}>
        <Menu fontSize="large" style={{ color: "#7292ff" }} />
        {/* <img src={Images.logo} className="logo" /> */}
      </div>

      {navToggle && (
        <div className="sidebar-logo-toggle">
          <img src={Images.logo} className="logo" />
        </div>
      )}

      <div className="sidebar-logo">
        <img src={Images.logo} className="logo" />
      </div>

      <ul className="sidebar-menu">
        <li title="Dashboard" className="active menu-icon">
          {/* <img src={Images.homeIcon} /> */}
          <Home fontSize="large" />
        </li>
        <li title="Reports" className="menu-icon">
          {/* <img src={Images.statsIcon} /> */}
          <AssessmentOutlined fontSize="large" />
        </li>
        <li title="Activity" className="menu-icon">
          {/* <img src={Images.todoIcon} /> */}
          <InventoryOutlined fontSize="large" />
        </li>
        <li title="Wallet" className="menu-icon">
          {/* <img src={Images.walletIcon} /> */}
          <AccountBalanceWalletOutlined fontSize="large" />
        </li>
        <li title="Shop" className="menu-icon">
          {/* <img src={Images.shopIcon} /> */}
          <LocalMallOutlined fontSize="large" />
        </li>
      </ul>
      {navToggle && (
        <ul className=" sidebar-menu-toggle">
          <li title="Dashboard" className="active menu-icon">
            {/* <img src={Images.homeIcon} /> */}
            <Home fontSize="large" />
          </li>
          <li title="Reports" className="menu-icon">
            {/* <img src={Images.statsIcon} /> */}
            <AssessmentOutlined fontSize="large" />
          </li>
          <li title="Activity" className="menu-icon">
            {/* <img src={Images.todoIcon} /> */}
            <InventoryOutlined fontSize="large" />
          </li>
          <li title="Wallet" className="menu-icon">
            {/* <img src={Images.walletIcon} /> */}
            <AccountBalanceWalletOutlined fontSize="large" />
          </li>
          <li title="Shop" className="menu-icon">
            {/* <img src={Images.shopIcon} /> */}
            <LocalMallOutlined fontSize="large" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
