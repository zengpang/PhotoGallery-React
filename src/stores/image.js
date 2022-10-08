import { observable,action, makeObservable } from "mobx";
import { Uploader } from "../models";

class ImageStore{
    filename="";
    file=null;
    isUpoading=false;
    serverFile=null;
    constructor()
    {
        makeObservable(this,{
            filename:observable,
            file:observable,
            isUpoading:observable,
            serverFile:observable,
            upload:action
        })
    }
    setFilename(newFilename)
    {
       console.log("设置文件名");
       this.filename=newFilename;
    }
    setFile(newFile)
    {
     console.log("设置文件");
       this.file=newFile;
    }
    upload(){
       console.log("执行上传");
       this.isUpoading=true;
       return new Promise((resolve,reject)=>{
         Uploader.add(this.file,this.filename)
         .then(serverFile=>{
            this.serverFile=serverFile;
            resolve(serverFile);
         }).catch(err=>{
           console.log('上传失败');
           reject(err);
         }).finally(()=>{
            this.isUpoading=false;
         });
       })
    }
}
export default new ImageStore();