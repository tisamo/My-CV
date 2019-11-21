/**
 * Created by tisamo on 2019. 11. 13..
 */
export class EmailModel {
  constructor(email: string, name: string, message: string, subject: string) {
    this.emailaddress = email;
    this.name = name;
    this.message = message;
    this.subject = subject;
  }

  emailaddress: string;
  name: string;
  message: string;
  subject: string;
}
