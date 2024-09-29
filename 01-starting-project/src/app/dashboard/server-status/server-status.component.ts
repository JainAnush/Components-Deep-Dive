import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private intervalId?: ReturnType<typeof setInterval>;'

  /**
   * using DestroyRef instead of ngOnDestroy is preferred.
   * you can call multiple onDestroy method on destroyRef property in code.
   */
  private destroyRef = inject(DestroyRef);

  constructor() {
    /**
     * if using effect function witrh a signal value, angular sets a subscription on the signal value within this typescript code to listen toi changes.
     * you can use oncleanup menthod to perform a task which should be executed before the effect function runs again.
     * effect((cleanup)=>{...code here})
     * cleanyp function itself takes a callback
     */
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    const intervalId = setInterval(() => {
      let ran = Math.random();
      if (ran < 0.5) {
        this.currentStatus.set('online');
      } else if (ran < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 3000);

    this.destroyRef.onDestroy(() => {
      clearInterval(intervalId);
    });
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.intervalId);
  // }
}
