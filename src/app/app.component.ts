import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kalaikumar Thangasamy';
  ngOnInit() {
    //$('#content-container').css('min-height', $( document ).height()-195);
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
}
