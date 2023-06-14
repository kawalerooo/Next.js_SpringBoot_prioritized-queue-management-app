import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";

export default function QueueTable({ tickets }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Numer biletu</TableCell>
            <TableCell align="right">Typ biletu</TableCell>
            <TableCell align="right">Priorytet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.slice(1).map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ticketId}
              </TableCell>
              <TableCell align="right">{row.ticketType}</TableCell>
              <TableCell align="right">{row.ticketPriority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
