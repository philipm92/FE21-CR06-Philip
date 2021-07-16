import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home_heading: string;
  home_text: string;
  home_btn_text : string;
  home_btn_link: string;
  constructor() {
    this.home_heading =  "We are your ultimate trave experience provider!" ;
    this.home_text =  "With hundreds of holiday and destinations offered, we are your natural choice for planning it all out!" ;
    this.home_btn_text =  "Learn more" ;
    this.home_btn_link = "travel";
  }

  ngOnInit(): void {
  }

}
