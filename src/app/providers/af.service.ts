import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { User } from './user';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfService {
  user: Observable<User | null | undefined>;

  constructor(public afAuth: AngularFireAuth,
              public afs: AngularFirestore
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
   }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(provider).then((credential) => {
      this.updateUser(credential.user)
    })
  } 

  updateUser(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        subscriber: true,
        admin: false
      }
    }
    return userRef.set(data, {merge: true})
  }

  logout() {
    this.afAuth.signOut()
  }
}
