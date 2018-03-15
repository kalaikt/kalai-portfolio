import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from '../data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
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
        $('.project-item').each(function(){
          var height = $(this).height() - $(this).find('.project-info').height();
          $(this).find('.responsibilities').height(height - 60);
        });
      },
      200
    );

  }

}
