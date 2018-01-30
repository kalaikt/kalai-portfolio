import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menus = ['About me', 'Projects', 'Testimonial', 'Contact me'];
  public name = 'Kalaikumar';
  public logo_slogan = 'ABOUT ME AS A PROFESSIONAL';

  constructor() {

  }

  ngOnInit() {

  }


}
