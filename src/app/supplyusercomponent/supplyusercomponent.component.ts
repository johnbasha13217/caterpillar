import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplyusercomponent',
  templateUrl: './supplyusercomponent.component.html',
  styleUrls: ['./supplyusercomponent.component.css']
})
export class SupplyusercomponentComponent implements OnInit {

  selected: any;
  inventoryReport = true;
  inventoryMap: any;
  trackOrder: any;

  constructor() { }

  ngOnInit() {
      this.selected = 1;
  }

  setActiveInventory(item: any) {
    this.inventoryReport = true;
    this.selected = item;
  }

  

  isActive(item: any) {
    return this.selected === item;
  }
}
