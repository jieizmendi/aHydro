import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';
import * as shape from 'd3-shape';
@Component({
  selector: 'app-historicals',
  templateUrl: './historicals.component.html',
  styleUrls: ['./historicals.component.scss']
})
export class HistoricalsComponent implements OnInit {
  multi: any[];
 

  view: any[] = [400, 400];

  // options
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Number';
  showYAxisLabel = false;
  yAxisLabel = 'Color Value';
  timeline = false;
  showGridLines = false;
  sparklineData: any[];
  curve = shape.curveBasis;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor() {
    this.multi = [
      {
        "name": "Myanmar",
        "series": [
          {
            "value": 23,
            "name": "2016-09-19T00:34:09.842Z",
          },
          {
            "value": 23,
            "name": "2016-09-12T18:43:13.670Z",
          },
          {
            "value": 22,
            "name": "2016-09-21T01:50:55.370Z",
          },
          {
            "value": 24,
            "name": "2016-09-19T23:40:07.007Z",
          },
          {
            "value": 23.5,
            "name": "2016-09-19T12:01:13.072Z",
          }
        ]
      },
      {
        "name": "Myanmar",
        "series": [
          {
            "value": 22,
            "name": "2016-09-19T00:34:09.842Z",
          },
          {
            "value": 22,
            "name": "2016-09-19T12:01:13.072Z",
          }
        ]
      },
      {
        "name": "Myanmar",
        "series": [
          {
            "value": 24,
            "name": "2016-09-19T00:34:09.842Z",
          },
          {
            "value": 24,
            "name": "2016-09-19T12:01:13.072Z",
          }
        ]
      }
    ];
    this.sparklineData = generateData(1, false, 30);
    console.log(this.sparklineData);
  }

   
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}

let countries = [{name:'aa'},{name:'bb'}];

export function generateData(seriesLength: number, includeMinMaxRange: boolean, dataPoints: number = 5): any[] {
  const results = [];

  const domain: Date[] = []; // array of time stamps in milliseconds

  for (let j = 0; j < dataPoints; j++) {
    // random dates between Sep 12, 2016 and Sep 24, 2016
    domain.push(new Date(Math.floor(1473700105009 + Math.random() * 1000000000)));
  }

  for (let i = 0; i < seriesLength; i++) {
    const country = countries[Math.floor(Math.random() * countries.length)];
    const series = {
      name: country.name,
      series: []
    };

    for (let j = 0; j < domain.length; j++) {
      const value = Math.floor(2000 + Math.random() * 5000);
      // let timestamp = Math.floor(1473700105009 + Math.random() * 1000000000);
      const timestamp = domain[j];
      if (includeMinMaxRange) {
        const errorMargin = 0.02 + Math.random() * 0.08;

        series.series.push({
          value,
          name: timestamp,
          min: Math.floor(value * (1 - errorMargin)),
          max: Math.ceil(value * (1 + errorMargin))
        });
      } else {
        series.series.push({
          value,
          name: timestamp
        });
      }
    }

    results.push(series);
  }
  return results;
}