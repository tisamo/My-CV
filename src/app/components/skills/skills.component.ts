import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {PreviewvideomodalComponent} from '../previewvideomodal/previewvideomodal.component';
import {Project} from '../Modells/Projects';
import {ProjectServiceService} from '../services/project-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 0,
      name: 'snake',
      image: 'https://i.ytimg.com/vi/sDXXYK8_avg/maxresdefault.jpg',
      description: 'test',
      video: 'https://www.youtube.com/watch?v=4Qm_ejqIjpM'
    },
    {
      id: 1,
      name: 'snake',
      image: 'https://i.ytimg.com/vi/sDXXYK8_avg/maxresdefault.jpg',
      description: 'test',
      video: 'https://www.youtube.com/watch?v=4Qm_ejqIjpM'
    },
  ];

  constructor(public dialog: MatDialog,
  private projectService: ProjectServiceService) {
  }

  openDialog(index: number) {
    const project = this.projects[index];
    this.projectService.project = project;
    const dialogRef = this.dialog.open(PreviewvideomodalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog was closed');
    });
  }

  ngOnInit() {
    this.initProjects();
  }

  initProjects() {
  }
}

