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
  public logo_slogan = 'Software Engineer Senior Advisor | Sr. Full Stack Engineer';

  public showRole;
  public roles = 'Software Engineer Senior Advisor | Sr. Full Stack Engineer';

  constructor(private router: Router) {
    this.setShowRole(this.router.url);
    this.router.events.subscribe((event: any) => {
      if (event.url !== undefined) {
        this.setShowRole(event.url);
      }
    });
  }

  private setShowRole(url: string) {
    this.showRole = url === '/' || url === '';
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
