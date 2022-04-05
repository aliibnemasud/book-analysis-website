import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componants/Home/Home';
import Dashboard from './componants/Dashboard/Dashboard';
import Blog from './componants/Blog/Blog';
import About from './componants/About/About';
import Header from './componants/Header/Header';
import ErrorPage from './componants/ErrorPage/ErrorPage';
import Reviews from './componants/Reviews/Reviews';
import Footer from './componants/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>        
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>        
      </Routes>
      <Footer></Footer>      
    </div>
  );
}

export default App;
