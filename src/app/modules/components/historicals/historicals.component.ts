import { Component, OnInit } from "@angular/core";
import * as shape from "d3-shape";
import { Subscription } from "rxjs";
import { RecordService } from "../../../core/services/record.service";
import { ModuleService } from "../../../core/services/module.service";
import { Record } from "../../../core/models/record";

import { Angular5Csv } from "angular5-csv/Angular5-csv";

@Component({
  selector: "app-historicals",
  templateUrl: "./historicals.component.html",
  styleUrls: ["./historicals.component.scss"]
})
export class HistoricalsComponent implements OnInit {
  private subscription: Subscription = null;

  moduleName = "";
  data: Record[];
  curve = shape.curveBasis;

  water_temp_graph: any[];
  air_temp_graph: any[];
  humidity_graph: any[];
  light_graph: any[];
  ec_graph: any[];
  ph_graph: any[];

  constructor(moduleService: ModuleService, recordService: RecordService) {
    this.water_temp_graph = [];
    this.air_temp_graph = [];
    this.humidity_graph = [];
    this.light_graph = [];
    this.ec_graph = [];
    this.ph_graph = [];

    this.subscription = moduleService.getCuerrent().subscribe(module => {
      this.moduleName = module.name;
      recordService.getByModule(module.id).subscribe((data: Record[]) => {
        data = data.filter(record => record.date > module.start_at);
        this.data = data;
        this.water_temp_graph = this.toGraph(data, "water_temperature");
        this.air_temp_graph = this.toGraph(data, "air_temperature");
        this.humidity_graph = this.toGraph(data, "humidity");
        this.ec_graph = this.toGraph(data, "ec");
        this.ph_graph = this.toGraph(data, "ph");
        this.light_graph = this.toGraphLight(data);
      });
    });
  }

  toGraphLight(data: Record[]) {
    let _data = data
      .slice(0)
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .reduce((obj, item) => {
        if (!obj[item.getDateToGroup()]) {
          obj[item.getDateToGroup()] = {
            value: item.getValue("light"),
            name: item.getDateToGroup()
          };
        } else {
          obj[item.getDateToGroup()].value += item.getValue("light");
        }
        return obj;
      }, []);
    let __data = [];
    Object.keys(_data).forEach(key => {
      if (key != Object.keys(_data).shift() && key != Object.keys(_data).pop())
        __data.push(_data[key]);
    });
    return [
      {
        name: "light",
        series: __data
      }
    ];
  }

  toGraph(data: Record[], key: string) {
    return [
      {
        name: key,
        series: data.map(record => {
          return {
            value: record.getValue(key),
            name: record.getPrintableDate()
          };
        })
      }
    ];
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
    }
  }

  downloadData() {
    new Angular5Csv(
      this.data.map(record => {
        const date =
          record.date.getDate() +
          "-" +
          (record.date.getMonth() + 1) +
          "-" +
          record.date.getFullYear() +
          " " +
          (record.date.getHours() < 10 ? '0' + record.date.getHours() : record.date.getHours()) +
          ":" +
          (record.date.getMinutes() < 10 ? '0' + record.date.getMinutes() : record.date.getMinutes());
        return {
          at: date,
          ...record.status
        };
      }),
      this.moduleName
    );
  }
}
