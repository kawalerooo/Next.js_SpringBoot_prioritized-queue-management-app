package com.example.examstickets.controller.impl;

import com.example.examstickets.controller.TicketController;
import com.example.examstickets.model.Ticket;
import com.example.examstickets.service.TicketService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tickets")
public class TicketControllerImpl implements TicketController {
    private final TicketService ticketService;

    public TicketControllerImpl(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @Override
    @PostMapping
    public Ticket createTicket(@RequestBody Ticket ticket) {
        return ticketService.saveTicket(ticket);
    }

    @Override
    @GetMapping
    public List<Ticket> getTickets() {
        return ticketService.getAllTickets();
    }

    @Override
    @DeleteMapping
    public void deleteTicket(@RequestParam String id) {
        ticketService.deleteTicket(id);
    }
}
