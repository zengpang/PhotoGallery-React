import React, { useState, useEffect } from 'react';
import LogoUrl from './logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { useStores } from '../stores';
const Header = styled.header`
    display:flex;
    align-items:center;
    padding:10px 100px;
    background-color:#02101f;
    color:#fff;
`;
const Logo = styled.img`
  height:30px;
`;
const StyledLink = styled(NavLink)`
  color:#fff;
  margin-left:30px;
  &.active{
    border-bottom:1px solid #fff;
  }
`;
const Login = styled.div`
  margin-left:auto;
`;
const StyledButton = styled(Button)`
  margin-left:10px;
`;
const Component = observer(() => {
  const history = useNavigate();
  const { UserStore, AuthStore } = useStores();
  const handleLogout = () => {
    AuthStore.logout();
  };
  const handleLogin = () => {
    history('/login');
  };
  const handleRegister = () => {
    history('/register');
  }
  useEffect(() => {
    UserStore.pullUser();
  }, [])
  return (
    <Header>
      <Logo src={LogoUrl}/>
      <nav>
        <StyledLink to="/home" className={({ isActive }) => (isActive ? "active" : "")} >首页</StyledLink>
        <StyledLink to="/history" className={({ isActive }) => (isActive ? "active" : "")}>上传历史</StyledLink>
        <StyledLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>关于我</StyledLink>
      </nav>
      <Login>
        {
          UserStore.currentUser?<>
           {UserStore.currentUser.attributes.username}<StyledButton type='primary' onClick={handleLogout}>注销</StyledButton>
          </>:<>
          <StyledButton type='primary' onClick={handleLogin}>登录</StyledButton>
          <StyledButton type='primary' onClick={handleRegister}>注册</StyledButton>
          </>
        }
        
      </Login>
    </Header>
  );
});
// function Component() {
//   return (
//     <Header>
//       <Logo src={LogoUrl}></Logo>
//       <nav>
//         <StyledLink to="/home"  className={({isActive})=>(isActive?"active":"")} >首页</StyledLink>
//         <StyledLink to="/history" className={({isActive})=>(isActive?"active":"")}>上传历史</StyledLink>
//         <StyledLink to="/about" className={({isActive})=>(isActive?"active":"")}>关于我</StyledLink>
//       </nav>
//       <Login>
//         <Button>
//           <StyledLink to="/login">登录</StyledLink>
//         </Button>
//         <Button>
//         <StyledLink to="/register">注册</StyledLink>
//         </Button>
//       </Login>
//     </Header>
//   );
// }
export default Component;