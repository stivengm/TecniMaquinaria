import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataAppServices {
  
  constructor(private router: Router) {}

  goToLink(link: string) {
    this.router.navigate([link]);
  }
}
