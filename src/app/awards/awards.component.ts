import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from '../data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  public awards = [];
  constructor(private dataService: DataService, private http: Http) {}

  ngOnInit() {
    this.dataService.getAwards()
    .subscribe((res: Response)  => {
      this.awards = res.json();
    });
    $('.carousel').carousel();
  }

}
