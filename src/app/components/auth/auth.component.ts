import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/util/custom-validatos';
// import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public isSignUp: boolean;
  public auth: FormGroup;
 
  constructor(
    // public authService: AuthService,
    private sgep: FormBuilder,
   // public customValidator: CustomValidators,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  // validaLogin(){
  //   this.auth = this.sgep.group({
  //     login: [
  //       "",
  //       Validators.compose([Validators.maxLength(120), Validators.required])
  //     ],
  //     passwords: this.sgep.group(
  //       {
  //         password: ["", Validators.required],
  //       },
  //       { validator: this.customValidator.MatchPassword }
  //     )
  //   });
  // }

  doSignIn() {
    console.log("to aq")
  //   if (this.validaLogin.valid) {

  //     this.loading = true;

  //     this.validaLogin.value.login = this.validaLogin.value.login.trim().toLowerCase();

  //     this.doLogin(this.validaLogin.value);

  //   } else {
  //     this.errorUtility.showError(null, "Verifique os erros nos campos!");
  //   }
  // }
  }
}