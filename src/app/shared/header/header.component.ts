import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Leagues',
        routerLink: ['leagues'],
        icon: 'pi pi-fw pi-calendar',
      },
      {
        label: 'Teams',
        routerLink: ['teams'],
        icon: 'pi pi-fw pi-users',
      },
      {
        label: 'Players',
        routerLink: ['players'],
        icon: 'pi pi-fw pi-user',
      }
    ];
  }

}
