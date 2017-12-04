import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

    colCountByScreen: Object;
    measureType: string[];
    projectType: string[];

    constructor(private projectsService: ProjectsService) {
        this.measureType = this.projectsService.getMeasureType();
        this.projectType = this.projectsService.getProjectType();
        this.colCountByScreen = {
        md: 2,
        sm: 2
        };
    }

   screen(width) {
    return width < 720 ? "sm" : "md";
}
valueChanged(e) {
    if (e.value) {
        this.colCountByScreen = {
            md: 2,
            sm: 2
        }
    } else {
        this.colCountByScreen = null;
    }
}

  ngOnInit() {
  }
}
