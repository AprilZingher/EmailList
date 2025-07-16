import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterModule ],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Spring Boot - Angular Application';
  constructor(private router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        console.log('Navigated to:', e.urlAfterRedirects);
      }
    });
  }
}
