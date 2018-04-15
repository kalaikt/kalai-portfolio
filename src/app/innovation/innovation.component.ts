import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-innovation',
  templateUrl: './innovation.component.html',
  styleUrls: ['./innovation.component.css']
})
export class InnovationComponent implements OnInit {
  public innovations = [];
  constructor(private dataService: DataService, private http: Http) {}

  ngOnInit() {
    this.dataService.getInnovations()
    .subscribe((res: Response)  => {
      this.innovations = res.json();
    });
  }

}
