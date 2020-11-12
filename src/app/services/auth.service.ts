import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../app.config';
import { UserSignin } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public config: Config,
    public httpClient: HttpClient
    ) { }

  login(data: UserSignin){
    return this.httpClient.post<Response>(this.config.baseUrl + "funcionario/auth", data);
  }
}