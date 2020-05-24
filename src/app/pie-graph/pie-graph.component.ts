import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-pie-graph",
  templateUrl: "./pie-graph.component.html",
  styleUrls: ["./pie-graph.component.css"]
})
export class PieGraphComponent implements OnInit {
  constructor(private _weather: WeatherService) {}
  chartReady = true;
  pieChartOptions = {
    responsive: true
}

pieChartLabels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

// CHART COLOR.
pieChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
        ]
    }
]

pieChartData:any = [
    { 
        data: [10,20,30,40,50]
    }
];

  ngOnInit() {

  }
}
