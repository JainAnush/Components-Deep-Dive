import { Component, DestroyRef, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // private intervalId?: ReturnType<typeof setInterval>;'

  /**
   * using DestroyRef instead of ngOnDestroy is preferred.
   * you can call multiple onDestroy mrnthod on destroyRef property in code.
   */
  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    const intervalId = setInterval(() => {
      let ran = Math.random();
      if (ran < 0.5) {
        this.currentStatus = 'online';
      } else if (ran < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 10000);

    this.destroyRef.onDestroy(() => {
      clearInterval(intervalId);
    });
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.intervalId);
  // }
}
