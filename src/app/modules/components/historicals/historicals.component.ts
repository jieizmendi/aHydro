import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';
@Component({
  selector: 'app-historicals',
  templateUrl: './historicals.component.html',
  styleUrls: ['./historicals.component.scss']
})
export class HistoricalsComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor() {
    Object.assign(this, {single, multi})   
    console.log(this.multi);
  }

  ngOnInit() {
  }

}
