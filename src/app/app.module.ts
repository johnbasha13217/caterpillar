import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsecaseComponent } from './usecase/usecase.component';
import { ReportsComponent } from './reports/reports.component';
import { HealthComponent } from './health/health.component';
import { ManfacturingComponent } from './manfacturing/manfacturing.component';
import { TextileComponent } from './textile/textile.component';
import { EnergyComponent } from './energy/energy.component';
import { VehicledataComponent } from './vehicledata/vehicledata.component';
import { IndustriesComponent } from './industries/industries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import * as $ from 'jquery';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { InventoryReportComponent } from './inventory-report/inventory-report.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartModule,HIGHCHARTS_MODULES  } from 'angular-highcharts';
import * as drilldown from 'highcharts/modules/drilldown.src.js';
import * as treemap from 'highcharts/modules/treemap.src.js';
import * as solidgauge from 'highcharts/modules/solid-gauge.js';
import { HttpClientModule } from '@angular/common/http';
import { InventoryMapComponent } from './inventory-map/inventory-map.component';
import { WarehouseOverviewComponent } from './warehouse-overview/warehouse-overview.component';
import { StockTrackingComponent } from './stock-tracking/stock-tracking.component';
import { RouteService } from './service/route.service';
import { HttpModule } from '@angular/http';
import { DriverOverviewComponent } from './driver-overview/driver-overview.component';
import { VehicleliveMetricComponent } from './vehiclelive-metric/vehiclelive-metric.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddTenantComponent } from './super-admin/add-tenant/add-tenant.component';
import { AddUserComponent } from './super-admin/add-user/add-user.component';
import { AddDeviceComponent } from './super-admin/add-device/add-device.component';
import * as Heatmap from 'highcharts/modules/heatmap.src';
import * as more from 'highcharts/highcharts-more.src';
import * as solidGauge from 'highcharts/modules/solid-gauge.src';
import { CustomerFeedbackAnalysisComponent } from './customer-feedback-analysis/customer-feedback-analysis.component';
import * as highstock from 'highcharts/modules/stock.src';

import {AngularDateTimePickerModule} from 'angular2-datetimepicker';
import { PolticalStaticsComponent } from './politics-usecase/poltical-statics/poltical-statics.component';
import { StateOverviewComponent } from './politics-usecase/state-overview/state-overview.component';
import { BoothinchargeLevelComponent } from './politics-usecase/boothincharge-level/boothincharge-level.component';
import { ForecastTrendAnalysisComponent } from './politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component';

import { BoothinchargeComponent } from './boothincharge-level/boothincharge-level.component'; 
import { ForecastTrendComponent } from './forecast-trend-analysis/forecast-trend-analysis.component';
import { PolticalComponent } from './poltical-statics/poltical-statics.component';
import { StateOverComponent } from './state-overview/state-overview.component';

import {DatabotService } from './core/databot.service';

import { HrmsUsecase3Component } from './hrms-usecase/hrms-usecase3/hrms-usecase3.component';
import { HrmsUsecase2Component } from './hrms-usecase/hrms-usecase2/hrms-usecase2.component';
import { HrmsUsecase1Component } from './hrms-usecase/hrms-usecase1/hrms-usecase1.component';
import { HealthCareAnalyticsComponent } from './healthcare-usecase/health-care-analytics/health-care-analytics.component';
import { ExpenseAnalyticsComponent } from './finance-usecase/expense-analytics/expense-analytics.component';
import { ProjectManagmentComponent } from './manufacturing-usecase/project-managment/project-managment.component';
import { DataingestionComponent } from './dataingestion/dataingestion/dataingestion.component';
import { FileUploadModule } from 'ng2-file-upload';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng5SliderModule } from 'ng5-slider';
import { ProdutionusecaseComponent } from './produtionusecase/produtionusecase.component';
import { SupplyusercomponentComponent } from './supplyusercomponent/supplyusercomponent.component';
import { TelematicsusercomponentComponent } from './telematicsusercomponent/telematicsusercomponent.component';
import { HumancapitalusecomponentComponent } from './humancapitalusecomponent/humancapitalusecomponent.component';
import { ReportusecasecomponentComponent } from './reportusecasecomponent/reportusecasecomponent.component';
import { HealthusecasecomponentComponent } from './healthusecasecomponent/healthusecasecomponent.component';
import { FleetmaticusescomponentComponent } from './fleetmaticusescomponent/fleetmaticusescomponent.component';
import { VehiclebehaviorComponent } from './vehiclebehavior/vehiclebehavior.component';
import { VehicleperformanceComponent } from './vehicleperformance/vehicleperformance.component';
import { VehiclerouteComponent } from './vehicleroute/vehicleroute.component';
import { VehiclecustomerComponent } from './vehiclecustomer/vehiclecustomer.component';
import { VehiclebehaviourtenantComponent } from './vehiclebehaviourtenant/vehiclebehaviourtenant.component';
import { FleetmaticsComponent } from './fleetmatics/fleetmatics.component';
import { DataTableModule } from 'angular7-data-table';
import { VendormanagerComponent } from './vendormanager/vendormanager.component';
import { CaterpillarOverviewComponent } from './caterpillar-overview/caterpillar-overview.component';
import { VenderHomeComponent } from './industries/vendormanagement/vender-home/vender-home.component';
import { SuppliersComponent } from './industries/vendormanagement/suppliers/suppliers.component';
import { DeptComponent } from './industries/vendormanagement/dept/dept.component';
import { CategoryComponent } from './industries/vendormanagement/category/category.component';
import { LandingpageComponent } from './industries/vendormanagement/landingpage/landingpage.component';


@NgModule({
  declarations: [
    AppComponent,

    UsecaseComponent,
    ReportsComponent,
    HealthComponent,
    ManfacturingComponent,
    TextileComponent,
    EnergyComponent,
    VehicledataComponent,
    IndustriesComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    InventoryReportComponent,
    InventoryMapComponent,
    WarehouseOverviewComponent,
    StockTrackingComponent,
    DriverOverviewComponent,
    VehicleliveMetricComponent,
    SignUpComponent,
    AddTenantComponent,
    AddUserComponent,
    AddDeviceComponent,
    CustomerFeedbackAnalysisComponent,
    PolticalStaticsComponent,
    StateOverviewComponent,
    BoothinchargeLevelComponent,
    ForecastTrendAnalysisComponent,
    HrmsUsecase3Component,
    HrmsUsecase2Component,
    HrmsUsecase1Component,
    HealthCareAnalyticsComponent,
    ExpenseAnalyticsComponent,
    ProjectManagmentComponent,
    DataingestionComponent,
    BoothinchargeComponent,
    ForecastTrendComponent,
    PolticalComponent,
    StateOverComponent,
    ProdutionusecaseComponent,
    SupplyusercomponentComponent,
    TelematicsusercomponentComponent,
    HumancapitalusecomponentComponent,
    ReportusecasecomponentComponent,
    HealthusecasecomponentComponent,
    FleetmaticusescomponentComponent,
    VehiclebehaviorComponent,
    VehicleperformanceComponent,
    VehiclerouteComponent,
    VehiclecustomerComponent,
    VehiclebehaviourtenantComponent,
    FleetmaticsComponent,
    CaterpillarOverviewComponent,
    VenderHomeComponent,
    SuppliersComponent,
    DeptComponent,
    CategoryComponent,
    LandingpageComponent,
    VendormanagerComponent

    ],
  imports: [
    BrowserModule,ChartModule,HttpClientModule,HttpModule,AngularDateTimePickerModule,FileUploadModule,NgxPaginationModule,Ng5SliderModule,
    AppRoutingModule,NgbModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      maxPercent: 960
    }),
    DataTableModule
  ],
  providers: [RouteService,DatabotService,{provide: HIGHCHARTS_MODULES,
    useFactory: () => [ drilldown, treemap,more , Heatmap, solidGauge,highstock]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
