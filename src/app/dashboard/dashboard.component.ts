import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { MetricsService } from '../service/metrics.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public merticService: MetricsService) { }
  title = 'PERFORMANCE ANALYTICS';
  canvas: any;
  ctx: any;
  canvas1: any;
  ctx1: any;
  canvas2: any;
  ctx2: any;
  canvas3: any;
  ctx3: any;
  metricsFromApi: any;
  ngOnInit() {
     this.merticService.getDataFromApi().subscribe(data => {
       console.log('data',data);
       this.metricsFromApi = data;
     })
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
        datasets: [{
          label: "TTFB",
          data: [0, 59, 75, 20, 20, 55, 40],
          lineTension: 0,
          fill: false,
          borderColor: 'black',
          backgroundColor: 'transparent',
          pointBackgroundColor: 'black',
          pointRadius: 5,
          pointHoverRadius: 10,
          pointHitRadius: 30,
          pointBorderWidth: 2,
        }]
      },
      options: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            fontColor: 'black'
          }
        }
      },
    });
    this.canvas1 = document.getElementById('myChart1');
    this.ctx1 = this.canvas1.getContext('2d');
    let myChart1 = new Chart(this.ctx1, {
      type: 'line',
      data: {
        labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
        datasets: [{
          label: "FCP",
          data: [0, 59, 75, 20, 20, 55, 40],
          lineTension: 0,
          fill: false,
          borderColor: 'orange',
          backgroundColor: 'transparent',
          pointBackgroundColor: 'orange',
          pointRadius: 5,
          pointHoverRadius: 10,
          pointHitRadius: 30,
          pointBorderWidth: 2,
        }]
      },
      options: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            fontColor: 'orange'
          }
        }
      },
    });
    this.canvas2 = document.getElementById('myChart2');
    this.ctx2 = this.canvas2.getContext('2d');
    let myChart2 = new Chart(this.ctx2, {
      type: 'line',
      data: {
        labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
        datasets: [{
          label: "DOM COMPLETE",
          data: [0, 59, 75, 20, 20, 55, 40],
          lineTension: 0,
          fill: false,
          borderColor: 'green',
          backgroundColor: 'transparent',
          pointBackgroundColor: 'green',
          pointRadius: 5,
          pointHoverRadius: 10,
          pointHitRadius: 30,
          pointBorderWidth: 2,
        }]
      },
      options: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            fontColor: 'green'
          }
        }
      },
    });
    this.canvas3 = document.getElementById('myChart3');
    this.ctx3 = this.canvas3.getContext('2d');
    let myChart3 = new Chart(this.ctx3, {
      type: 'line',
      data: {
        labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
        datasets: [{
          label: "WINDOW LOAD EVENT",
          data: [0, 59, 75, 20, 20, 55, 40],
          lineTension: 0,
          fill: false,
          borderColor: 'blue',
          backgroundColor: 'transparent',
          pointBackgroundColor: 'blue',
          pointRadius: 5,
          pointHoverRadius: 10,
          pointHitRadius: 30,
          pointBorderWidth: 2,
        }]
      },
      options: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            fontColor: 'blue'
          }
        }
      },
    });
  }

  
}