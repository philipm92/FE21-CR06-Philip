import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "travel", component: TravelComponent
}, {
  path: "blog", component: BlogPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
