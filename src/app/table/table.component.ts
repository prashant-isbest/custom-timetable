import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  slotA: string = 'slot - A';
  slotB: string = 'slot - B';
  slotC: string = 'slot - C';
  slotD: string = 'slot - D';
  slotE: string = 'slot - E';
  slotF: string = 'Professional Ethics';
  slotH: string = 'Project phase2';
  constructor() {}

  ngOnInit(): void {}

  pe3changed(e: Event) {
    this.slotA = (<HTMLSelectElement>e.target).value;
    console.log(e);
  }

  pe4changed(e: Event) {
    this.slotD = (<HTMLSelectElement>e.target).value;
    console.log(e);
  }
  se2changed(e: Event) {
    this.slotC = (<HTMLSelectElement>e.target).value;
    console.log(e);
  }

  mechanged(e: Event) {
    if ((<HTMLSelectElement>e.target).value == 'OB') {
      this.slotE = ' - ';
      this.slotB = 'Organization Behavior';
    } else {
      this.slotB = ' - ';
      this.slotE = 'E-commerce and Digital Marketing';
    }
    console.log(e);
  }

}
