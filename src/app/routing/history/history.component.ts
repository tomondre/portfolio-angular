import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {EducationsService} from "../../services/educations/educations.service";
import Education from "../../models/Education";
import WorkExperience from "../../models/WorkExperience";
import {WorkExperiencesService} from "../../services/work-experience/work-experiences.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HistoryComponent implements OnInit {

  educations: Education[] = [];
  workExperiences: WorkExperience[] = [];

  constructor(private educationService: EducationsService, private workExperienceService: WorkExperiencesService) { }

  ngOnInit(): void {
    this.educationService.getEducations().subscribe(educations => {
      this.educations = educations;
    });

    this.workExperienceService.getWorkExperiences().subscribe(workExperiences => {
      this.workExperiences = workExperiences;
    });
  }

  getActivities(education: Education): string {
    let activities = "";
    for (let i = 0; i < education.activities.length; i++) {
      activities += "•" + education.activities[i].activity;
        activities += "\n";
    }
    return activities;
  }

  getResponsibilities(experience: WorkExperience): string {
    let responsibilities = "";
    for (let i = 0; i < experience.responsibilities.length; i++) {
      responsibilities += "•" + experience.responsibilities[i].responsibility;
      responsibilities += "\n";
    }
    return responsibilities;
  }

}
