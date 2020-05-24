import { Component, OnInit } from "@angular/core";
// import { read } from "fs";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  status = false;
  constructor() {
    this.status = Math.random() > 0.5 ? true : false;
  }

  ngOnInit() {}
  getcolor() {
    return this.status === true ? "green" : "red";
  }
}
