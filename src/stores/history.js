import { observable, makeObservable } from "mobx";
import { Uploader } from "../models";
import { message } from "antd";
class HistoryStore{
    list=[];
    isLoading=false;
    hasMore=true;
    page=0;
    limit=10;
    constructor(){
        makeObservable(this,{
            list:observable,
            isLoading:observable,
            hasMore:observable,
            page:observable,
            limit:observable
        });
    }
    append(newList)
    {
        console.log("拼接中");
        this.list=this.list.concat(newList);
        console.log(this.list);
        
    }
    find(){
        console.log('加载中');
        this.isLoading=true;
        Uploader.find({page:this.page,limit:this.limit})
        .then(newList=>{
            this.append(newList);
            this.page++;
            if(newList.length<this.limit)
            {
                this.hasMore=false;
            }
        }).catch(error=>{
          message.error('加载数据失败');
        }).finally(()=>{
          this.isLoading=false;
        })
    }
    reset(){
        this.list=[];
        this.isLoading=false;
        this.hasMore=true;
        this.page=0;
    }
}
export default new HistoryStore();