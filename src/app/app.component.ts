import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { FestivalService } from './shared/festival.service';

/** Requirements
 *
 * 1 Fetch the data from the API endpoint
 * 2 render the data
 * 3 Top Brand
 * 4 All Brand Management
 * 5 Display all festival attended if any
 * 6 Sort the render by alphabetical order
 */

/** STEPS
 *  1 Fetch the data from the endpoint => use Angular service
 * 2 Import HttpClientModule
 * 3 Configure the services with Http Service
 * 2 render the list on the Frontend
 * 3 Sort the data in alphabetical order
 * @returns
 */

// Optionally created a server due to Cors fron original server
// http://localhost:3000/festivals
// in place of https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals
// To run the server, type json-server --watch db.json

/** Challanges faced
 * Spent more time configuring proxy server in proxy.conf.json
 * Proxy server  fails to return data from server
 * Create a mock data and fetch data from original api swagger
 * Used Materialise css for styling
 *
 */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'festival-data';
  error = '';
  festival$: Observable<any> | undefined;


  constructor(private festivalService: FestivalService) {}

  ngOnInit(): void {
    this.festival$ = this.festivalService.getFestivals().pipe(
      catchError((err) => {
        this.error = `Cant get products ${err.status}`;
        return EMPTY;
      })
    );
  }
}
