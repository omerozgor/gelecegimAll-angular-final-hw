import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent { // Bütün listeler için ortak tablo. Input ile gerekli nitelikleri alıyor
  @Input() headers!: string[]; // tablo sütun başlıkları
  @Input() data!: any[]; // tablo verisi
  @Input() tableFields!: string[];
  @Input() caption?: string; // tablo başlığı
  @Input() actions?: Map<string,boolean> // aksiyon butonları
  @ViewChild('paginator') paginator?: MatPaginator;
  

  pageIndex = 0;

  displayedColumns?: string[];
  dataSource!: MatTableDataSource<any>;


  @Output() newDeleteEvent = new EventEmitter<any>();
  @Output() newUpdateEvent = new EventEmitter<any>();
  @Output() newShowDetailsEvent = new EventEmitter<any>();
  @Output() paramsChangeEvent = new EventEmitter<MatTableDataSource<any,MatTableDataSourcePaginator>>();

  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    
    this.dataSource = new MatTableDataSource(this.data);
    if (this.actions) {
      this.displayedColumns = this.headers.concat(['actions']);
    }else{
      this.displayedColumns = this.headers;
    }
    this.route.queryParams.subscribe(params => {
    
      this.paramsChangeEvent.emit(this.dataSource);  
      // queryParams her değiştiğinde tabloyu güncellemek için
    });   
    
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator!;

    const pageIndex = this.route.snapshot.queryParams['page'] - 1;
        
        if(pageIndex){
          this.pageIndex = pageIndex
          this.paginator!.pageIndex = pageIndex
          this.dataSource.data = this.data;
        }
  }

  deleteItem(item: any) {

    this.newDeleteEvent.emit(item);
    this.dataSource.data = this.data;

  }

  updateItem(item: any) {
    this.newUpdateEvent.emit(item);
  }

  showItemDetails(item: any) {
    this.newShowDetailsEvent.emit(item)
    
  }

  handlePage(event :PageEvent){ // sayfa değiştirme event'i için yapılacak işlemler
    
    this.pageIndex = this.paginator?.pageIndex!;
    
    const queryParams: Params = {  page: this.pageIndex + 1 };
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: queryParams,
        queryParamsHandling : 'merge'
      });
  }

}
