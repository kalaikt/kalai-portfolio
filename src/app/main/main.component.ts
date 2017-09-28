import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  skills = {};

  frontEndTile = 'Front-end';
  backEndTile = 'Back-end';
  serverSideTitle = 'Server Side';
  toolsTile = 'Tools';

  constructor(private dataService: DataService, private http: Http) {

  }

  ngOnInit() {
    this.dataService.getSkils()
      .subscribe((res: Response)  => {
        this.skills = res.json();
      });
  }
}
