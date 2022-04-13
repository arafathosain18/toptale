import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Review from './component/Review/Review';
import Header from './component/Header/Header';
import NotFound from './component/NotFound/NotFound';
import Blog from './component/Blog/Blog';

function App() {
  return (
    <div className="App">
<Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/review" element= {<Review></Review>} ></Route>
        <Route path="/blog" element= {<Blog></Blog>} ></Route>

        <Route path="*" element= {<NotFound></NotFound>} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
