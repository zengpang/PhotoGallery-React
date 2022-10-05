import { observable,action, makeObservable } from "mobx";
import {Auth} from '../models'
class UserStore{
   currentUser=null;
   constructor(){
     makeObservable(this,{
        currentUser:observable
     })
   }
   pullUser(){
    this.currentUser=Auth.getCurrentUser();
   }
   resetUser(){
    this.currentUser=null;
   }
}
export default new UserStore();