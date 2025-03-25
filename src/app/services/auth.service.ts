import { Injectable } from '@angular/core';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut} from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
  private auth = getAuth();

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

  logOut() {
    return signOut(this.auth);
  }

}
