import AV,{Query,User} from 'leancloud-storage';
AV.init({
    appId: "tmQb7jlJhSjhfdUqbXq77PUD-gzGzoHsz",
    appKey: "s92ueTtV79VLX7Lk3GQQ6FvE",
    serverURL: "https://please-replace-with-your-customized.domain.com"
});
const Auth={
    register(username,password)
    {
       let user=new User();
       user.setUsername(username);
       user.setPassword(password);
       return new Promise((resolve,reject)=>{
         user.signUp().then(loginedUser=>resolve(loginedUser),error=>reject(error));
       });

    },
    login(username,password)
    {
        console.log('---------');
        console.log(username,password);
        return new Promise((resolve,reject)=>{
          User.logIn(username,password).then(loginedUser=>resolve(loginedUser),error=>reject(error));
        });
    },
    logout(){
        User.logOut();
    },
    getCurrentUser(){
       return User.current();
    }
}
export{
  Auth
};