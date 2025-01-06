import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';
import { User } from '../providers/user';

@Component({
  selector: 'app-login-page',
  standalone: false,
  
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  user!: User | null | undefined;
  constructor (public afService: AfService) {}
    
  ngOnInit(): void {
    this.afService.user.subscribe(user => this.user = user)
  }
  login(): void {
    this.afService.loginWithGoogle()
  }
}
