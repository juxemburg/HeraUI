import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LineChartFactoryService {

  private _defaultPointBorderWidth = 2;
  private _defaultPointRadius = 5;
  private _defaultBorderWidth = 2;

  private _defaultPointHoverRadius = 7;
  private _defaultPointHoverBorderWidth = 2;

  private _gradientChartOptionsConfiguration: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest',
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [{
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: 'transparent',
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }],
      xAxes: [{
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: 'transparent',
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }]
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 15,
        bottom: 15
      }
    }
  };
  public get gradientChartOptionsConfiguration(): any {
    return this._gradientChartOptionsConfiguration;
  }
  private _gradientChartOptionsConfigurationWithNumbersAndGrid: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest',
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: true,
    scales: {
      yAxes: [{
        gridLines: {
          zeroLineColor: 'transparent',
          drawBorder: false
        }
      }],
      xAxes: [{
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: 'transparent',
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }]
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 15,
        bottom: 15
      }
    }
  };
  public get gradientChartOptionsConfigurationWithNumbersAndGrid(): any {
    return this._gradientChartOptionsConfigurationWithNumbersAndGrid;
  }

  private _defaultFill = true;

  constructor() { }

  public GetChartData(
    label: string,
    values: number[],
    pointBorderWidth = this._defaultBorderWidth,
    pointHoverRadius = this._defaultPointHoverRadius,
    pointHoverBorderWidth = this._defaultPointHoverBorderWidth,
    pointRadius = this._defaultPointRadius,
    fill = this._defaultFill,
    borderWidth = this._defaultBorderWidth): any {
    return {
      label: label,

      pointBorderWidth: pointBorderWidth,
      pointHoverRadius: pointHoverRadius,
      pointHoverBorderWidth: pointHoverBorderWidth,
      pointRadius: pointRadius,
      fill: fill,

      borderWidth: borderWidth,
      data: values
    };
  }
}
