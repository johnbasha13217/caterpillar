import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  asgChartOptions : any;
  asgChart : any;
  selected1 = 3;
  selected = 1;
  selected2 = 5;
  scChartOptions : any;
  scChart : any;
  CURRENT : any;
  ANNUALIZED : any;
  COMMITED : any;
  SPEND : any;
  constructor() { }
  newData: any = [
    {
      name: "Stanbrige",
      y: 12.8,
      annualised: 2.1,
      current: 1.3,
      crs: '23',

    },
    {
      name: "Wong",
      y: 12.8,
      annualised: 2.9,
      current: 1.32,
      crs: '23',
    },
    {
      name: "Peter",
      y: 12.8,
      annualised: 2.1,
      current: 0.9,
      crs: '23',
    },
    {
      name: "Tamzyn",
      y: 12.8,
      annualised: 2.0,
      current: 1.3,
      crs: '23',
    },
    {
      name: "Verona",
      y: 22.8,
      annualised: 2.9,
      current: 1.3,
      crs: '23',
    },
    // {
    //   name: "Daly",
    //   y: 12.8,
    //   annualised: 2.0,
    //   current: 1.2,
    //   crs: '23',
    // },
    // {
    //   name: "Stanbrige",
    //   y: 12.8,
    //   annualised: 2.4,
    //   current: 1.8,
    //   crs: '13',
    // },
    // {
    //   name: "Verona sheren",
    //   y: 22.8,
    //   annualised: 2.5,
    //   current: 1.3,
    //   crs: '2',
    // },
    // {
    //   name: "Daly Racheal",
    //   y: 12.8,
    //   annualised: 1.1,
    //   current: 1.0,
    //   crs: '10',
    // },
    // {
    //   name: "Stanley",
    //   y: 12.8,
    //   annualised: 2.8,
    //   current: 1.1,
    //   crs: '8',
    // },
    // {
    //   name: "Others",
    //   y: 14.8,
    //   annualised: 2.8,
    //   current: 1.1,
    //   crs: '8',
    // }
  ];

  ngOnInit() {
    this.loadSpendByCategoryChart();
    this.ANNUALIZED = '$3.5M';
      this.CURRENT = '$4.5M';
      this.COMMITED = '$8.67M';
      this.SPEND = '$9.7M'
  }
  loadSpendByCategoryChart() {
    var chartData = this.newData;
    var tooltipEnabled = true;
    var $this = this;
    this.scChartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor : null,
        // height : 595,
        // width:1000,
        options3d: {
          enabled: true,
          alpha: 55,
          beta: 0
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
      accessibility: {
        point: {
          valueSuffix: "%"
        }
      },
      tooltip: {
        enabled: true,
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          depth: 55,
          size: 300,
          dataLabels: {
            enabled: false,
            format: "{point.name}"
          },
          showInLegend: false,
          slicedOffset: 40
        }
      },
      series: [
        {
          type: "pie",
          name: "Browser share",
          data: chartData,
          point: {
            events: {
                click: function (event) {
                    // this.series.chart.update({
                    //   tooltip: {
                    //     enabled: tooltipEnabled,
                    //   }
                    // });
                    tooltipEnabled = tooltipEnabled ? false : true;
                    $this.updateTableData(this.name,event.point.color);
                }
            }
        }
        }
      ]
    }
    this.scChart = new Chart(this.scChartOptions);
  }
  updateTableData(name,colorforrow) {
    console.log(name);
    console.log(colorforrow);
    for(var i=0;i<this.newData.length;i++){
      if(this.newData[i].name == name){
        this.newData[i].color = colorforrow;
      }else{
        this.newData[i].color = "#fff";
      }
    }
  }
  // charts(){
  //   this.asgChartOptions = {
  //     chart: {
  //       plotBackgroundColor: null,
  //       plotBorderWidth: null,
  //       plotShadow: false,
  //       type: 'pie',
  //       backgroundColor : null,
  //       height : 370
  //     },
  //     tooltip: {
  //       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  //     },
  //     title: {
  //       text: null
  //     },
  //     plotOptions: {
  //       pie: {
  //         allowPointSelect: true,
  //         cursor: 'pointer',
  //         dataLabels: {
  //           enabled: false
  //         },
  //         showInLegend: true,
  //         innerSize:150
  //       }
  //     },
  //     credits: {
  //       enabled: false
  //     },
  //     series: [{
  //       name: 'Brands',
  //       colorByPoint: true,
  //       data: [
  //         ['Architect', 10],
  //            ['Database Analyst', 5],
  //            ['Business Analyst', 7],
  //            ['category',8]
  //       ],
  //       type: undefined
  //     }]
  //   },
  //   this.asgChart = new Chart(this.asgChartOptions);
  //  }
   showDashboard(item,total) {
    this.selected = total;
    if(item == 'COMMITED'){
      this.COMMITED = '$8.67M';
      this.SPEND = '$9.7M';
    }else if(item == 'SPEND'){
      this.SPEND = '$8.3M';
      this.COMMITED = '$7.5M';
    }
   }
   showDashboard1(item,selected) {
    this.selected1 = selected;
    if(item == 'CURRENT'){
      this.CURRENT = '$3.5M';
      this.ANNUALIZED = '$4.5M';
    }else if(item == 'ANNUALIZED'){
      this.ANNUALIZED = '$3.5M';
      this.CURRENT = '$4.5M';
    }
   }
   showDashboard2(item) {
    this.selected2 = item;
   }
   
   isActive(item:any) {
    return this.selected === item;
  };
  isActive1(item:any) {
    return this.selected1 === item;
  };
  isActive2(item:any) {
    return this.selected2 === item;
  };

}
