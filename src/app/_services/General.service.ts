import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({ providedIn: 'root' })
export class GeneralService {
    constructor(private httpClient: HttpClient) { }

    GetInformacion()
    {
        return this.httpClient.get(`${environment.apiUrl}/api/principal`);
    }
}