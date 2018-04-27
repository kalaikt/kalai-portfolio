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
  frontEndTile = 'Front-End';
  backEndTile = 'Back-End';
  serverSideTitle = 'Server Side/CMS';
  toolsTile = 'Tools';

  constructor(private dataService: DataService, private http: Http) {

  }

  ngOnInit() {
    this.dataService.getSkills()
      .subscribe((res: Response)  => {
        this.skills = res.json();
      });
  }
}
