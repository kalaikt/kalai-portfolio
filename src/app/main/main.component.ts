import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  public skills = {};

  constructor(private http: Http) {
    //this.getSkils().subscribe(skills => this.skills = skills);
  }

  ngOnInit() {
    this.http.get('./api/skills.json')
      .subscribe((res: Response)  => this.skills = res.json());
  }
}
