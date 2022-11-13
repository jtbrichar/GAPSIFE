import { Component,  OnInit, Inject } from '@angular/core';
import { ProveedoresService } from '../../_services/proveedores.service';

import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  nombre: string;
  razonSocial: string;
  rfc: string;
  direccion: string;
  costo: string;
}

@Component({
  selector: 'app-Lista',
  templateUrl: './Lista.component.html',
  styleUrls: ['./Lista.component.css']
})



export class ListaComponent implements OnInit
{
  
  


  displayedColumns = ['id', 'nombre','razonSocial','rfc','direccion','costo','acciones'];
  
  public dataSource: any;
  public data: any;

  constructor(
    private proveedoresService: ProveedoresService,
    public dialog: MatDialog
    ) { }

    ngOnInit() 
    {
      this.Lista();
    }
  
    Lista()
    {
      this.proveedoresService.GetLista().subscribe(data => {
        this.data=data
        this.dataSource = new MatTableDataSource(this.data);
      },
      error => {
        console.log('Log en error : ', error);
    });
    }

    abrirformulario(): void {
      const dialogRef = this.dialog.open(ModalFormulario, {
        width: '400px',
        data: {},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.proveedoresService.PostProveedor(result).subscribe(data =>{
          this.Lista();
        });
        
        
        
      });
    }

    eliminar(xid:any)
    {
      this.proveedoresService.BorrarProveedor(xid).subscribe(data =>{
        this.Lista();
      });
    }

}



@Component({
  selector: 'Modal',
  templateUrl: 'Modal.html',
  styleUrls: ['./Modal.component.css']
})
export class ModalFormulario {
  constructor(
    public dialogRef: MatDialogRef<ModalFormulario>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  Cerrar(): void {
    this.dialogRef.close();
  }
}