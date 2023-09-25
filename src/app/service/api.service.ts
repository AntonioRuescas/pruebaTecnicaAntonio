import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi: string = "https://pixabay.com/api/?key=34573560-b4b29946062bf53b893e1ec40"
  constructor(private http: HttpClient) {}

  public getData(name:string): Observable<any> {
    const url = `${this.urlApi}&q=${name}`;
    return this.http.get(url);
  };
}
