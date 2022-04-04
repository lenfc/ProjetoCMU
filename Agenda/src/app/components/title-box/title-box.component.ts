import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(datain: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: datain === null ?
      {nome:'', sobrenome: '', empresa: '', cargo: ''}:
       datain    
      });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined) {
        
      }
    });
  }
  
}
