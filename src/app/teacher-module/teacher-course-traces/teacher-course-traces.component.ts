import { Component, OnInit, Input } from '@angular/core';
import { CourseInfoModel } from '../../models/application.teacher.models';

@Component({
  selector: 'app-teacher-course-traces',
  templateUrl: './teacher-course-traces.component.html',
  styleUrls: ['./teacher-course-traces.component.scss']
})
export class TeacherCourseTracesComponent implements OnInit {

  @Input()
  public model: CourseInfoModel;

  // // events
  // public chartClicked(e: any): void {
  //   console.log(e);
  // }

  // public chartHovered(e: any): void {
  //   console.log(e);
  // }
  // public hexToRGB(hex, alpha) {
  //   const r = parseInt(hex.slice(1, 3), 16),
  //     g = parseInt(hex.slice(3, 5), 16),
  //     b = parseInt(hex.slice(5, 7), 16);

  //   if (alpha) {
  //     return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  //   } else {
  //     return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  //   }
  // }

  constructor() { }

  ngOnInit() {
    // this.courseActivityLabels = this.model.courseActivity.values.map(item => item.label);
    // this.courseActivityValues = this.model.courseActivity.values.map(item => item.data);
    // this.chartColor = '#FFFFFF';


    // this.gradientChartOptionsConfiguration = {
    //   maintainAspectRatio: false,
    //   legend: {
    //     display: false
    //   },
    //   tooltips: {
    //     bodySpacing: 4,
    //     mode: 'nearest',
    //     intersect: 0,
    //     position: 'nearest',
    //     xPadding: 10,
    //     yPadding: 10,
    //     caretPadding: 10
    //   },
    //   responsive: 1,
    //   scales: {
    //     yAxes: [{
    //       display: 0,
    //       ticks: {
    //         display: false
    //       },
    //       gridLines: {
    //         zeroLineColor: 'transparent',
    //         drawTicks: false,
    //         display: false,
    //         drawBorder: false
    //       }
    //     }],
    //     xAxes: [{
    //       display: 0,
    //       ticks: {
    //         display: false
    //       },
    //       gridLines: {
    //         zeroLineColor: 'transparent',
    //         drawTicks: false,
    //         display: false,
    //         drawBorder: false
    //       }
    //     }]
    //   },
    //   layout: {
    //     padding: {
    //       left: 0,
    //       right: 0,
    //       top: 15,
    //       bottom: 15
    //     }
    //   }
    // };

    // this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
    //   maintainAspectRatio: false,
    //   legend: {
    //     display: false
    //   },
    //   tooltips: {
    //     bodySpacing: 4,
    //     mode: 'nearest',
    //     intersect: 0,
    //     position: 'nearest',
    //     xPadding: 10,
    //     yPadding: 10,
    //     caretPadding: 10
    //   },
    //   responsive: true,
    //   scales: {
    //     yAxes: [{
    //       gridLines: {
    //         zeroLineColor: 'transparent',
    //         drawBorder: false
    //       }
    //     }],
    //     xAxes: [{
    //       display: 0,
    //       ticks: {
    //         display: false
    //       },
    //       gridLines: {
    //         zeroLineColor: 'transparent',
    //         drawTicks: false,
    //         display: false,
    //         drawBorder: false
    //       }
    //     }]
    //   },
    //   layout: {
    //     padding: {
    //       left: 0,
    //       right: 0,
    //       top: 15,
    //       bottom: 15
    //     }
    //   }
    // };

    // this.canvas = document.getElementById('lineChartExample');
    // this.ctx = this.canvas.getContext('2d');

    // this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    // this.gradientStroke.addColorStop(0, '#80b6f4');
    // this.gradientStroke.addColorStop(1, this.chartColor);

    // this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    // this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    // this.gradientFill.addColorStop(1, 'rgba(249, 99, 59, 0.40)');

    // this.lineChartData = [
    //   {
    //     label: 'Desafíos',
    //     pointBorderWidth: 2,
    //     pointHoverRadius: 4,
    //     pointHoverBorderWidth: 1,
    //     pointRadius: 4,
    //     fill: true,
    //     borderWidth: 2,
    //     data: [2, 4, 3, 2, 1, 2, 3, 2, 3, 2, 4, 2]
    //   }
    // ];
    // this.lineChartColors = [
    //   {
    //     borderColor: '#f96332',
    //     pointBorderColor: '#FFF',
    //     pointBackgroundColor: '#f96332',
    //     backgroundColor: this.gradientFill
    //   }
    // ];
    // this.lineChartLabels = ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'];
    // this.lineChartOptions = this.gradientChartOptionsConfiguration;

    // this.lineChartType = 'line';

    // this.canvas = document.getElementById('lineChartExampleWithNumbersAndGrid');
    // this.ctx = this.canvas.getContext('2d');

    // this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    // this.gradientStroke.addColorStop(0, '#18ce0f');
    // this.gradientStroke.addColorStop(1, this.chartColor);

    // this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    // this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    // this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));

    // this.lineChartWithNumbersAndGridData = [
    //   {
    //     label: 'Desafíos',
    //     pointBorderWidth: 2,
    //     pointHoverRadius: 4,
    //     pointHoverBorderWidth: 1,
    //     pointRadius: 4,
    //     fill: true,
    //     borderWidth: 2,
    //     data: [0, 3, 1, 4, 2, 4, 4, 1, 6, 1, 4, 0]
    //   }
    // ];
    // this.lineChartWithNumbersAndGridColors = [
    //   {
    //     borderColor: '#18ce0f',
    //     pointBorderColor: '#FFF',
    //     pointBackgroundColor: '#18ce0f',
    //     backgroundColor: this.gradientFill
    //   }
    // ];
    // this.lineChartWithNumbersAndGridLabels = ['2,', '6', '10', '14', '18', '22', '24', '28'];
    // this.lineChartWithNumbersAndGridOptions = this.gradientChartOptionsConfigurationWithNumbersAndGrid;

    // this.lineChartWithNumbersAndGridType = 'line';




    // this.canvas = document.getElementById('barChartSimpleGradientsNumbers');
    // this.ctx = this.canvas.getContext('2d');

    // this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    // this.gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
    // this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));


    // this.lineChartGradientsNumbersData = [
    //   {
    //     label: 'Frecuencia del bloque',
    //     pointBorderWidth: 2,
    //     pointHoverRadius: 4,
    //     pointHoverBorderWidth: 1,
    //     pointRadius: 4,
    //     fill: true,
    //     borderWidth: 1,
    //     data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
    //   }
    // ];
    // this.lineChartGradientsNumbersColors = [
    //   {
    //     backgroundColor: this.gradientFill,
    //     borderColor: '#2CA8FF',
    //     pointBorderColor: '#FFF',
    //     pointBackgroundColor: '#2CA8FF',
    //   }
    // ];
    // this.lineChartGradientsNumbersLabels = [
    //   'doIf',
    //   'doIfElse',
    //   'getParam',
    //   'goToX:Y:',
    //   'keyPressed',
    //   'doRepeat',
    //   'doUntil',
    //   'doForever',
    //   'color',
    //   'input',
    //   'whenKeyPressed',
    //   'whenGreenFlag'
    // ];
    // this.lineChartGradientsNumbersOptions = {
    //   maintainAspectRatio: false,
    //   legend: {
    //     display: false
    //   },
    //   tooltips: {
    //     bodySpacing: 4,
    //     mode: 'nearest',
    //     intersect: 0,
    //     position: 'nearest',
    //     xPadding: 10,
    //     yPadding: 10,
    //     caretPadding: 10
    //   },
    //   responsive: 1,
    //   scales: {
    //     yAxes: [{
    //       gridLines: {
    //         zeroLineColor: 'transparent',
    //         drawBorder: false
    //       }
    //     }],
    //     xAxes: [{
    //       display: 0,
    //       ticks: {
    //         display: false
    //       },
    //       gridLines: {
    //         zeroLineColor: 'transparent',
    //         drawTicks: false,
    //         display: false,
    //         drawBorder: false
    //       }
    //     }]
    //   },
    //   layout: {
    //     padding: {
    //       left: 0,
    //       right: 0,
    //       top: 15,
    //       bottom: 15
    //     }
    //   }
    // }

    // this.lineChartGradientsNumbersType = 'bar';
  }
}

