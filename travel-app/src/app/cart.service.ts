import { Injectable } from '@angular/core';
import { PlaceInterface } from './usefulfunctions';
import { Travel, TRAVEL_ARRAY } from './travellist';
import { TravelComponent } from './travel/travel.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  booked_travels: Array<PlaceInterface> = [] as PlaceInterface[];
  constructor() { }

  AddToCart(travel: PlaceInterface): void {
    this.booked_travels.push(travel);
  }

  GetTravels(): Array<PlaceInterface> {
    return this.booked_travels;
  }

  ClearCart(): Array<PlaceInterface> {
    this.booked_travels  = [] as PlaceInterface[];
    return this.booked_travels;
  }

}
