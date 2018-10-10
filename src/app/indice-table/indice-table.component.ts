import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { IndiceTableDataSource } from './indice-table-datasource';

@Component({
  selector: 'app-indice-table',
  templateUrl: './indice-table.component.html',
  styleUrls: ['./indice-table.component.css'],
})
export class IndiceTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: IndiceTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new IndiceTableDataSource(this.paginator, this.sort);
  }
}
