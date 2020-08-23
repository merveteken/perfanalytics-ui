import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{Metric} from '../model/metric.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MetricsService {


  constructor(private http: HttpClient) {

  }

  saveMetrics(metrics:Metric):Observable<Metric>{
    return this.http.post<Metric>(environment.api.saveMetric, 
    {date: metrics.date,
    domComplete: metrics.domComplete,
    fcp: metrics.fcp,
    ttfb: metrics.ttfb,
    windowLoadEvent: metrics.windowLoadEvent} );

  }

  getMetrics() {
    const performance = window.performance.timing;

    // Time To First Byte
    const ttfb = performance.responseStart - performance.requestStart;


    // Dom load duration
    const domComplete = performance.domComplete;


    // Window load duration
    const windowLoadEvent = performance.loadEventEnd - performance.loadEventStart;

    //fcp
    const firstContentfulPaint = window.performance.getEntriesByType("paint")[0];
    // Get the timestamp when the paint ocurred
    const fcp = firstContentfulPaint ? firstContentfulPaint.startTime : 0;

    var metrics:any = {};

    metrics.ttfb = ttfb;
    metrics.domComplete = domComplete;
    metrics.windowLoadEvent = windowLoadEvent;
    metrics.fcp = fcp;    
    metrics.date=new Date().toISOString().slice(0,10);

    

    return {metrics};
  }

  getDataFromApi(){
    return this.http.get(environment.api.getMetrics+'?startDate=2020-07-07&endDate=2020-08-19');

  }
}
