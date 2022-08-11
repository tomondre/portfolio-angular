import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import WorkExperience from "../../models/WorkExperience";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesService {

  private workExperiences: Observable<WorkExperience[]> | undefined;

  constructor(private http: HttpClient) {
  }

  getWorkExperiences(): Observable<WorkExperience[]> {
    let apiUrl = environment.apiUrl;
    if (!this.workExperiences) {
      this.workExperiences = this.http.get<WorkExperience[]>(apiUrl + '/workExperiences');
    }
    return this.workExperiences
  }
}
