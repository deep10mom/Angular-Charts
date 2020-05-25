import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { WeatherService } from "../weather.service";
import * as jspdf from "jspdf";
import html2canvas from "html2canvas";
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
  };

  pieChartLabels = ["JAN", "FEB", "MAR", "APR", "MAY"];

  // CHART COLOR.
  pieChartColor: any = [
    {
      backgroundColor: [
        "rgba(30, 169, 224, 0.8)",
        "rgba(255,165,0,0.9)",
        "rgba(139, 136, 136, 0.9)",
        "rgba(255, 161, 181, 0.9)",
        "rgba(255, 102, 0, 0.9)"
      ]
    }
  ];

  pieChartData: any = [
    {
      data: [10, 20, 30, 40, 50]
    }
  ];

  ngOnInit() {}
  download() {
    console.log;
    var data = document.getElementById("pie");
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL("image/png");
      let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("pieGraph.pdf"); // Generated PDF
    });
  }
}
