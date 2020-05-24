import { Component } from "@angular/core";
import { Chart } from "chart.js";
import { WeatherService } from "./weather.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-first-app";
  constructor(private _weather: WeatherService) {}
}
