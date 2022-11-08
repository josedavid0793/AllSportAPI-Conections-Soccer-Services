import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements OnInit {
  showMenu = false;
  menu : string []=['Inicio','Pronosticos','Apuestas','Blog','Contacto']
  constructor() {}

  ngOnInit(): void {}
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
