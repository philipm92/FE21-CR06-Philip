import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';
import { Travel } from '../travellist';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  booked_travels: Array<Travel> = [] as Travel[];
  checkout_form: FormGroup;
  total_price: number = 0;
  total_quantity: number = 0;
  constructor(private cart_service: CartService, private form_builder: FormBuilder) {
    this.checkout_form = this.form_builder.group(
      {
        fullname: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        phone: "",
        address: ['', Validators.required]
      });
  }
  
  OnSubmit(): void {
    // Process checkout data here
    if (this.checkout_form.valid) {
      Swal.fire(`Thanks for ordering ${this.checkout_form.value.fullname}!\r\n Your order has been submitted!`);
      console.warn(this.checkout_form.value.fullname, this.checkout_form.value.address);
      this.booked_travels = this.cart_service.ClearCart();
      this.checkout_form.reset();      
    } else Swal.fire("Please enter all your data correctly!");

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
