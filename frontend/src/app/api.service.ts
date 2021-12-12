import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(
    public http: HttpClient
    ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type','application/json');
    this.headers.append('Access-Control-Allow-Origin','*');
    

   }

  addStudent(data){
    return this.http.post('http://localhost/htdocs/ionic-crud/backend/create.php',data);
  }
}
 
  