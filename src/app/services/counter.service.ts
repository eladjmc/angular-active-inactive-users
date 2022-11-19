import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  a = {
    counter: 0
  }
  constructor() {}
  countEvents() {
    this.a.counter++;
    console.log("Amount counted" + this.a.counter);
  }
}
