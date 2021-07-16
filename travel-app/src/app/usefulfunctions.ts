// Generate random integer between lo..hi
export function RandomInt(lo: number, hi: number): number {
  // return Math.round(lo + Math.random() * (hi - lo)); // no real int in JS, except parseInt for strings
  return parseInt((lo + Math.random() * (hi - lo)).toString());
}

// Generate random Date
// new Date(year, month, day, hours, minutes, seconds)
export function RandomDate(): Date {
  let year = RandomInt(2020, 2022);
  let month = RandomInt(0, 11);
  let day = (month == 1) ? RandomInt(1,28) : RandomInt(1, 31); // check for Feb.
  let hours = RandomInt(8, 14);
  let minutes = [0, 15, 30, 45][RandomInt(0, 3)]; //RandomInt(0, 59);
  return new Date(year, month, day, hours, minutes);
}

// Create Interface for all classes
/* Note to self: Do Interface for base to avoid multiple entries when pushing constructor to array */
export interface PlaceInterface {
  name: string;
  address: string;
  city: string;
  zip_code: number;
  image: string;
  date: Date;
  description?: string;
  duration?: number;
  price?: number;
  country?: string;
  GetPosition: Function;
  GetBlogDate: Function;
  _gettimestring_: Function;
  _addleadingzero_: Function;
  _createdatestring_: Function;
}

// Create Super/Parent Class for all other classes that implements "Places" for less code
export class Place implements PlaceInterface {
  constructor(public name: string, public address: string, public city: string, public zip_code: number, public image: string, public date: Date) {}
  
  GetPosition(): Array<string> {
    return [this.address, `${this.zip_code} ${this.city}`];
  }

  _addleadingzero_(str: string): string {
    return (str.length == 1) ? ('0'+str) : str;
  }
  _gettimestring_ (date: Date): string {
    let h: string = this._addleadingzero_(date.getHours().toString());
    let m: string = this._addleadingzero_(date.getMinutes().toString());
    let time: string = `${h}:${m}`;
    return time;
  }

  _createdatestring_(date: Date): string {
    let day: string = this._addleadingzero_(date.getDate().toString()); //why the F. is this for the days of the months and not getDay or getWeekDay?
    let month: string = this._addleadingzero_((date.getMonth() + 1).toString()); // add one because getMonth starts with 0 as the first month
    let year: string = date.getFullYear().toString();
    return `${day}.${month}.${year}`;    
  }

  GetBlogDate(): Array<string> {
    // it looks like replaceAll isn't recognized in TS sometimes, that's why I make another version down below
    // return `${_getweekday_()}., ${this.date.toLocaleDateString().replaceAll('/', '.')} - ${_gettimestring_()}`;
    let date_string = this._createdatestring_(this.date);
    return [date_string, this._gettimestring_(this.date)];
  }

}
