import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketdata: { title: string; request: string }) {
    this.tickets.push({
      title: ticketdata.title,
      request: ticketdata.request,
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      status: 'open',
    });
  }
}
