import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from '../data.service';
import * as $ from 'jquery';
import { fadeInAnimation } from '../router.animations';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AwardsComponent implements OnInit {
  public awards = [];
  constructor(private dataService: DataService, private http: Http) {}

  ngOnInit() {
    this.dataService.getAwards()
    .subscribe((res: Response)  => {
      this.awards = res.json();
    });
  }

}
