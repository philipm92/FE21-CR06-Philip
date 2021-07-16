import { Component, OnInit } from '@angular/core';
import * as travel_data from '../travellist';
import { PlaceInterface } from '../usefulfunctions';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  travel_posts: Array<PlaceInterface> = travel_data.TRAVEL_ARRAY; // Array<travel_data.Travel> 
  constructor() { }

  ngOnInit(): void {
    console.log(this.travel_posts[0].GetPosition());
  }

}
