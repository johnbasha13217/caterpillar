import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reportusecasecomponent',
  templateUrl: './reportusecasecomponent.component.html',
  styleUrls: ['./reportusecasecomponent.component.css']
})
export class ReportusecasecomponentComponent implements OnInit {

  selected: any;
  expenseAnalysis = true;

  constructor(private router: Router) { }

  ngOnInit() {
      this.selected = 1;
  }


  setactiveProject(item: any) {
    this.expenseAnalysis = true;
    this.selected = item;
  }

  

  isActive(item: any) {
    return this.selected === item;
  }
}
