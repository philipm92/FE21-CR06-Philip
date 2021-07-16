import { Component, OnInit } from '@angular/core';
import * as blog_data from '../blogpostlist';
import { PlaceInterface } from '../usefulfunctions';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  blog_posts: Array<PlaceInterface> = blog_data.PLACE_ARRAY;
  constructor() { }

  ngOnInit(): void {
  }

}
