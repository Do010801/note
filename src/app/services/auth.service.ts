import { Injectable } from '@angular/core';
import {Auth, GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth"
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }
  login() {
    return from( new Promise<string>(async (resolve,rejects)=>{
      try{
        let credential = await signInWithPopup(this.auth,new GoogleAuthProvider());
        let idToken = await credential.user.getIdToken();
        resolve(idToken) ;
      }
      catch{
        rejects("cannot login with Google");
      }
      
    }))
  }

  logout() {
    this.auth.signOut();
  }
}
