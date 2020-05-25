import { Component, OnInit,ViewChild,ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import { WeatherService } from "../weather.service";
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  

@Component({
  selector: "app-line-graph",
  templateUrl: "./line-graph.component.html",
  styleUrls: ["./line-graph.component.css"]
})
export class LineGraphComponent implements OnInit {
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
        type: "line",
        data: {
          labels: weatherDates,
          datasets: [
            {
              label: "Max Temp",
              data: temp_max,
              borderColor: "#ed453b",
              fill: false
            },
            {
              label: "Min Temp",
              data: temp_min,
              borderColor: "#21adbd",
              fill: false
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
  download(){
    var data = document.getElementById('line');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }
}
