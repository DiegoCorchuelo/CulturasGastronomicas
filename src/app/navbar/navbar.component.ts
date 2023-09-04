import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logo:string = "https://www.logo.wine/a/logo/US_Foods/US_Foods-Logo.wine.svg";

  isAdminMode: boolean = false;

  activateAdminMode() {
    this.isAdminMode = true;
    console.log('Admin mode activated');
  }

  desactivateAdminMode() {
    this.isAdminMode = false;
    console.log('Viewer mode activated');
  }
}
