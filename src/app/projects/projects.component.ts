import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from '../data.service';
import * as $ from 'jquery';
import { DatePipe } from '@angular/common';
import { fadeInAnimation } from '../router.animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ProjectsComponent implements OnInit {
  public projects = [];

  constructor(private dataService: DataService, private http: Http) {}

  ngOnInit() {
    this.dataService.getProjects()
    .subscribe((res: Response)  => {
      this.projects = res.json();
    });
    setTimeout(
      function(){
        $('.project-item').mouseover(function(){
          let height = $(this).height() - $(this).find('.project-info').height();

          if($(this).data('launchbtn'))
            $(this).find('.responsibilities').height(height - 110);
          else
            $(this).find('.responsibilities').height(height - 60);
        });
      }, 500);
  }

}
