import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { MatIconModule } from "@angular/material/icon";

//Modules
import { AppRoutingModule } from "./app-routing.module";

//Services
import { ApiMockService } from "./core/services/api-mock.service";
import { TaskService } from "./core/services/task.service";
import { ModuleService } from "./core/services/module.service";
import { RecordService } from "./core/services/record.service";

//Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientInMemoryWebApiModule.forRoot(ApiMockService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true
    })
  ],
  providers: [TaskService, ModuleService, RecordService],
  bootstrap: [AppComponent]
})
export class AppModule {}
