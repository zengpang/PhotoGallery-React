import Logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import History from './pages/History';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { Suspense, lazy } from 'react';
import {
  Routes,
  Link,
  Route
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <img src={Logo}></img>
      <nav>
        <Link to="/">首页</Link>
        <Link to="/history">上传历史</Link>
        <Link to="/about">关于我</Link>
      </nav>
      <Header>

      </Header>
      <Routes>
        <Route path="/" exact="true" element={<Home />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
