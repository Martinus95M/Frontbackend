import { Injectable } from '@angular/core';
import { User } from '../users/user';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  
  usersRef: AngularFireList<any>;
  userRef: AngularFireObject<any>;
  
  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create user
  AddUser(user: User) {
    this.usersRef.push({
      userName: user.userName
    })
  }

  // Fetch Single Student Object
  GetUser(id: string) {
    this.userRef = this.db.object('user-list/' + id);
    return this.userRef;
  }

  // Fetch user List
  GetUserList() {
    this.usersRef = this.db.list('user-list');
    return this.userRef;
  }  

  // Update user Object
  UpdateUser(user: User) {
    this.userRef.update({
      userName: user.userName
    })
  }  

  // Delete user Object
  DeleteUser(id: string) { 
    this.userRef = this.db.object('user-list/'+id);
    this.userRef.remove();
  }
}