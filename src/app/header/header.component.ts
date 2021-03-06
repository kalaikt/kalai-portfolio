import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menus = [
        { text: 'About me',   path: 'about-me' },
        { text: 'Education',   path: 'education' },
        { text: 'Projects',   path: 'projects' },
        { text: 'Awards',   path: 'awards' },
        { text: 'Learning',   path: 'innovation' },
        { text: 'Resume',   path: 'assets/Kalaikumar-Thangasamy_resume.docx', hardLink: true },
      //  { text: 'Testimonial',   path: 'testimonial' }
      ];
  public name = 'Kalaikumar';
  public logo_slogan = 'ABOUT ME AS A PROFESSIONAL';

  public showRole;
  public roles = 'Sr. UI/Front-end Engineer and UI Architect';

  constructor(private router: Router) {
    router.events.subscribe((url:any) => {
      //console.log(url.url);
      this.showRole = url.url == '/' || url.url =='/about-me' || url.url =='/contact-me';
    });
  }

  ngOnInit() {
    setTimeout(
      function(){
        $('#navbarResponsive li').click(function(){
          let width = $(document).width();
          console.log(width);
          if(width < 1024) $('.navbar-toggler').trigger('click');
        });
      }, 500);
  }
}
