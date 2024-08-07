import React, { useCallback } from "react";
import "./styles.css";
import { Card, CardContent, Typography } from "@mui/material";
import {
  ArrowDropDownOutlined,
  ArrowDropUpOutlined,
} from "@mui/icons-material";

const StatsBox = ({ title, value, icon, color, percentage }) => {
  const formatNumber = useCallback(
    (value) => {
      if (value < 10) {
        return "0" + value;
      } else if (value < 1000) {
        return value.toString();
      } else if (value >= 1000 && value < 1000000) {
        return (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1) + "K";
      } else if (value >= 1000000 && value < 1000000000) {
        return (value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1) + "M";
      } else if (value >= 1000000000 && value < 1000000000000) {
        return (
          (value / 1000000000).toFixed(value % 1000000000 === 0 ? 0 : 1) + "B"
        );
      } else {
        return (
          (value / 1000000000000).toFixed(value % 1000000000000 === 0 ? 0 : 1) +
          "T"
        );
      }
    },
    [value]
  );

  return (
    <Card className="stats-card">
      <CardContent>
        <div className="stats-header">
          <div className="stats-icon">
            <img src={icon} alt="stats" style={{ backgroundColor: color }} />
          </div>
          <Typography variant="h6" className="stats-title">
            {title}
          </Typography>
        </div>
        <div className="stats-body">
          <Typography variant="h4" className="stats-value">
            {title == "Total Revenue" && "$"}
            {formatNumber(value)}
          </Typography>

          {parseInt(percentage) < 0 ? (
            <Typography
              variant="h6"
              className="stats-percent"
              style={{ color: "#E75653" }}
            >
              <ArrowDropDownOutlined
                fontSize="large"
                style={{ color: "#E75653" }}
              />{" "}
              {Math.abs(percentage)}%
            </Typography>
          ) : (
            <Typography
              variant="h6"
              className="stats-percent"
              style={{ color: "#02C88D" }}
            >
              <ArrowDropUpOutlined
                fontSize="large"
                style={{ color: "#02C88D" }}
              />{" "}
              {Math.abs(percentage)}%
            </Typography>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsBox;
