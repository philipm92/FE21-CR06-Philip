import { Injectable } from '@angular/core';
import { PlaceInterface } from './usefulfunctions';
import { Travel, TRAVEL_ARRAY } from './travellist';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  booked_travels: Array<Travel> = [] as Travel[];
  constructor() { }

  AddToCart(travel: Travel): void {
    // this.booked_travels.push(travel);
    // keep quantities in mind
    if (this.booked_travels.length == 0) this.booked_travels.push(travel);

    else if (this.booked_travels.find((val) => val.name == travel.name)) travel.quantity++; //cart[index].qtty++;

    else this.booked_travels.push(travel);    
  }

  GetTravels(): Array<Travel> {
    return this.booked_travels;
  }

  ClearCart(): Array<Travel> {
    this.booked_travels  = [] as Travel[];
    return this.booked_travels;
  }

}
