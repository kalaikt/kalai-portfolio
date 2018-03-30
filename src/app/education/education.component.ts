import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../router.animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
