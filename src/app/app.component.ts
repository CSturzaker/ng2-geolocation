import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GeolocationService } from './geolocation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // positions$: Observable<Array<any>>;
  positions: Array<any> = [];

  constructor(private geolocationService: GeolocationService) {
    geolocationService.getLocation().forEach(position => {
      // this.positions$ = position;
      this.positions.push(position);
      console.log(position);
    });
  }
}

