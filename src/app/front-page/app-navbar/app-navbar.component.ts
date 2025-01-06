import { Component } from '@angular/core';
import { AfService } from '../../providers/af.service';
import { MenusService } from '../../service/menus/menus.service';
import { User } from '../../providers/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.css'
})
export class AppNavbarComponent {
  user!: User | null | undefined;
  menusList: any;
  constructor (public afService: AfService, private menus: MenusService) {}
    
  ngOnInit(): void {
    this.afService.user.subscribe(user => this.user = user);
    this.menus.getMenus().subscribe( menus => {
      this.menusList = menus;
    })

  }
}
