import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  AboutUsInfo: string = "We are a small hotel in downtown New York. We will do everything in our power to make your stay worth a while!";
}
