import React,{useRef} from 'react';
import { observer } from 'mobx-react';
import { Form, Input,Button,Checkbox} from 'antd';
import styled from 'styled-components';
import {useStores} from '../stores';
import {userHistory} from 'react-router-dom';

const Wraper=styled.div`
   max-width:600px;
   margin:30px auto;
   box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
   border-radius:4px;
   padding:20px; 
`;
const Title=styled.h1`
  text-align:center;
  margin-bottom:30px;
`;

const layout={
    labelCol:{
      span:6,
    },
    wrapperCol:{
      span:18,
    },
};
const tailLayout={
    wrapperCol:{
        offset:6,
        span:18,
    },
};

const Component=observer(()=>{
    const {AuthStore}=useStores();
    const history=userHistory();
    const onFinish=values=>{
       console.log('Success:',values);
       AuthStore.setUsername(values.username);
       AuthStore.setPassword(values.password);
       AuthStore.register()
       .then(()=>{
         console.log('注册成功,跳转到首页');
         history.push('/');
       }).catch(()=>{
        console.log('登录失败,什么都不做');
       });
    };
    const onFinishFailed=errorInfo=>{
       console.log('Failed:',errorInfo);
    };
    const validateUsername=(rule,value)=>{
       if(/\w/.test(value)) return Promise.reject('只能是字母数字下划线');
       if(value.length<4||value.length>10) return Promise.reject('长度为4~10个字符');
       return Promise.resolve();  
    };
    const validateConfirm=({getFieldValue})=>({
        validator(rule,value){
            if(getFieldValue('password')===value) return Promise.resolve();
            return Promise.reject('两次密码不一致');
        }
    });
    return (
        <Wraper>
        <Title>注册</Title>
        
        <h1>Register:{AuthStore.values.username}</h1>
        </Wraper>
    );
})
export default Component;