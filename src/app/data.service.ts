import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Skills } from './skills';

@Injectable()
export class DataService{

  skills = {};

  constructor(private http: Http) {

  }

  getSkills(){
    return this.http.get('./api/skills.json');
  }

  getProjects(){
    return this.http.get('./api/projects.json');
  }
  getInnovations(){
    return this.http.get('./api/innovations.json');
  }

  getAwards(){
    return this.http.get('./api/awards.json');
  }
}
