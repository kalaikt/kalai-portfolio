import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';
import { fadeInAnimation } from '../router.animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class MainComponent implements OnInit {

  skills = {};
  public pageHeading = '';
  frontEndTile = 'User Interface';
  backEndTile = 'DB/DB Tools';
  serverSideTitle = 'Server Side/CMS';
  toolsTile = 'IDE/Tools';
  aiToolsTile = 'AI & assisted development';
  uiArchitectureTile = 'UI architecture';
  years = new Date().getFullYear() - 2004;
  constructor(private dataService: DataService, private http: Http, private router: Router) {
    this.setPageHeading(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setPageHeading(event.urlAfterRedirects);
      }
    });
  }

  private setPageHeading(url: string) {
    this.pageHeading = url === '/about-me' ? 'About me' : '';
  }

  ngOnInit() {
    this.dataService.getSkills()
      .subscribe((res: Response)  => {
        this.skills = res.json();
        this.skills["welcomeMsg"] = this.skills["welcomeMsg"].replace("YEARS", this.years);
      });
  }
}
