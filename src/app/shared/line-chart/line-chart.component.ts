import { Component, OnInit, Input } from '@angular/core';
import { LineChartFactoryService } from './line-chart-factory.service';
import { ChartInfoModel } from '../../models/common.models';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input()
  public Id: string;

  @Input()
  public title = '';

  @Input()
  public category = '';

  @Input()
  public chartColor = '#FFF';

  public chartLabels: string[] = ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'];

  public chartValues: number[] = [2, 8, 4, 6, 3, 6, 7, 4, 9, 3, 8, 5];

  @Input()
  public chartInfo: ChartInfoModel;

  public chartType = 'line';

  public chartData: Array<any>;

  public chartColors: Array<any>;
  public chartOptions: any;
  canvas: any;
  ctx: any;
  gradientStroke: any;
  gradientFill: any;

  constructor(private _chartFactory: LineChartFactoryService) { }

  ngOnInit() {
    this.chartLabels = this.chartInfo.values.map(item => item.label);
    this.chartData = [
      this._chartFactory.GetChartData('data', this.chartInfo.values.map(item => item.data))
    ];

    this.canvas = document.getElementById(this.Id);
    this.ctx = this.canvas.getContext('2d');

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
    this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    this.gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0.24)');

    this.chartColors = [
      {
        backgroundColor: this.gradientFill,
        borderColor: this.chartColor,
        pointBorderColor: this.chartColor,
        pointBackgroundColor: '#2c2c2c',
        pointHoverBackgroundColor: '#2c2c2c',
        pointHoverBorderColor: this.chartColor,
      }
    ];

    this.chartOptions = {
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 0
        }
      },
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: '#fff',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest'
      },
      legend: {
        position: 'bottom',
        fillStyle: '#FFF',
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'rgba(255,255,255,0.4)',
            fontStyle: 'bold',
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: 'rgba(255,255,255,0.1)',
            zeroLineColor: 'transparent'
          }

        }],
        xAxes: [{
          gridLines: {
            zeroLineColor: 'transparent',
            display: false,

          },
          ticks: {
            padding: 10,
            fontColor: 'rgba(255,255,255,0.4)',
            fontStyle: 'bold'
          }
        }]
      }
    };
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

}
