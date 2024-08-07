import React, { useCallback } from "react";
import "./styles.css";
import { Box, Card, CardContent, Typography } from "@mui/material";
import {
  ArrowDropDownOutlined,
  ArrowDropUpOutlined,
  ArrowForwardIos,
} from "@mui/icons-material";
import Images from "../../constants/Images";
import { COLORS } from "../../constants/Theme";

const MenusBox = () => {
  return (
    <Box className="menu-box">
      <Card className="menu-card">
        <CardContent className="menu-wrapper">
          <div className="menu-header">
            <div className="menu-icon">
              <img
                src={Images.goalIcon}
                alt="menu"
                style={{ backgroundColor: COLORS.red }}
              />
            </div>
            <Typography variant="h6" className="menu-title">
              Goals
            </Typography>
          </div>
          <div className="menu-arrow">
            <ArrowForwardIos fontSize="small" style={{ color: "#dcdcde" }} />
          </div>
        </CardContent>
      </Card>
      <Card className="menu-card">
        <CardContent className="menu-wrapper">
          <div className="menu-header">
            <div className="menu-icon">
              <img
                src={Images.dishesIcon}
                alt="menu"
                style={{ backgroundColor: COLORS.blue }}
              />
            </div>
            <Typography variant="h6" className="menu-title">
              Popular Dishes
            </Typography>
          </div>
          <div className="menu-arrow">
            <ArrowForwardIos fontSize="small" style={{ color: "#dcdcde" }} />
          </div>
        </CardContent>
      </Card>
      <Card className="menu-card">
        <CardContent className="menu-wrapper">
          <div className="menu-header">
            <div className="menu-icon">
              <img
                src={Images.menuIcon}
                alt="menu"
                style={{ backgroundColor: COLORS.cyan }}
              />
            </div>
            <Typography variant="h6" className="menu-title">
              Menus
            </Typography>
          </div>
          <div className="menu-arrow">
            <ArrowForwardIos fontSize="small" style={{ color: "#dcdcde" }} />
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MenusBox;
