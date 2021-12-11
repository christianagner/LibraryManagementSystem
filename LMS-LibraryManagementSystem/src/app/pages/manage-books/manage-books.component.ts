import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  isbn: number;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1230, isbn: 3253453, name: 'Hydrogen', weight: 'Information Technology', symbol: 'BookAuthor'},
  {position: 1231, isbn: 3253453, name: 'Helium', weight: 'Information Technology', symbol: 'BookAuthor'},
  {position: 1232, isbn: 3253453, name: 'Lithium', weight: 'Information Technology', symbol: 'BookAuthor'},
  {position: 1243, isbn: 3253453, name: 'Beryllium', weight: 'Information Technology', symbol: 'BookAuthor'},
  {position: 1244, isbn: 3253453, name: 'Boron', weight: 'Information Technology', symbol: 'BookAuthor'},
  {position: 1245, isbn: 3253453, name: 'Carbon', weight: 'Information Technology', symbol: 'BookAuthor'},
  {position: 1246, isbn: 3253453, name: 'Nitrogen', weight: 'Information Technology', symbol: 'BookAuthor'},
  {position: 1247, isbn: 3253453, name: 'Oxygen', weight: 'Information Technology', symbol: 'BookAuthor'},
  {position: 1248, isbn: 3253453, name: 'Fluorine', weight: 'Information Technology', symbol: 'BookAuthor'},
  {position: 1249, isbn: 3253453, name: 'Neon', weight: 'Information Technology', symbol: 'BookAuthor'},
];

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'isbn', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
  } 
}
