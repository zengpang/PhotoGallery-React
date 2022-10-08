import React from 'react';
import {observer} from 'mobx-react';
import {useStores} from '../stores';
import Tips from '../components/Tips';
import Uploader from '../components/Uploader';
const Home=observer(()=>{
  const {UserStore}=useStores();
  const User=()=><div>Hello {UserStore.currentUser.attribures.username}</div>
  return(
    <>
       <Tips>请先登录再上传!!!</Tips>
       <Uploader/>
    </>
  );
});

export default Home;