import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Project} from '../Modells/Projects';
import {ProjectServiceService} from '../services/project-service.service';

@Component({
  selector: 'app-previewvideomodal',
  templateUrl: './previewvideomodal.component.html',
  styleUrls: ['./previewvideomodal.component.scss']
})
export class PreviewvideomodalComponent implements OnInit {
  project: Project;
  constructor(projectService: ProjectServiceService) {
    this.project = projectService.project;
  }

  ngOnInit() {
  }

}
