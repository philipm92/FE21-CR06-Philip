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
  home_further_desc: string;
  constructor() {
    this.home_heading =  "We are your ultimate trave experience provider!" ;
    this.home_text =  "With hundreds of holiday and destinations offered, we are your natural choice for planning it all out!" ;
    this.home_btn_text =  "Check out our travel locations" ;
    this.home_btn_link = "travel";
    this.home_further_desc = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempora sapiente at voluptatum perspiciatis cum.
    \r\n accusamus illum in provident alias vel exercitationem numquam hic ad qui, incidunt dignissimos. Dolor, voluptas!`;
  }

  ngOnInit(): void {
  }

}
