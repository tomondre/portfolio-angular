import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Education from "../../models/Education";
import {environment} from "../../../environments/environment.prod";
import Certificate from "../../models/Certificate";

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  private certificates: Observable<Certificate[]> | undefined;

  constructor(private http: HttpClient) {
  }

  getCertificates(): Observable<Certificate[]> {
    let apiUrl = environment.apiUrl;
    if (!this.certificates) {
      this.certificates = this.http.get<Certificate[]>(apiUrl + '/certificates');
    }
    return this.certificates;
  }
}
