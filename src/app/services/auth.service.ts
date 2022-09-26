import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth : boolean = true;

  constructor() { }

  login(){
    this.auth=true;
    localStorage.setItem('auth', this.auth.toString());
  }

  logout(){
    this.auth=false;
    localStorage.clear();
  }

  showSession(){
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');
    return this.auth;
  }
}
