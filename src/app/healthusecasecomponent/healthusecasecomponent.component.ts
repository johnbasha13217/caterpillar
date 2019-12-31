import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthusecasecomponent',
  templateUrl: './healthusecasecomponent.component.html',
  styleUrls: ['./healthusecasecomponent.component.css']
})
export class HealthusecasecomponentComponent implements OnInit {

  selected: any;
  healthAnalysis = true;

  constructor() { }

  ngOnInit() {
      this.selected = 1;
  }

  setactiveProject(item: any) {
    this.healthAnalysis = true;
    this.selected = item;
  }

  

  isActive(item: any) {
    return this.selected === item;
  }

}
