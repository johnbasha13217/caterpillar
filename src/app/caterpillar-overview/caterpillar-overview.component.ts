import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);
import { CaterpillarService } from '../core/caterpillar.service';

@Component({
  selector: 'app-caterpillar-overview',
  templateUrl: './caterpillar-overview.component.html',
  styleUrls: ['./caterpillar-overview.component.css']
})
export class CaterpillarOverviewComponent implements OnInit {

  ssChart: any;
  ssChartOptions: any;
  scChart: any;
  scChartOptions: any;
  sdChart: any;
  sdChartOptions: any;
  savingsChart: any;
  savingsChartOptions: any;
  digitalChart: any;
  digitalChartOptions: any;
  treechart: any;
  treeoptions: any;

  supplierSpendType: any;
  categorySpendType: any;
  deptSpendType: any;
  supplierSavingsType: any;
  contractValueType: any;

  suppliersSpend: any = [];
  categorySpend: any = [];
  deptSpend: any = [];
  supplierSavings = [];
  contractValue = [];

  contracttreechartoptions: any;
  contracttreechart: any;

  metadata: any = {vendors: 0, contracts: 0}

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
    {
      name: "Daly",
      y: 12.8,
      annualised: 2.0,
      current: 1.2,
      crs: '23',
    },
    {
      name: "Stanbrige",
      y: 12.8,
      annualised: 2.4,
      current: 1.8,
      crs: '13',
    },
    {
      name: "Verona sheren",
      y: 22.8,
      annualised: 2.5,
      current: 1.3,
      crs: '2',
    },
    {
      name: "Daly Racheal",
      y: 12.8,
      annualised: 1.1,
      current: 1.0,
      crs: '10',
    },
    {
      name: "Stanley",
      y: 12.8,
      annualised: 2.8,
      current: 1.1,
      crs: '8',
    },
    {
      name: "Others",
      y: 14.8,
      annualised: 2.8,
      current: 1.1,
      crs: '8',
    }
  ];
  category: string;
  title: string;

  constructor(private caterpillar: CaterpillarService) { }

  ngOnInit() {
    this.supplierSpendType = 'CommittedAmount_2019';
    this.categorySpendType = 'CommittedAmount_2019';
    this.deptSpendType = 'CommittedAmount_2019';
    this.supplierSavingsType = 'CommittedAmount_2019';
    this.contractValueType = 'CommittedAmount_2019'
    this.spendSuppliers();
    this.spendCategory();
    this.spendDept();
    this.loadMetadata();
    this.supplierSaving();
    this.contractValueData();
    // this.loadSupplierSpendChart();
    // this.loadSpendByCategoryChart();
    // this.loadSpendByDeptChart();
    this.loadDigitalChart();
    // this.showTree();
    this.category = 'Commited';
    this.title = 'TOP 10 SUPPLIERS BY SPEND';
  }

  loadSupplierSpendChart() {
    var chartData = this.suppliersSpend;
    var tooltipEnabled = true;
    var $this = this;
    this.ssChartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#f0f0f0',
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
        pointFormat: "<b>{series.name}</b>: {point.y:.1f}"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          depth: 45,
          size : 200,
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
          name: "Supplier Spend",
          data: chartData,
          point: {
            events: {
                click: function (event) {
                    // this.series.chart.update({
                    //   tooltip: {
                    //     enabled: tooltipEnabled,
                    //   }
                    // });
                    // tooltipEnabled = tooltipEnabled ? false : true;
                    $this.updateTableData(this.name,event.point.color);
                },
                mouseOut: function (event) {
                  $this.updateTableData(event.target.name,event.target.color);
                  $this.setTranslation(this, false);
                },
                mouseOver: function(event) {
                  $this.updateTableData(event.target.name,event.target.color);
                  $this.setTranslation(this, true);
                }
            }
        }
        }
      ]
    }
    this.ssChart = new Chart(this.ssChartOptions);
  }

  updateTableData(name,colorforrow) {
    // console.log(name);
    // console.log(colorforrow);
    for(var i=0;i<this.newData.length;i++){
      if(this.newData[i].name == name){
        this.newData[i].color = colorforrow;
      }else{
        this.newData[i].color = "#fff";
      }
    }
  }

  setTranslation(p, slice){
    p.sliced = slice;
    if(p.sliced){
        p.graphic.animate(p.slicedTranslation);
    } else {
        p.graphic.animate({
            translateX: 0,
            translateY: 0
        });
    }

  }

  loadSpendByCategoryChart() {
    var chartData = this.categorySpend;
    var tooltipEnabled = true;
    var $this = this;
    this.scChartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#f0f0f0',
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
        pointFormat: "{series.name}: <b>{point.y:.1f}</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          depth: 45,
          size : 200,
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
          name: "Category Spend",
          data: chartData,
          point: {
            events: {
                click: function (event) {
                    // this.series.chart.update({
                    //   tooltip: {
                    //     enabled: tooltipEnabled,
                    //   }
                    // });
                    // tooltipEnabled = tooltipEnabled ? false : true;
                    $this.updateTableData(this.name,event.point.color);
                },
                mouseOut: function (event) {
                  $this.updateTableData(event.target.name,event.target.color);
                  $this.setTranslation(this, false);
                },
                mouseOver: function(event) {
                  $this.updateTableData(event.target.name,event.target.color);
                  $this.setTranslation(this, true);
                }
            }
        }
        }
      ]
    }
    this.scChart = new Chart(this.scChartOptions);
  }

  loadSpendByDeptChart() {
    var chartData = this.deptSpend;
    var tooltipEnabled = true;
    var $this = this;
    this.sdChartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#f0f0f0',
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
        pointFormat: "{series.name}: <b>{point.y:.1f}</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          depth: 45,
          size: 200,
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
          name: "Dept/BU Spend",
          data: chartData,
          point: {
            events: {
                click: function (event) {
                    // this.series.chart.update({
                    //   tooltip: {
                    //     enabled: tooltipEnabled,
                    //   }
                    // });
                    // tooltipEnabled = tooltipEnabled ? false : true;
                    $this.updateTableData(this.name,event.point.color);
                },
                mouseOut: function (event) {
                  $this.updateTableData(event.target.name,event.target.color);
                  $this.setTranslation(this, false);
                },
                mouseOver: function(event) {
                  $this.updateTableData(event.target.name,event.target.color);
                  $this.setTranslation(this, true);
                }
            }
        }
        }
      ]
    }
    this.sdChart = new Chart(this.sdChartOptions);
  }

  loadDigitalChart() {
    this.digitalChartOptions = {
      chart: {
        backgroundColor: '#f0f0f0',
        type: 'spline',
        style: {
            color: 'white',

        },
    },
    legend: {
        itemStyle: {
            color: 'black'
        },
        align: 'center',

        verticalAlign: 'bottom',
        floating: false,
        style: {
            color: '#fff'
        }
    },

    credits: {
        enabled: false
    },
    title: {
        text: null,
        style: {
            color: '#fff'
        }
    },
    plotOptions: {
         line: {
           marker:{
             enabled: false
           }
         }
    },
    xAxis: {
        tickInterval: 1,
        type: 'datetime',
        // categories: time,
        labels: {
            style: {
                color: 'black'
            },
            format: '{value}',
        },
    },
    yAxis: {
        gridLineColor: 'transparent',
        labels: {
            format: '{value}',
            style: {
                color: 'fff'
            }
        },

        title: {
            text: null,
        },
    },
    series: [
        {
            name: 'Goal',
            type: 'line',
            data: [5, 10, 15, 20, 25, 30, 35],
            color: 'black'
        },
        {
            name: 'Actual',
            type: 'line',
            data: [2, 12, 4, 25, 25, 40, 45],
            color: '#fceb36'

        }
    ],
    }
    this.digitalChart = new Chart(this.digitalChartOptions);
  }

  spend(spend, title) {
    this.title = title;
    this.newData = []
    if(spend == 'Commited') {
      this.category = 'Commited';
      this.newData = [{name: "Stanbrige",y: 12.8,annualised: 2.5,current: 1.3,crs: 23},{name: "Wong",y: 12.8,annualised: 1.1,current: 1.3,crs: 23},{name: "Peter",y: 12.8,annualised: 2.1,current: 1.9,crs: 23},{name: "Tamzyn",y: 12.8,annualised: 2.1,current: 2.0,crs: 23},{name: "Verona",y: 12.8,annualised: 2.1,current: 1.3,crs: 23},{name: "Daly",y: 12.8,annualised: 2.1,current: 1.3,crs: 23},{name: "Stanbrige",y: 12.8,annualised: 2.1,current: 1.3,crs: 23},{name: "Verona sheren",y: 12.8,annualised: 2.1,current: 1.9,crs: 23},{name: "Daly Racheal",y: 12.8,annualised: 2.1,current: 1.3,crs: 23},{name: "Stanley",y: 12.8,annualised: 2.1,current: 1.3,crs: 23}, {name: "Others",y: 13.8,annualised: 13.1,current: 1.0,crs: 23}]
    
    }else if(spend == 'Current'){
      this.category = 'Current';
      this.newData = [{name: "Stanbrige",y: 12.8,annualised: 1.0,current: 1.1,crs: 23},{name: "Wong",y: 12.8,annualised: 2.1,current: 1.1,crs: 23},{name: "Peter",y: 12.8,annualised: 1.1,current: 1.0,crs: 23},{name: "Tamzyn",y: 12.8,annualised: 1.8,current: 1.3,crs: 23},{name: "Verona",y: 12.8,annualised: 1.1,current: 1.4,crs: 23},{name: "Daly",y: 12.8,annualised: 1.1,current: 1.9,crs: 23},{name: "Stanbrige",y: 12.8,annualised: 1.4,current: 1.9,crs: 23},{name: "Verona sheren",y: 12.8,annualised: 1.4,current: 1.3,crs: 23},{name: "Daly Racheal",y: 12.8,annualised: 1.6,current: 2.3,crs: 23},{name: "Stanley",y: 12.8,annualised: 2.1,current: 1.3,crs: '23'}, {name: "Others",y: 14.8,annualised: 11.1,current: 1.3,crs: 23}]
    
    }else if(spend == 'Annualised'){
      this.category = 'Annualised';
      this.newData = [{name: "Stanbrige",y: 12.8,annualised: 2.1,current: 1.5,crs: 23},{name: "Wong",y: 12.8,annualised: 1.1,current: 1.5,crs: 23},{name: "Peter",y: 12.8,annualised: 2.3,current: 1.1,crs: 23},{name: "Tamzyn",y: 12.8,annualised: 1.9,current: 1.4,crs: 23},{name: "Verona",y: 12.8,annualised: 1.1,current: 1.6,crs: 23},{name: "Daly",y: 12.8,annualised: 1.9,current: 1.2,crs: 23},{name: "Stanbrige",y: 12.8,annualised: 1.5,current: 1.3,crs: 23},{name: "Verona sheren",y: 12.8,annualised: 2.1,current: 1.1,crs: 23},{name: "Daly Racheal",y: 12.8,annualised: 1.8,current: 1.3,crs: 23},{name: "Stanley",y: 12.8,annualised: 2.1,current: 1.3,crs: '23'}, {name: "Others",y: 11.8,annualised: 12.1,current: 1.3,crs: 23}]
    
    }
  }

  showTree(data) {
    var $this = this;
    var chartData = $this.supplierSavings;
    console.log(chartData);
    this.treeoptions = {
      chart: {
        backgroundColor: '#f0f0f0',
      },
      title : {
         text: null
      },
      // colorAxis : {
      //    minColor: '#FFFFFF',
      //    maxColor: Highcharts.getOptions().colors[0]
      // },
      legend: {
        enabled: false
      },
      credits: {
         enabled: false
      },
      series : [{
         type: "treemap",
         layoutAlgorithm: 'squarified',
         events: {
          click: function (event) {
            $this.updateTableData(event.target.name,event.target.color);
          },
          mouseOut: function (event) {
            $this.updateTableData(event.target.name,event.target.color);
            $this.setTranslation(this, false);
          },
          mouseOver: function(event) {
            $this.updateTableData(event.target.name,event.target.color);
            $this.setTranslation(this, true);
          }
        },
         data: data,
         showInLegend: true
      }]
   };
    this.treechart = new Chart(this.treeoptions);
  }

  contractTree(data) {
    var $this = this;
    this.contracttreechart = {
      chart: {
        backgroundColor: '#f0f0f0',
      },
      title : {
         text: null
      },
      // colorAxis : {
      //    minColor: '#FFFFFF',
      //    maxColor: Highcharts.getOptions().colors[0]
      // },
      legend: {
        enabled: false
      },
      credits: {
         enabled: false
      },
      series : [{
         type: "treemap",
         layoutAlgorithm: 'squarified',
         events: {
          click: function (event) {
            $this.updateTableData(event.target.name,event.target.color);
          },
          mouseOut: function (event) {
            $this.updateTableData(event.target.name,event.target.color);
            $this.setTranslation(this, false);
          },
          mouseOver: function(event) {
            $this.updateTableData(event.target.name,event.target.color);
            $this.setTranslation(this, true);
          }
        },
         data: data,
         showInLegend: true
      }]
   };
    this.contracttreechart = new Chart(this.contracttreechart);
  }

///////
  spendSuppliersEvent(type) {
       this.supplierSpendType = type;
       this.spendSuppliers();
  }

  spendSuppliers() {
    
    this.caterpillar.getSupplierSpend(this.supplierSpendType).subscribe(data => {
      // console.log(data);
      this.suppliersSpend = data['data'];
      this.loadSupplierSpendChart();
    });
  }

  ///////
  spendCategoryEvent(type) {
      this.categorySpendType = type;
      this.spendCategory();
  }

  spendCategory() {
    this.caterpillar.getCategorySpend(this.categorySpendType).subscribe(data => {
      // console.log(data);
      this.categorySpend = data['data'];
      this.loadSpendByCategoryChart();
    });
  }

  //////

  spendDeptEvent(type) {
    this.deptSpend = type;
    this.spendDept();
  }

  spendDept() {
    this.caterpillar.getDeptSpend(this.deptSpendType).subscribe(data => {
      // console.log(data);
      this.deptSpend = data['data'];
      this.loadSpendByDeptChart();
    });
  }

  /////

  supplierSavingEvent(type) {
      this.supplierSavingsType = type;
      this.supplierSaving();
  }

  supplierSaving() {
    this.caterpillar.getSupplierSavings(this.supplierSavingsType).subscribe(data => {
      console.log(data);
      this.supplierSavings = data['data'];
      this.showTree(data['data']);
    });
  }

  //////

  contractValueEvent(type) {
      this.contractValueType = type;
      this.contractValueData();
  }

  contractValueData() {
    this.caterpillar.getContractValue(this.contractValueType).subscribe(data => {
      console.log(data);
      this.contractValue = data['data'];
      this.contractTree(this.contractValue);
    });
  }

  loadMetadata() {
    this.caterpillar.getVendorsandContracts().subscribe(data => {
      // console.log(data);
      this.metadata.vendors = data['vendors'];
      this.metadata.contracts = data['contracts']
    });
  }

}