import React from "react";
import "./styles.css";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Headings from "../../constants/Headings";

const orders = [
  {
    name: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    name: "Jane Cooper",
    orderNo: "48965786",
    amount: "$305.02",
    status: "Delivered",
  },
  {
    name: "Guy Hawkins",
    orderNo: "78985215",
    amount: "$54.88",
    status: "Cancelled",
  },
  {
    name: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
  },
  {
    name: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    name: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
];

const Orders = () => {
  return (
    <Card className="recent-orders-card">
      <CardContent>
        <h2 className="title">{Headings.Orders}</h2>
        <TableContainer className="table-container">
          <Table
            sx={{
              minWidth: 650,
              "& .MuiTableCell-root": {
                borderColor: "#2C2D35",
              },
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Order No.</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <div className="customer-cell">
                      <img src="https://picsum.photos/200" alt="" />
                      <span>{row.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{row.orderNo}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                    {row.status == "Delivered" ? (
                      <div
                        className="status-cell"
                        style={{
                          backgroundColor: "#165246",
                          color: "#00C186",
                          textAlign: "center",
                          borderRadius: "20px",
                        }}
                      >
                        {row.status}
                      </div>
                    ) : (
                      <div
                        className="status-cell"
                        style={{
                          backgroundColor: "#5C3538",
                          color: "#E95F55",
                          textAlign: "center",
                          borderRadius: "20px",
                        }}
                      >
                        {row.status}
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Orders;
