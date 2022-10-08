import { observable, makeObservable } from "mobx";
import { Uploader } from "../models";
import { message } from "antd";
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
         
        })
    }
    setFilename(newFilename)
    {
       this.filename=newFilename;
    }
    setFile(newFile)
    {
       this.file=newFile;
    }
    upload(){
       console.log("执行上传");
       this.isUpoading=true;
       this.serverFile=null;
       return new Promise((resolve,reject)=>{
         Uploader.add(this.file,this.filename)
         .then(serverFile=>{
            this.serverFile=serverFile;
            resolve(serverFile);
         }).catch(err=>{
           message.error('上传失败');
           reject(err);
         }).finally(()=>{
            this.isUpoading=false;
         });
       })
    }
    reset(){
        this.isUpoading=false;
        this.serverFile=null;
    }
}
export default new ImageStore();