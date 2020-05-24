import { Component, OnInit } from "@angular/core";
import { TargetLocator } from "selenium-webdriver";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
})
export class ServerComponent implements OnInit {
  serverid = 10;
  serverstatus = false;
  serverst = "";
  output = "";
  status = false;
  ngOnInit() {}
  oncreateserver() {
    this.status = true;
    this.serverst = "server created and name is " + this.output;
  }
  write(event: Event) {
    this.output = (<HTMLInputElement>event.target).value;
  }
}
