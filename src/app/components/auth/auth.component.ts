import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { noop } from 'rxjs';
import { CustomValidators } from 'src/app/util/custom-validatos';
import { AuthService } from "../../services/auth.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public isSignUp: boolean;
  public auth: FormGroup;
  
  constructor(
     public authService: AuthService,
     private sgep:       FormBuilder,
     public router:      Router,
  ) { }

  ngOnInit() {
    this.validaLogin()
  }

   validaLogin(){
    this.auth = this.sgep.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    },
    );
   }
   
  doSignIn() {
     if (this.auth.valid) {
       let loginData = this.auth.value;
        this.authService.login(loginData).pipe(
          map(response =>{
            console.log(response)
            localStorage.setItem("user", JSON.stringify(response));
           
          })
        ).subscribe(noop, err => console.log(err))
       }
     }
  
 }
