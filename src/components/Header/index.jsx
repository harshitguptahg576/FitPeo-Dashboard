import React from "react";
import "./styles.css";
import Images from "../../constants/Images";
import {
  MailOutlined,
  NotificationsOutlined,
  SearchOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <div className="search-icon">
          <SearchOutlined />
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="header-menu">
        {/* <div className="sidebar-logo">
          <img src={Images.logo} className="logo" />
        </div> */}
        <div className="header-icons">
          <div className="icon">
            <MailOutlined />
          </div>
          <div className="icon">
            <SettingsOutlined />
          </div>
          <div className="icon" style={{ position: "relative" }}>
            <NotificationsOutlined />
            <div className="badge"></div>
          </div>
        </div>
        <div className="profile-icon">
          <img src="https://picsum.photos/200" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
