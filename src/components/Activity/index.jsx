import React, { useCallback, useMemo, useState } from "react";
import "./styles.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import Headings from "../../constants/Headings";
import { Box, MenuItem, Select } from "@mui/material";

const Activity = () => {
  const [dateFilter, setDateFilter] = useState("monthly");

  const data = useMemo(
    () =>
      Array.from({ length: dateFilter == "weekly" ? 7 : 30 }, (_, i) => ({
        date: i + 1,
        activity: Math.floor(Math.random() * 15000) + 1000,
      })),
    [dateFilter]
  );

  const formatNumber = useCallback(
    (value) => {
      if (value < 10) {
        return value;
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
    [data]
  );

  return (
    <Box className="activity-container">
      <div className="chart-header">
        <h2 className="title">{Headings.Activity}</h2>
        <Select
          className="select"
          value={dateFilter}
          onChange={(event) => setDateFilter(event.target.value)}
        >
          <MenuItem value={"monthly"}>Monthly </MenuItem>
          <MenuItem value={"weekly"}>Weekly</MenuItem>
        </Select>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} stroke="#666" />
          <XAxis dataKey="date" tickLine={false} axisLine={false} />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => formatNumber(value)}
            domain={[0, "dataMax"]}
          />
          <Tooltip />
          <Bar
            dataKey="activity"
            fill="#7194FF"
            radius={[20, 20, 20, 20]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Activity;
