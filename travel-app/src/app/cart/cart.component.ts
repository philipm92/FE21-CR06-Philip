import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { PlaceInterface } from '../usefulfunctions';
import { Travel, TRAVEL_ARRAY } from '../travellist';
import { TravelComponent } from '../travel/travel.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  booked_travels: Array<PlaceInterface> = [] as PlaceInterface[];
  checkout_form: FormGroup;
  total_price: number = 0;
  total_quantity: number = 0;
  constructor(private cart_service: CartService, private form_builder: FormBuilder) {
    this.checkout_form = this.form_builder.group({name: "Test Customer", address: "CF Street 14/7, 21. Vienna"});
  }
  
  OnSubmit(customerData: {name: "", address: ""}[]) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.booked_travels = this.cart_service.ClearCart();
    this.checkout_form.reset();
  }

  GetTotals(): void {
    for (let i in this.booked_travels) {
      let travel: any = this.booked_travels[i]; // any because otherwise it throws an undefined error
      this.total_price += travel.price * travel.quantity;
      this.total_quantity += travel.quantity;
      // console.log(i);
    }
  }

  ngOnInit(): void {
    this.booked_travels = this.cart_service.GetTravels();
    // this.booked_travels = [
    //   new Travel("Cairo Hotel 21", "Relax Street 14/43", "Cairo", 11668, "Egypt", "travel_cairo_egypt_new.jpg", new Date(), 100, 1, "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
    //   new Travel("The Buckingham Hotel", "Financial Pl. 425 S", "Chicago", 60605, "US and A", "travel_chicago_america_new.jpg", new Date(), 40, 2, "Amet perspiciatis ad architecto laudantium aliquid, voluptate consectetur omnis soluta quos?"),
    //   new Travel("The Buckingveg Hotel", "Financial Pl. 425 S", "Chicago", 60605, "US and A", "travel_chicago_america_new.jpg", new Date(), 60, 2, "Amet perspiciatis ad architecto laudantium aliquid, voluptate consectetur omnis soluta quos?")
    // ];
    this.GetTotals();

    // console.log(this.booked_travels);
  }
}
