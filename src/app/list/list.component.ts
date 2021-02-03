import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  visitorsList: any = [];
  
  displayedColumns: string[] = ['name', 'email', 'visitType', 'personToVisit', 'dateOfEntry', 'timeOfEntry', 'timeOfExit'];
  dataSource: never[];
  // dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
    let visitors: any = []
    visitors = localStorage.getItem('visitors')
    // this.visitorsList = new MatTableDataSource(visitors);
    this.visitorsList = JSON.parse(visitors);
    console.log(this.visitorsList);
    console.log(this.visitorsList[0].Name);
    
  }

}
