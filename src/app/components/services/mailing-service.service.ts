import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {Observable} from 'rxjs/index';
import {EmailModel} from '../Modells/EmailModel';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MailingServiceService {

  constructor(private http: HttpClient) {
  }

  create(email: EmailModel)  {
   return this.http.post(this.getBaseUrl(), email);
  }

  private getBaseUrl(): string {
    return environment.apiUrl + 'sendmail';
  }
}
