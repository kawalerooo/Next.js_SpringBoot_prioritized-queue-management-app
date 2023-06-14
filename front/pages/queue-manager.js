import React, {useEffect, useState} from "react";
import InformationBar from "../components/InformationBar";
import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const QueueManager = ({ sortedTickets }) => {
  const router = useRouter();
  const [startMeeting, setStartMeeting] = useState(false);

  const saveUpdatedTicket = async (createdTicket) => {
    await fetch("/api/save_ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdTicket),
    });

    await router.push("/queue-manager");
  };


  const handleNextPersonButton = async () => {
    const newTicket = {...sortedTickets[0]};

    if (newTicket.enterDate === null) {
      newTicket.enterDate = new Date();
      setStartMeeting(true);
    } else {
      newTicket.leaveDate = new Date();
      setStartMeeting(false);
    }
    await saveUpdatedTicket(newTicket);
  };

  return (
    <div>
      <Stack
        direction="row"
        spacing={3}
        sx={{ pl: "20%", pt: "5%", pr: "20%" }}
      >
        <Stack spacing={2} justifyContent="space-between">
          <Button
              variant="contained"
              sx={{ width: "100%", height: '100%' }}
              onClick={handleNextPersonButton}
              disabled={startMeeting}
          >
            Zacznij wizytę
          </Button>
          <Button
              variant="contained"
              sx={{ width: "100%", height: '100%' }}
              onClick={handleNextPersonButton}
              disabled={!startMeeting}
          >
            Zakończ wizytę
          </Button>
        </Stack>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="h6">Informacje o aktualnej osobie:</Typography>
            <Typography>Imię: {sortedTickets[0].firstName}</Typography>
            <Typography>Nazwisko: {sortedTickets[0].surName}</Typography>
            <Typography>Typ biletu: {sortedTickets[0].ticketType}</Typography>
            <Typography>Data wejścia: {sortedTickets[0].enterDate}</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6">Informacje o następnej osobie:</Typography>
            <Typography>Imię: {sortedTickets[1].firstName}</Typography>
            <Typography>Nazwisko: {sortedTickets[1].surName}</Typography>
            <Typography>Typ biletu: {sortedTickets[1].ticketType}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default QueueManager;

export async function getServerSideProps() {
  let res = await fetch(`http://localhost:8080/api/v1/tickets`);
  const tickets = await res.json();

  let sortedTickets = [];
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].leaveDate === null) {
      sortedTickets.push(tickets[i]);
    }
  }
  sortedTickets.sort((a, b) => (a.ticketId < b.ticketId ? 1 : -1));
  sortedTickets.sort((a, b) => (a.ticketPriority > b.ticketPriority ? 1 : -1));

  if (sortedTickets.length === 1) {
    sortedTickets.push({
      ticketId: tickets.length,
      firstName: "",
      surName: "",
      ticketType: "",
      ticketPriority: "NORMAL",
      enterDate: "",
      leaveDate: "",
    });
  } else if (sortedTickets.length === 0) {
    for (let i = 0; i < 2; i++) {
      sortedTickets.push({
        ticketId: tickets.length,
        firstName: "",
        surName: "",
        ticketType: "",
        ticketPriority: "NORMAL",
        enterDate: "",
        leaveDate: "",
      });
    }
  }

  return { props: { sortedTickets } };
}
