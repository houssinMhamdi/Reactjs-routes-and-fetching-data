import './App.css';
import {BrowserRouter,Routes,Route , NavLink ,Navigate} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <nav>
          <h1>My Articals</h1>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>

       <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/about" element={<About /> }/>
          <Route path="/contact" element={<Contact /> }/>  
          <Route path="/article/:id" element={<Article /> }/>  
          <Route path="*" element={<Navigate to="/" /> }/>  
       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
