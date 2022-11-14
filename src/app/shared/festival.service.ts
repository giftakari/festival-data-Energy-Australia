import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FestivalService {
  constructor(private http: HttpClient) {}

  getFestivals() {
    return this.http.get('http://localhost:3000/festivals');
  }
}
