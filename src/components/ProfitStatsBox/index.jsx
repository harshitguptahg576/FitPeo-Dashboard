import React from "react";
import "./styles.css";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import {
  ArrowDropDownOutlined,
  ArrowDropUpOutlined,
} from "@mui/icons-material";

const ProfitStatsBox = ({ title, value, percentage, progress }) => {
  return (
    <Card
      className="profit-stats stats-card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <CardContent>
        <div className="stats-header">
          <Typography variant="h6" className="stats-title">
            {title}
          </Typography>
        </div>
        <div className="stats-body" style={{ flexDirection: "column" }}>
          <Typography variant="h4" className="stats-value">
            {"$"}
            {parseFloat(value).toFixed(2)}
          </Typography>
          {parseInt(percentage) < 0 ? (
            <Typography
              variant="h6"
              className="stats-percent"
              style={{ color: "#E75653", marginLeft: "-10px" }}
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
              style={{ color: "#02C88D", marginLeft: "-10px" }}
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
      {progress && (
        <div style={{ textAlign: "center" }}>
          <Box
            sx={{
              position: "relative",
              display: "inline-flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <CircularProgress
              variant="determinate"
              size={120}
              thickness={5}
              value={progress || 0}
            />
            <Box
              sx={{
                top: 10,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                component="h4"
                color="#ffffff"
                sx={{ fontWeight: "bold" }}
              >{`${Math.round(progress)}%`}</Typography>
              <Typography
                variant="subtitle2"
                component="p"
                color="#dcdcde"
                sx={{
                  textAlign: "center",
                  width: "60px",
                  fontSize: "10px",
                }}
              >{`Goal Completed`}</Typography>
            </Box>
          </Box>
          <Typography
            variant="caption"
            sx={{ fontSize: "10px", fontWeight: "400", color: "#dcdcde" }}
          >
            *The values here has been rounded off.
          </Typography>
        </div>
      )}
    </Card>
  );
};

export default ProfitStatsBox;
