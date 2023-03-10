package com.example.examstickets.service;

import com.example.examstickets.model.Ticket;

import java.util.List;

public interface TicketService {
    Ticket saveTicket(Ticket ticket);
    List<Ticket> getAllTickets();
    void deleteTicket(String id);
}
