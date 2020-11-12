import { Injectable } from "@angular/core";

@Injectable()
export class Config {
  
  public baseUrl = "https://sgep-ws.herokuapp.com/";

  //LOCAL
  // public baseUrl = "http://127.0.0.1:3333/";
  public version: string = "1.1.1";
}