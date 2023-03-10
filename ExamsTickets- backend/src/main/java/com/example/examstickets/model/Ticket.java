package com.example.examstickets.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Ticket {
    @Id
    private String id;
    private Integer ticketId;
    private String firstName;
    private String surName;
    private String ticketType;
    private String ticketPriority;
    private LocalDateTime enterDate;
    private LocalDateTime leaveDate;
}
