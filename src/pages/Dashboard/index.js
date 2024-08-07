import React from "react";
import "./styles.css";
import { Box, Grid, Typography } from "@mui/material";
import StatsBox from "../../components/StatsBox";
import Activity from "../../components/Activity";
import Orders from "../../components/Orders";
import Feedback from "../../components/Feedbacks";
import Headings from "../../constants/Headings";
import Images from "../../constants/Images";
import { COLORS } from "../../constants/Theme";
import ProfitStatsBox from "../../components/ProfitStatsBox";
import MenusBox from "../../components/MenusBox";

const Dashboard = () => {
  const Stats = [
    {
      title: "Total Orders",
      value: 75,
      icon: Images.ordersIcon,
      color: COLORS.blue,
      percentage: 3,
    },
    {
      title: "Total Delivered",
      value: 70,
      icon: Images.deliveredIcon,
      color: COLORS.green,
      percentage: -3,
    },
    {
      title: "Total Cancelled",
      value: 5,
      icon: Images.cancelledIcon,
      color: COLORS.red,
      percentage: 3,
    },
    {
      title: "Total Revenue",
      value: 12000,
      icon: Images.revenuesIcon,
      color: COLORS.pink,
      percentage: -3,
    },
  ];

  return (
    <div className="dashboard">
      <h1 className="title">{Headings.Dashboard}</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Grid container spacing={2}>
            {Stats?.map((s) => (
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <StatsBox
                  title={s?.title || "-"}
                  value={s?.value || 0}
                  icon={s?.icon || Images.ordersIcon}
                  color={s?.color || ""}
                  percentage={s?.percentage || 0}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Net Profit */}
        <Grid item xs={12} sm={12} md={12} lg={5}>
          <ProfitStatsBox
            title="Net Profit"
            value="6759.25"
            percentage={3}
            progress={70}
          />
        </Grid>
      </Grid>
      <Box sx={{ height: "30px" }}></Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Activity />
        </Grid>
        <Grid item xs={12} md={5}>
          <MenusBox />
        </Grid>
      </Grid>
      <Box sx={{ height: "30px" }}></Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Orders />
        </Grid>
        <Grid item xs={12} md={5}>
          <Feedback />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
