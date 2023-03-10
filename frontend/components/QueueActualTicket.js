import React from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { console } from "next/dist/compiled/@edge-runtime/primitives/console";

const QueueActualTicket = ({ tickets }) => {
  const getNextTicket = () => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].leaveDate === null) return tickets[i];
    }
  };

  return (
    <div>
      <Stack alignItems="center">
        <Typography variant="h3">
          Zapraszamy bilet nr.: {getNextTicket().ticketId}
        </Typography>
        <Typography variant="h5">
          Imię: {getNextTicket().firstName} Nazwisko: {getNextTicket().surName}
        </Typography>
        <Typography variant="body1">
          Typ biletu: {getNextTicket().ticketType}
        </Typography>
      </Stack>
    </div>
  );
};

export default QueueActualTicket;
