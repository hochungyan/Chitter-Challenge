import Home from '../src/components/Home.jsx';
import { useState } from 'react';
import Register from './components/Form/Register.jsx';
import Login from './components/Form/Login.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Right from './components/Right';
import Left from './components/Left';
function App() {
  const [user, setLoginUser] = useState({});
  const [peeps, setPeeps] = useState([]);
  return (
 <>
 <Header/>
<Router>
  <Routes>
   <Route exact path ="/" element = {
  <>    
  <div className="container pb-5">
<div className="row gap-3">
    <Left peeps={peeps}
setPeeps={setPeeps}
user={user}
/> 
<div className="col-3 bg-light border rounded-3">
<div className="container pb-5">
<div className="row gap-3">
   {user && user._id ? <Main setLoginUser={setLoginUser} user={user} /> : <Login setLoginUser={setLoginUser} />} 
 </div>
 </div>
</div>
</div></div>
</>
   } /> 
   <Route path="/register" element={<Register />} />   
   </Routes>
</Router>
 <Footer/>
 </>
  );
}

export default App;
