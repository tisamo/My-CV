import {Component, OnInit} from '@angular/core';
import {Schools} from '../Modells/schools';


declare var require: any;


@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {
  show = false;
  pdf = '../../../assets/cv.pdf';
  cv = false;
  schools: Schools[] = [];
  name: string;
  email: string;
  message: string;

  constructor() {
  }

  ngOnInit() {
    this.schools = [{name: 'Széchenyi István Gimn.', fact: 'English/Info', year: '2010-2015'},
      {name: 'PTE-MIK.', fact: 'Media', year: '2015-2017'},
      {name: 'Pécsi SZC Simonyi Károly', fact: 'Software developer', year: '2017-2019'}
    ];
  }

  showMe() {
    this.show = !this.show;
  }

  showCv() {
    this.cv = !this.cv;
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo);
  }

  sendMail() {

  }
}
