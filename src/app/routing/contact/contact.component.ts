import { Component, OnInit } from '@angular/core';
import Location from "../../models/Location";
import {ProjectsService} from "../../services/projects/projects.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private location: Location | undefined;

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
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
