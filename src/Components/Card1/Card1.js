import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const statsData = [
  {
    title: "Total Revenue",
    description: "Last 30 days",
    value: "$82,650",
    icon: <AttachMoneyIcon color="primary" />,
    change: 11,
    increase: true,
  },
  {
    title: "Total Order",
    description: "Last 30 days",
    value: 1645,
    icon: <ShoppingCartIcon color="primary" />,
    change: 11,
    increase: true,
  },
  {
    title: "Total Customer",
    description: "Last 30 days",
    value: "1,462",
    icon: <PeopleIcon color="primary" />,
    change: 12,
    increase: false,
  },
  {
    title: "Pending Delivery",
    description: "Last 30 days",
    value: 117,
    icon: <LocalShippingIcon color="primary" />,
    change: 0,
    increase: true,
  },
];

const Card1 = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(220px, 1fr))"
      gap={2}
      p={2}
    >
      {statsData.map((stat, index) => (
        <Card
          key={index}
          sx={{ minWidth: 200, p: 2, boxShadow: 3, borderRadius: "10px" }}
        >
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" flexDirection="column" textAlign="left">
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  sx={{ fontWeight: 700, mt: "-18px" }}
                >
                  {stat.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: "-5px", ml: index < 3 ? "3px" : "0px" }}
                >
                  {stat.description}
                </Typography>
              </Box>
              {stat.icon}
            </Box>
            <Box display="flex" justifyContent="space-between" mt="20px">
            <Typography variant="h5" fontWeight="bold">
              {stat.value}
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mt={1}>
              {stat.increase ? (
                <ArrowUpwardIcon sx={{ color: "green",fontSize:"14px" }} />
              ) : (
                <ArrowDownwardIcon sx={{ color: "red",fontSize:"14px" }} />
              )}
              <Typography
                variant="body2"
                color={stat.increase ? "green" : "red"}
              sx={{fontSize:"12px"}}
              >
                {stat.change}%
              </Typography>
            </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Card1;
