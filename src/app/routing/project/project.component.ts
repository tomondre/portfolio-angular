import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProjectsService} from "../../services/projects/projects.service";
import Project from "../../models/Project";
import ProjectLink from "../../models/ProjectLink";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];
  project: Project | undefined;
  routeSub: any;

  constructor(private projectService: ProjectsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.routeSub = this.route.params.subscribe(params => {

        this.projects.forEach(project => {
          if (project.name === params['name']) {
            this.project = project;
          }
        });
      });
    });
  }

  getProjectTechnologies(): string {
    let technologies = "";
    if (this.project) {
      for (let i = 0; i < this.project.technologies.length; i++) {
        technologies += this.project.technologies[i].technology;

        if (this.project.technologies.length - 1 !== i) {
          technologies += ", ";
        }
      }
    }

    return technologies;
  }

  getProject(): Project | undefined {
    return this.project;
  }

  getProjectPictures(): string[] | undefined {
    let links: string[] = [];
    this.project?.links.forEach(link => {
      if (link.type === "Image") {
        links.push(link.url);
      }
    });
    return links
  }

  getProjectLinks(): ProjectLink[] {
    let links: ProjectLink[] = [];
    this.project?.links.forEach(link => {
      if (link.type !== "Image") {
        links.push(link);
      }
    });
    return links;
  }
}
