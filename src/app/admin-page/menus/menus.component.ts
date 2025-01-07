import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MenusService , Menu} from '../../service/menus/menus.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';



@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent implements OnInit, AfterViewInit{

  @ViewChild(MatSort,{ static: false }) sort!: MatSort;
  @ViewChild(MatPaginator,{ static: false }) paginator!: MatPaginator;

  
  menuDetails: Menu = {
    title: "",
    url: ""
  }

  dataSource = new MatTableDataSource();

  displayedColumns = ["id", "title", "url", "actions"];

  constructor(private menus:MenusService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.menus.getMenus().subscribe((data: any) => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  addMenu() {
    this.menus.addMenu(this.menuDetails);
  }

  applyFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    const filterValue = (input?.value || '').trim().toLocaleLowerCase();
    this.dataSource.filter = filterValue;
}

editMenu(menuId: any, menu: Menu) {
  this.menus.updateMenu(menuId, menu) 
}
deleteMenu(menuId: any) {
  this.menus.deleteMenu(menuId);
}

openDialog(menuId: any): void {
  const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    width: '300px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed'+menuId);
    if (result === true) {
      
      this.deleteMenu(menuId)
    }
  });
}

  openEditDialog(menuId: string, title: string, url: string): void {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      width: '300px',
      data: {title, url}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      
      if (result) {
        console.log('The edit dialog was closed');
        this.editMenu(menuId, result)
      }
    
  });  
}

} 


