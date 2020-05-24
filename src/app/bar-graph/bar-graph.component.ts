import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";
import { Chart } from "chart.js";
@Component({
  selector: "app-bar-graph",
  templateUrl: "./bar-graph.component.html",
  styleUrls: ["./bar-graph.component.css"]
})
export class BarGraphComponent implements OnInit {
  constructor(private _weather: WeatherService) {}

  location: string;
  chart: any = [];

  ngOnInit() {
    this._weather.getData().subscribe(res => {
      console.log(res);
      this.location = res["city"].name;
      let temp_max = res["list"].map(res => res.temp.max);
      let temp_min = res["list"].map(res => res.temp.min);
      let all_dates = res["list"].map(res => res.dt);

      let weatherDates = [];
      all_dates.forEach(res => {
        let jsdate = new Date(res * 1000);
        weatherDates.push(
          jsdate.toLocaleDateString("en", {
            year: "numeric",
            month: "short",
            day: "numeric"
          })
        );
      });

      this.chart = new Chart("canvas", {
        type: "bar",
        data: {
          labels: weatherDates,
          datasets: [
            {
              label: "Max Temp",
              data: temp_max,
              borderColor: "#FFB6C1",
              backgroundColor: "#000080",
              fill: true
            },
            {
              label: "Min Temp",
              data: temp_min,
              borderColor: "#000080",
              backgroundColor: "#FFB6C1",
              fill: true
            }
          ]
        },
        options: {
          scales: {
            xAxes: [{ display: true }],
            yAxes: [{ display: true }]
          }
        }
      });
    });
  }
}
