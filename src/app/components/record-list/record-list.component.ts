import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MOCKDATA } from 'src/app/mock-collections/mock-data';
import { recordType } from 'src/app/mock-collections/mock-interface';
import { MatDialog } from '@angular/material/dialog';
import { RecordDetailsComponent } from '../record-details/record-details.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RecordListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  recordList: recordType[] = MOCKDATA.records;
  dataSource = new MatTableDataSource<recordType>();
  displayedColumns: string[] = [
    'icon',
    'carrier',
    'terminalId',
    'status',
    'dateActivated',
    'dateAdded',
    'dateModified',
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(MOCKDATA.records);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  userDetails(user: recordType[]): void {
    const dialogRef = this.dialog.open(RecordDetailsComponent, {
      data: user,
    });
  }
}
