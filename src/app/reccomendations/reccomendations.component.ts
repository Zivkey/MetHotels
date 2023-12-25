import { Component } from '@angular/core';

@Component({
  selector: 'app-reccomendations',
  templateUrl: './reccomendations.component.html',
  styleUrls: ['./reccomendations.component.scss']
})
export class ReccomendationsComponent {
  recommendationList: { title: string; desc: string }[] = [
    { title: 'Dinners', desc: 'Katz’s Delicatessen, Peter Luger, Sylvia' },
    { title: 'Places to go out', desc: 'Marquee New York, Le Bain, Abant Gardner' },
  ];
}
