import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{Metric} from '../model/metric.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MetricsService {

   fcp = 0;

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
    var metrics:any = {};
    metrics.ttfb = ttfb;
    metrics.domComplete = domComplete;
    metrics.windowLoadEvent = windowLoadEvent;
    metrics.fcp = this.fcp;    
    metrics.date=new Date().toISOString().slice(0,10);

    

    return {metrics};
  }

  cc(){
    if(typeof(PerformanceObserver)!=='undefined'){ //if browser is supporting
      const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if(entry.name === 'first-contentful-paint'){
          this.fcp = entry.startTime;  
        }
           
         }
        });
        observer.observe({entryTypes: ['paint']});
      }
  }
}
