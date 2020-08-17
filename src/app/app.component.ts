import { Component } from '@angular/core';
import {MetricsService} from './service/metrics.service'
import { Metric } from './model/metric.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'perfanalytics-ui';
  metric : any;


  constructor(public metricsService: MetricsService){
    this.saveMetrics();
  }

  saveMetrics(){
    this.metric = this.metricsService.getMetrics();
    this.metricsService.saveMetrics(this.metric).subscribe(x=>console.log(x));
  }


}
