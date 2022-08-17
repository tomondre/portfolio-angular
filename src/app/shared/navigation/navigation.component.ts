import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {ProjectsService} from "../../services/projects/projects.service";
import Project from "../../models/Project";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectsService, private elementRef:ElementRef, private router: Router) { }

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/js/navigation.custom.js";
    this.elementRef.nativeElement.appendChild(s);

    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    })
  }

  redirectTo(uri:string){
    window.location.href=uri
  }
}
