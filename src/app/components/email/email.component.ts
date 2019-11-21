import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {error} from 'selenium-webdriver';
import {MailingServiceService} from 'src/app/components/services/mailing-service.service';
import {EmailModel} from '../Modells/EmailModel';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  newMail: EmailModel;
  name: string;
  ifEmail = false;
  subject: string;
  email: string;
  message: string;

  constructor(private snackBar: MatSnackBar,
              private mail: MailingServiceService) {
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  validate() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) && this.message.length !== 0 && this.name.length !== 0 && this.subject.length !== 0 ) {
      this.ifEmail = true;
    } else {
      this.openSnackBar('Töltse ki a mezőket rendesen', 'close');
    }
    if (this.ifEmail) {
      this.newMail = new EmailModel(this.name, this.email, this.message, this.subject);
      this.mail.create(this.newMail).subscribe(() => {
        console.log(this.newMail);
        this.message = '';
        this.name = '';
        this.email = '';
        this.subject = '';
        this.openSnackBar('Email elküldve', 'close');
      }, error => {
      });
    }

  }

  ngOnInit() {
  }

}
