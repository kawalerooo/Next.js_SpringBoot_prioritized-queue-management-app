import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import {useRouter} from "next/router";

const TicketForm = ({tickets}) => {
  const router = useRouter();
  const ticket = {
    ticketId: tickets.length,
    firstName: "",
    surName: "",
    ticketType: "",
    ticketPriority: "NORMAL",
    enterDate: "",
    leaveDate: "",
  };
  const [createdTicket, setCreatedTicket] = useState(ticket);

  const handleTicketTypeChange = (value) => {
    let newTicket = { ...createdTicket };
    newTicket.ticketType = value;
    if (value === "bilet+") {
      newTicket.ticketPriority = "HIGH";
    }
    setCreatedTicket(newTicket);
  };

  const handleFirstNameChange = (value) => {
    let newTicket = { ...createdTicket };
    newTicket.firstName = value;
    setCreatedTicket(newTicket);
  };

  const handleSurNameChange = (value) => {
    let newTicket = { ...createdTicket };
    newTicket.surName = value;
    setCreatedTicket(newTicket);
  };

  const handleTakeTicketButton = async () => {
    await fetch("/api/save_ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdTicket),
    });

    await router.push("/ticket-queue");
  }

  return (
    <div>
      <Stack spacing={3}>
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-basic"
            label="Imie"
            variant="outlined"
            value={createdTicket.firstName}
            onChange={(e) => handleFirstNameChange(e.target.value)}
            sx={{ width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Nazwisko"
            variant="outlined"
            value={createdTicket.surName}
            onChange={(e) => handleSurNameChange(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Stack>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Typ biletu</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={createdTicket.ticketType}
            label="Typ biletu"
            onChange={(e) => handleTicketTypeChange(e.target.value)}
          >
            <MenuItem value="1 podejście">1 podejście</MenuItem>
            <MenuItem value="2 podejście">2 podejście</MenuItem>
            <MenuItem value="konsultacje">Konsultacje</MenuItem>
            <MenuItem value="bilet+">Bilet+ (opłata po wejściu)</MenuItem>
          </Select>
        </FormControl>
        <Stack direction="row" justifyContent="space-between">
          <TextField
            id="outlined-basic"
            label="Numer biletu"
            variant="outlined"
            disabled={true}
            value={createdTicket.ticketId}
            size="small"
          />
          <Button variant="outlined" onClick={handleTakeTicketButton}>Odbierz bilet</Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default TicketForm;
