import { Component } from '@angular/core';
import { AfService } from '../../providers/af.service';
import { User } from '../../providers/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.css'
})
export class AppNavbarComponent {
  user!: User | null | undefined;
  constructor (public afService: AfService) {}
    
  ngOnInit(): void {
    this.afService.user.subscribe(user => this.user = user)
  }
}
