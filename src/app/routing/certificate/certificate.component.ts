import {Component, OnInit} from '@angular/core';
import {CertificatesService} from "../../services/certificates/certificates.service";
import Certificate from "../../models/Certificate";

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  private certificateService: CertificatesService
  certificates: Certificate[] | undefined;

  constructor(certificateService: CertificatesService) {
    this.certificateService = certificateService;
  }

  ngOnInit(): void {
    this.certificateService.getCertificates().subscribe((certs) => {
      this.certificates = certs;
    });
  }

}
