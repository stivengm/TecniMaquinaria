import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/admin/dashboard']);
  }
}
