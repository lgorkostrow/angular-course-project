import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ValidationMessagesService {
  private _defaultMessages = {
    required: 'This value is required',
    email: 'This value should be a valid email',
    firstLetterUpperCase: 'This value should start with the upper case',
  };

  get defaultMessages(): {[key: string]: string} { return this._defaultMessages; };
}
