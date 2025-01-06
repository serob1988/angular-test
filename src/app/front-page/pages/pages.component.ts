import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      console.log(params)
    })
  }
}
