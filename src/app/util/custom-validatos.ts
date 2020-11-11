import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidators {
  constructor() { }

  public MatchPassword(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPass.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  public ValidateUrl(control: AbstractControl) {
    if (!control.value.startsWith("https") || !control.value.includes(".io")) {
      return { validUrl: true };
    }
    return null;
  }

  public CPFValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      let strCPF = ((control.value).replace(/\./g, '')).replace(/-/g, "");
      let sum;
      let sub;
      sum = 0;
      if (strCPF == "00000000000") {
        return { 'cpfValid': false };
      }

      for (let i = 1; i <= 9; i++) sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      sub = (sum * 10) % 11;

      if ((sub == 10) || (sub == 11)) sub = 0;
      if (sub != parseInt(strCPF.substring(9, 10))) {
        return { 'cpfValid': false };
      }

      sum = 0;
      for (let i = 1; i <= 10; i++) sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      sub = (sum * 10) % 11;

      if ((sub == 10) || (sub == 11)) sub = 0;
      if (sub != parseInt(strCPF.substring(10, 11))) {
        return { 'cpfValid': false };
      }

      return null;
    }
  }

  public BornDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      let dates = (control.value).split('/');
      let day = Number(dates[0]);
      let month = Number(dates[1]);
      let year = Number(dates[2]);

      if (day < 1 || day > 31) {
        return { 'borndateValid': false };
      }

      if (month < 1 || month > 12) {
        return { 'borndateValid': false };
      }

      if (year < 1900 || year > 2018) {
        return { 'borndateValid': false };
      }

      return null;
    }
  }

}
