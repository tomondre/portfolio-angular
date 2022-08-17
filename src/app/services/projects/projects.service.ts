import {Injectable} from '@angular/core';
import Project from "../../models/Project";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Observable, share} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Observable<Project[]> | undefined;

  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    let apiUrl = environment.apiUrl;
    if (!this.projects) {
      this.projects = this.http.get<Project[]>(apiUrl + '/projects').pipe(share());
    }
    return this.projects;
  }
}
