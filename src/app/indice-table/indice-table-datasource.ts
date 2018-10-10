import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface IndiceTableItem {
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: IndiceTableItem[] = [
  {id: 1, name: 'Arroz con camaron'},
  {id: 2, name: 'El moño colorado'},
  {id: 3, name: 'Viva tepupa'},
  {id: 4, name: 'Las chiquitas'},
  {id: 5, name: 'La pilareña'},
  {id: 6, name: 'El columpio'},
  {id: 7, name: 'Paloma azul'},
  {id: 8, name: 'Cielo Azul cielo nublado'},
  {id: 9, name: 'La mesa del rincon'},
  {id: 10, name: 'La aventura'},
  {id: 11, name: 'La negra que las afloja'},
  {id: 12, name: 'Mueve tu cintura'},
  {id: 13, name: 'Cumbia en llamas'},
  {id: 14, name: 'Cumbia lunera'},
  {id: 15, name: 'La pajarera'},
  {id: 16, name: 'Los 3 amarradores'},
  {id: 17, name: 'Laurita Garza'},
  {id: 18, name: 'Tragos Amargos'},
  {id: 19, name: 'Una pagina mas'},
  {id: 20, name: 'La primavera'},
];

/**
 * Data source for the IndiceTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class IndiceTableDataSource extends DataSource<IndiceTableItem> {
  data: IndiceTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<IndiceTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: IndiceTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: IndiceTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
