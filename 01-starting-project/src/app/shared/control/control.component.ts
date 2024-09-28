import {
  Component,
  ContentChild,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

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

  //getting access to host element
  private el = inject(ElementRef);

  // getting access to projected elements via @ContentChild() decorator
  // @ContentChild('input') private input?: ElementRef<
  //   HTMLTextAreaElement | HTMLInputElement
  // >;

  /**
   * getting access to projected elements via contentChild() (> angular 17)
   * this returns a signal so use it like this.input() and not this.input
   */
  private input =
    contentChild<ElementRef<HTMLTextAreaElement | HTMLInputElement>>('input');

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
    console.log(this.el);
    console.log(this.input());
  }
}
