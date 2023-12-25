import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  OfferList: string[] = [
    'Seven days stay - 500$',
    'Weekend stay - 300$',
    'One night stay - 200$'

  ];
}
