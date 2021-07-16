/////// COPY & PASTE FROM CR05 ///////
import { RandomDate, RandomInt, Place, PlaceInterface } from "./usefulfunctions";
export var TRAVEL_ARRAY: Array<PlaceInterface> = new Array(); // global array to add in all classes/blogs/places


// travel offer should display the following details: destination, description, start date(s), duration and price
export class Travel extends Place  {
  constructor(name: string, address: string, city: string, zip_code: number, public country: string, image: string, date: Date, public price: number, public duration: number) {
    super(name, address, city, zip_code, image, date);
    TRAVEL_ARRAY.push(this);
  }
  // Destination <-- GetPosition() address + zip + city
  GetPosition(): Array<string> {
    return [super.GetPosition()[0], super.GetPosition()[1], this.country];
  }

}




// Add hotels to book for the travel page
new Travel("Cairo Hotel 21", "Relax Street 14/43", "Cairo", 11668, "Egypt", "travel_cairo_egypt.jpg", RandomDate(), 500, 1);
new Travel("The Buckingham Hotel", "Financial Pl. 425 S", "Chicago", 60605, "US and A", "travel_chicago_america.jpg", RandomDate(), 2599, 2);
new Travel("Hotel Atlas", "Landwehrstr. 65", "Munich", 11668, "Germany", "travel_munich_germany.jpg", RandomDate(), 972, 1);
new Travel("Hilton Tokyo", "Shinjuku 160-0023", "Tokyo", 11668, "Japan", "travel_tokyo_japan.jpg", RandomDate(), 972, 1);

