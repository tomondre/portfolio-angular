import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Education from "../../models/Education";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class EducationsService {

  private educations: Observable<Education[]> | undefined;

  constructor(private http: HttpClient) {
  }

  getEducations(): Observable<Education[]> {
    let apiUrl = environment.apiUrl;
    if (!this.educations) {
      this.educations = this.http.get<Education[]>(apiUrl + '/educations');
    }
    return this.educations
  }
}
