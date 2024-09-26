import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // set None for disabliung css styles scoping.
  host: {
    class: 'control', // host binding
    '(click)': 'onClick()', //host listener
  },
})
export class ControlComponent {
  label = input.required<string>();
  /**
   * using below syntax of host binding and host listener is discouraged!
   * Host Binding 
  @HostBinding('class') className = 'control';
   
   * Host Listener
  @HostListener('click') onClick() {
    console.log('clicked!');
  }
  */
  onClick() {
    console.log('clicked!');
  }
}
