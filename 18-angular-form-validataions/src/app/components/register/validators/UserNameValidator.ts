import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UserNameValidator {

  static noSpecialCharacters(control:AbstractControl):ValidationErrors | null{
    let regExp = /^[a-zA-Z0-9_]{5,10}$/;
    if(regExp.test(control.value)){
      return  null;
    }
    return {noSpecialCharacters : true}
  }
}
