import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsecaseComponent } from './usecase/usecase.component';
import { ReportsComponent } from './reports/reports.component';
import { HealthComponent } from './health/health.component'
import { ManfacturingComponent } from './manfacturing/manfacturing.component'
import { TextileComponent } from './textile/textile.component'
import { EnergyComponent } from './energy/energy.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { IndustriesComponent } from './industries/industries.component';
import { InventoryReportComponent } from './inventory-report/inventory-report.component';
import { InventoryMapComponent } from './inventory-map/inventory-map.component';
import { WarehouseOverviewComponent } from './warehouse-overview/warehouse-overview.component';
import { StockTrackingComponent } from './stock-tracking/stock-tracking.component';
import { DriverOverviewComponent } from './driver-overview/driver-overview.component';
import { VehicleliveMetricComponent } from './vehiclelive-metric/vehiclelive-metric.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddTenantComponent } from './super-admin/add-tenant/add-tenant.component';
import { AddUserComponent } from './super-admin/add-user/add-user.component';
import { AddDeviceComponent } from './super-admin/add-device/add-device.component';
import { CustomerFeedbackAnalysisComponent } from './customer-feedback-analysis/customer-feedback-analysis.component';
import { PolticalStaticsComponent } from './politics-usecase/poltical-statics/poltical-statics.component';
import { StateOverviewComponent } from './politics-usecase/state-overview/state-overview.component';
import { BoothinchargeLevelComponent } from './politics-usecase/boothincharge-level/boothincharge-level.component';
import { ForecastTrendAnalysisComponent } from './politics-usecase/forecast-trend-analysis/forecast-trend-analysis.component';
import { HrmsUsecase1Component } from './hrms-usecase/hrms-usecase1/hrms-usecase1.component';
import { HrmsUsecase2Component } from './hrms-usecase/hrms-usecase2/hrms-usecase2.component';
import { HrmsUsecase3Component } from './hrms-usecase/hrms-usecase3/hrms-usecase3.component';
import { HealthCareAnalyticsComponent } from './healthcare-usecase/health-care-analytics/health-care-analytics.component';
import { ExpenseAnalyticsComponent } from './finance-usecase/expense-analytics/expense-analytics.component';
import { ProjectManagmentComponent } from './manufacturing-usecase/project-managment/project-managment.component';
import { DataingestionComponent } from './dataingestion/dataingestion/dataingestion.component';
import { BoothinchargeComponent } from './boothincharge-level/boothincharge-level.component';
import { ForecastTrendComponent } from './forecast-trend-analysis/forecast-trend-analysis.component';
import { PolticalComponent } from './poltical-statics/poltical-statics.component';
import { StateOverComponent } from './state-overview/state-overview.component';
import { ProdutionusecaseComponent } from './produtionusecase/produtionusecase.component';
import { SupplyusercomponentComponent } from './supplyusercomponent/supplyusercomponent.component';
import { TelematicsusercomponentComponent } from './telematicsusercomponent/telematicsusercomponent.component';
import { HumancapitalusecomponentComponent } from './humancapitalusecomponent/humancapitalusecomponent.component';
import { ReportusecasecomponentComponent } from './reportusecasecomponent/reportusecasecomponent.component';
import { HealthusecasecomponentComponent } from './healthusecasecomponent/healthusecasecomponent.component';
import { FleetmaticusescomponentComponent } from './fleetmaticusescomponent/fleetmaticusescomponent.component';
import { FleetmaticsComponent } from './fleetmatics/fleetmatics.component';
import { VendormanagerComponent } from './vendormanager/vendormanager.component';
import { CaterpillarOverviewComponent } from './caterpillar-overview/caterpillar-overview.component';
import { SuppliersComponent } from './industries/vendormanagement/suppliers/suppliers.component';
import { DeptComponent } from './industries/vendormanagement/dept/dept.component';
import { CategoryComponent } from './industries/vendormanagement/category/category.component';
import { LandingpageComponent } from './industries/vendormanagement/landingpage/landingpage.component';
import { VenderHomeComponent } from './industries/vendormanagement/vender-home/vender-home.component';
import { AuthGuard } from './core/guards/auth.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'industries', component: IndustriesComponent, runGuardsAndResolvers: 'always', canActivate:[AuthGuard]},
  { path: 'industries/:id', component: IndustriesComponent, runGuardsAndResolvers: 'always', canActivate:[AuthGuard]},
  { path: 'health', component: HealthComponent, canActivate:[AuthGuard] },
  { path: 'manufacturing', component: ManfacturingComponent, canActivate:[AuthGuard] },
  { path: 'textile', component: TextileComponent },
  { path: 'energy', component: EnergyComponent },
  { path: 'usecase', component: UsecaseComponent },
  { path: 'reports', component: ReportsComponent, outlet: 'reports' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inventory', component: InventoryReportComponent },
  { path: 'inventormap', component: InventoryMapComponent },
  { path: 'warehouseoverview', component: WarehouseOverviewComponent },
  { path: 'stocktracking', component: StockTrackingComponent },
  { path: 'driver-overview', component: DriverOverviewComponent },
  { path: 'driver-overview/:id', component: DriverOverviewComponent },
  {path:'vehicle-metric', component:VehicleliveMetricComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'add-tenant',component:AddTenantComponent},
  {path:'add-user', component:AddUserComponent},
  {path:'add-device', component:AddDeviceComponent},
  {path:'customer-feedback', component:CustomerFeedbackAnalysisComponent},
  {path:'poltical-statics', component:PolticalStaticsComponent},
  {path:'state-overview', component:StateOverviewComponent},
  {path:'booth-incharge', component:BoothinchargeLevelComponent},
  {path:'forecast-analysis', component:ForecastTrendAnalysisComponent},
  {path:'hrms-usecase-1', component:HrmsUsecase1Component},
  {path:'hrms-usecase-2',component:HrmsUsecase2Component},
  {path:'hrms-usecase-3',component:HrmsUsecase3Component},
  {path:'healthcare-analytics', component:HealthCareAnalyticsComponent},
  {path:'finance-expense', component:ExpenseAnalyticsComponent},
  {path:'project-managment',component:ProjectManagmentComponent},
  {path:'data-ingestion', component:DataingestionComponent},
  {path: 'boothincharge', component:BoothinchargeComponent},
  {path: 'forecasttrend', component: ForecastTrendComponent},
  {path: 'political', component:PolticalComponent},
  {path: 'stateover', component: StateOverComponent},
  {path: 'productionusecase', component: ProdutionusecaseComponent},
  {path: 'supplyusercase', component: SupplyusercomponentComponent},
  {path: 'telematicsusecase', component: TelematicsusercomponentComponent},
  {path: 'humancapital', component: HumancapitalusecomponentComponent},
  {path: 'reportusecase', component: ReportusecasecomponentComponent},
  {path: 'healthusecase', component: HealthusecasecomponentComponent},
  {path: 'fleetmatic', component: FleetmaticusescomponentComponent},
  {path: 'fleetmatics', component: FleetmaticsComponent},
  {path: 'cat-overview', component: CaterpillarOverviewComponent, canActivate:[AuthGuard]},
  {path: 'vendor-home', component: VenderHomeComponent, canActivate:[AuthGuard]},
  {path: 'suppliers', component: SuppliersComponent, canActivate:[AuthGuard]},
  {path: 'dept', component: DeptComponent, canActivate:[AuthGuard]},
  {path: 'landingpage', component: LandingpageComponent, canActivate:[AuthGuard]},
  {path: 'category', component: CategoryComponent, canActivate:[AuthGuard]},
  { path: 'vendor-manager', component: VendormanagerComponent, canActivate:[AuthGuard]},
  { path: 'vendor-home', component: VenderHomeComponent, canActivate:[AuthGuard]}
  // {path: '', component : HomeComponent, pathMatch : 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true,  onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
