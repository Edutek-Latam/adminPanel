import { Component, OnInit } from '@angular/core';
import { months } from '../../../helpers/helpers'
import Chart, { ChartConfiguration, ChartData, ChartTypeRegistry, TimeScale } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent implements OnInit {
  chart: any = []
  chartLine: any=[]
  chartDoughnut : any = []
  chartPie: any = [];
  constructor(){
   
  }

  chartLineG(){
    const labels = months({count: 7});
    const data = {
      //labels,
      data:[65, 59, 80, 81, 56, 55, 40],
      backgroundColor:[
        'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1


    }
    const config : ChartConfiguration  = {
      type:'bar',
      data:{
        labels: labels,
        datasets:[
          {
            label:'Enero',
            data:[65/* , 59, 80, 81, 56, 55, 40 */],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            /*   'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)' */
            ], borderColor: [
              'rgb(255, 99, 132)',
              /* 'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)' */
            ],
            borderWidth: 1
          },
          {
            label:'Febrero',
            data:[ 59/*, 80, 81, 56, 55, 40 */],
            backgroundColor: [
              'rgba(255, 205, 86, 0.2)',
            /*   'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)' */
            ], borderColor: [
              'rgb(255, 159, 64)',
              /* 'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)' */
            ],
            borderWidth: 1
          },
          {
            label:'Marzo',
            data:[ 80/*, 81, 56, 55, 40 */],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
            /*   'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)' */
            ], borderColor: [
              'rgb(75, 192, 192)',
              /* 'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)' */
            ],
            borderWidth: 1
          },
          
        ]
      }
    };

    this.chartLine = new Chart('chartLine', config );
  }

  chartDoughnutG(){
    const data: ChartData = {
      labels:['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
      datasets:[
        {
          label:'Dataset 1',
          data:[35,24,45, 23,23],
          backgroundColor:[
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ]
        }
      ]
    }

    const config :ChartConfiguration = {
      type:'doughnut',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
          }
        }
      },
    }

    this.chartDoughnut = new Chart('chartDoughnut', config);
  }

  chartPieG(){
    const data: ChartData = {
      labels:['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
      datasets:[
        {
          label:'Dataset 1',
          data:[35,24,45, 23,23],
          backgroundColor:[
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ]
        }
      ]
    }
 
    const config :ChartConfiguration = {
      type:'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
          }
        }
      },
    }

    this.chartPie = new Chart('chartPie', config);
  }

  ngOnInit(): void {
    this.chartLineG()
    this.chartDoughnutG()
    this.chartPieG()
    this.chart = new Chart("canvas",{
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }
}
