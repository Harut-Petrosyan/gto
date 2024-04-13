import './App.css';
import {Routes, Route } from 'react-router-dom';
import Shop from './Shop';
import Home from './Home';
import Contact from './Contact';
import Layot from './Layot';
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Layot/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="contact" element={<Contact/>}/>
        </Route>
     </Routes>
    </div>
  );
}

export default App;
