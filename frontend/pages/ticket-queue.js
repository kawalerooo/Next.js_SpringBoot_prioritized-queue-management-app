import React from "react";
import {Button, Stack} from "@mui/material";
import InformationBar from "../components/InformationBar";
import Typography from "@mui/material/Typography";
import QueueActualTicket from "../components/QueueActualTicket";
import QueueTable from "../components/QueueTable";
import {useRouter} from "next/router";

const TicketQueuePage = ({ tickets }) => {
  const router = useRouter();
  let sortedTickets = [];
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].leaveDate === null) {
      sortedTickets.push(tickets[i]);
    }
  }
  sortedTickets.sort((a, b) => (a.ticketId < b.ticketId ? 1 : -1));
  sortedTickets.sort((a, b) => (a.ticketPriority > b.ticketPriority ? 1 : -1));

  setTimeout(async function () {
    await router.push("/ticket-queue");
  }, 1000);

  return (
    <div>
      <InformationBar barTitle={"Kolejka oczekujących"} />
      <Stack spacing={3}>
        <QueueActualTicket tickets={sortedTickets} />
        <Typography>Następni:</Typography>
        <QueueTable tickets={sortedTickets} />
      </Stack>
    </div>
  );
};

export default TicketQueuePage;

export async function getServerSideProps() {
  let res = await fetch(`http://localhost:8080/api/v1/tickets`);
  const tickets = await res.json();

  return { props: { tickets } };
}
