import { Injectable } from '@angular/core';
import {Project} from '../Modells/Projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  project: Project = null;
  constructor() { }
}
