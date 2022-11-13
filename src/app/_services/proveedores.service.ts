import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({ providedIn: 'root' })
export class ProveedoresService {
    constructor(private httpClient: HttpClient) { }

    GetLista()
    {
        return this.httpClient.get(`${environment.apiUrl}/api/proveedor`);
    }
    PostProveedor(model: any)
    {
        return this.httpClient.post<any>(`${environment.apiUrl}/api/proveedor`, model);
    }
    BorrarProveedor(xid: any)
    {
        return this.httpClient.delete(`${environment.apiUrl}/api/proveedor/`+xid);
    }
}