import React,{useRef} from 'react';
import { observer } from 'mobx-react';
import { Form, Input,Button,Checkbox} from 'antd';
import styled from 'styled-components';
import {useStores} from '../stores';
import {userHistory} from 'react-router-dom';
const Component=observer(()=>{
    const {AuthStore} =useStores();
    const inputRef=useRef();
    const bindChange=e=>{
        console.log(inputRef.current.value);
        AuthStore.setUsername(inputRef.current.value);

    }
    return(
        <>
          <h1>Login:{AuthStore.values.username}</h1>
          <input onChange={bindChange} ref={inputRef}></input>
        </>
    )
})
export default Component;