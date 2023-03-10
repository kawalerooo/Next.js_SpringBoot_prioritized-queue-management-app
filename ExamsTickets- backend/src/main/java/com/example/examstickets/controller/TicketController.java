package com.example.examstickets.controller;

import com.example.examstickets.model.Ticket;

import java.util.List;

public interface TicketController {
    Ticket createTicket(Ticket ticket);
    List<Ticket> getTickets();
    void deleteTicket(String id);
}
