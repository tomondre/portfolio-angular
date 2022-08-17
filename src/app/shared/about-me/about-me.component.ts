import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {ProjectsService} from "../../services/projects/projects.service";
import Location from "../../models/Location";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutMeComponent implements OnInit {

  location: Location | undefined;

  constructor(private projectService: ProjectsService, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/js/about-me.custom.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  getAge(): number {
    let number = new Date().getTime() - new Date('2000-11-01').getTime();
    return Math.floor(number / (1000 * 60 * 60 * 24 * 365));
  }

  getLatestLocation(): Location | undefined {
    if (!this.location) {
      this.projectService.getProjects().subscribe(projects => {
        this.location = projects.reduce((prev, curr) => {
          return prev.endDate > curr.endDate ? prev : curr;
        }).location;
      });
    }
    return this.location;
  }
}


