import { observable,action, makeObservable } from "mobx";
import { Auth } from "../models";
import UserStore from './user';
class AuthStore{
    isLogin=false;
    isLoading=false;
    values={
        username:'jirengu',
        password:''
    };
    constructor(){
        makeObservable(this,{
            isLogin:observable,
            values:observable,
        
        });
    }

    setUsername(username)
    {
        this.values.username=username;
    }
    setPassword(password)
    {
       this.values.password=password;
    }
    login(){
       return new Promise((resolve,reject)=>{
         Auth.login(this.values.username,this.values.password)
         .then(user=>{
            UserStore.pullUser();
            resolve(user);
         }).catch(err=>{
            UserStore.resetUser();
            reject(err);
         })
       });
    }
    register()
    {
      return new Promise((resolve,reject)=>{
        Auth.register(this.values.username,this.values.password)
        .then(user=>{
            UserStore.pullUser();
            resolve(user);
        }).catch(err=>{
            UserStore.resetUser();
            reject(err);
        })
      });
    }
    logout(){
        Auth.logout();
        UserStore.resetUser();
    }
}
export default new AuthStore();