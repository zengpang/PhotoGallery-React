import { observable,action, makeObservable } from "mobx";

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
            username:observable,
            password:observable
        })
    }
    setIsLogin(isLogin)
    {
        this.isLogin=isLogin;
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
        console.log('登录中....');
        this.isLoading=true;
        setTimeout(()=>{
          console.log('登录成功');
          this.isLogin=true;
          this.isLoading=false;
        }, 1000);
    }
    register()
    {
        console.log('注册中...');
        this.isLoading=true;
        setTimeout(()=>{
          console.log('注册成功');
          this.isLogin=true;
          this.isLoading=false;
        },1000);
    }
    logout(){
        console.log('已注销');

    }
}
export {AuthStore};