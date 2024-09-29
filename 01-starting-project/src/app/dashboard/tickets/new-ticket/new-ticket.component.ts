import { Component, ElementRef, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // Accessing form with ViewChild() decorator.
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  // Below viewChild() function is only available after angular 17.3.0
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{ title: string; request: string }>();

  /**
   * You can also use ViewChildren(ButtonComponent) decorator to get an array of all components present in the template.
   * a viewChildren() function can also be used as an alternative if using angular > 17.3.0
   */

  onSubmit(title: string, text: string) {
    console.log(title, text);

    // emit the add event
    this.add.emit({ title: title, request: text });

    // Resetting the form.
    this.form().nativeElement.reset();
  }
}
