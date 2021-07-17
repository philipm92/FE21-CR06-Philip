/////// COPY & PASTE FROM CR05 ///////
import { RandomDate, RandomInt, Place, PlaceInterface } from "./usefulfunctions";
export var PLACE_ARRAY: Array<PlaceInterface> = new Array(); // global array to add in all classes/blogs/places

//*********** CREATE CLASS "LOCATIONS" ***********//
export class Locations extends Place  {
  constructor(name: string, address: string, city: string, zip_code: number, image: string, date: Date) {
    super(name, address, city, zip_code, image, date);
    PLACE_ARRAY.push(this);
  }
}

// Add Locations for blog post section
new Locations("St. Charles Church", "Karlsplatz 1", "Vienna", 1010, "St Charles Church_new.jpg", RandomDate());
new Locations("Zoo Vienna", "Maxingstraße 13b", "Vienna", 1130, "Zoo Vienna_new.jpg", RandomDate());
new Locations("Spielraum", "Otto-Bauer-Gasse 17", "Vienna", 1060, "Spielraum_new.jpg", RandomDate());
new Locations("Area52", "Franklinstrasse 20/9/R1", "Vienna", 1210, "Area52_new.jpg", RandomDate());




