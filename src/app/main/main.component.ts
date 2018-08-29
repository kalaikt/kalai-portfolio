import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from '../data.service';
import { fadeInAnimation } from '../router.animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class MainComponent implements OnInit {

  skills = {};
  public welcome = 'Welcome to Kalai\'s Profile';
  frontEndTile = 'User Interface';
  backEndTile = 'DB/DB Tools';
  serverSideTitle = 'Server Side/CMS';
  toolsTile = 'IDE/Tools';
  years = new Date().getFullYear() - 2004;
  constructor(private dataService: DataService, private http: Http) {

  }

  ngOnInit() {
    this.dataService.getSkills()
      .subscribe((res: Response)  => {
        this.skills = res.json();
        this.skills["welcomeMsg"] = this.skills["welcomeMsg"].replace("YEARS", this.years);
      });
  }
}
