
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import React, { Suspense, lazy } from 'react';
import {
  Routes,
  Link,
  Route,
  Navigate
} from 'react-router-dom';



const Home=lazy(()=>import('./pages/Home'));
const History=lazy(()=>import('./pages/History'));
const About=lazy(()=>import('./pages/About'));
const Login=lazy(()=>import('./pages/Login'));
const Register=lazy(()=>import('./pages/Register'));
function App() {
  return (
    <div className="App">
  
   
      <Header>
         
      </Header>
      <main>
        <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/home"  element={<Home />}/>
          <Route path="/history" element={<History />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/" element={<Navigate to="/home"/>}/>
        </Routes>
        </Suspense>
      </main>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
