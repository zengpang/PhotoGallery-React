import React from 'react';
import {observer} from 'mobx-react';
import {useStores} from '../stores';
const Home=observer(()=>{
  const {UserStore}=useStores();
  const User=()=><div>Hello {UserStore.currentUser.attribures.username}</div>
  return(
    <>
     {
      UserStore.currentUser?<>
        Hello {UserStore.currentUser.attribures.username}
      </>:<>
       用户未登录
      </>
     }
    </>
  );
});
// function Home(){
//     return(
//         <>
//           <h1>Home</h1>
//         </>
//     );
// }
export default Home;