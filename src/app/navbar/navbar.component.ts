import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  item_list = ['Offer', 'Reccomentations', 'About us'];
  selected_option: string;

  constructor() {
    this.selected_option = this.item_list[0];
  }

  selectOption(option: string): void {
    this.selected_option = option;
  }
}
