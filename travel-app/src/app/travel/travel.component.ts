import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
// import * as travel_data from '../travellist';
import { Travel, TRAVEL_ARRAY } from '../travellist';
import { Place, PlaceInterface } from '../usefulfunctions';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  travel_posts: Array<PlaceInterface> = TRAVEL_ARRAY; // Array<travel_data.Travel> 
  // travel = new travel_data.Travel("", "", "", 0, "", "", new Date(), 0, 0, ""); // WHY?
  constructor(private cart_service: CartService) { } // public travel: PlaceInterface won't work

  AddToCart(travelId: number): void {
    let travel: any = this.travel_posts[travelId];
    console.log(travel.name + " " + travelId);
    // Swal.fire(pet.name + ' has been added to the cart!')
    this.cart_service.AddToCart(travel);
    console.log(this.cart_service.booked_travels.length);
  }

  ngOnInit(): void {
    
  }

}
