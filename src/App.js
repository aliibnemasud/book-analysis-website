import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componants/Home/Home';
import Review from './componants/Review/Review';
import Dashboard from './componants/Dashboard/Dashboard';
import Blog from './componants/Blog/Blog';
import About from './componants/About/About';
import Header from './componants/Header/Header';
import ErrorPage from './componants/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <Header></Header>      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>        
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>        
      </Routes>
    </div>
  );
}

export default App;
