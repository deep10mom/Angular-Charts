import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { ChartsModule } from "ng2-charts";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { BootstrapComponent } from "./bootstrap/bootstrap.component";
import { WeatherService } from "./weather.service";
import { HeaderComponent } from "./header/header.component";
import { LineGraphComponent } from "./line-graph/line-graph.component";
import { BarGraphComponent } from "./bar-graph/bar-graph.component";
import { PieGraphComponent } from "./pie-graph/pie-graph.component";

const routes: Routes = [
  { path: "line", component: LineGraphComponent },
  { path: "bar", component: BarGraphComponent },
  { path: "pie", component: PieGraphComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    BootstrapComponent,
    HeaderComponent,
    LineGraphComponent,
    BarGraphComponent,
    PieGraphComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  exports: [RouterModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
