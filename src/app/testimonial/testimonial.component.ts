import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../router.animations';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
