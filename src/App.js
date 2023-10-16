//import React from 'react'
//import Home from './Home'
import About from './About'
import {Routes,Route} from 'react-router-dom'
import Cars from './Cars'
import Interface from './Interface';
import Login from './Login';
import Signup from './Signup';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Interface/>}/>
        <Route path='/Home' element={<Interface/>}/>
        <Route path='/Cars' element={<Cars/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;
