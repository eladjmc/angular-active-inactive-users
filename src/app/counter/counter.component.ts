import { Component, OnInit } from "@angular/core";
import { CounterService } from "../services/counter.service";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"],
})
export class CounterComponent implements OnInit   {
  counter: {counter: number};
  constructor(private counterService: CounterService) {
    this.counter = this.counterService.a;
  }

  ngOnInit(): void {}

}
