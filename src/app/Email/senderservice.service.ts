import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenderserviceService {


  constructor( private http: HttpClient) { }

  url = 'http://localhost:8000/api/sendmail';

  send(mail:any ){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let httpOption = {
      headers: headers
    };
    return this.http.post<any>(this.url, mail, httpOption);
  }
}

