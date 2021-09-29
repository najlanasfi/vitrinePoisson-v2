
import React from 'react';
import './App.css';
import {useState} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import List from './Components/List';
import Navigation from './Components/Navigation';
import Detail from './Components/Detail';
import Footer from './Components/Footer';
import Add from './Components/Add';
function App() {
  
 const[selectRating,setSelectRating] = useState(0);
 const [searchCondition, setSearchCondition]=useState('');
  return (
    
    <BrowserRouter>
 <Navigation setSearchCondition={setSearchCondition} 
        setSelectRating={setSelectRating} />
    <div className="App" style={{padding:"50px",backgroundColor:"	#1E90FF",height:"85vh",overflow:"scroll"}}>

<Switch>
  <Route exact path="/"></Route>
  <Route path='/list'><List /></Route>
  <Route path='/poisson/:id'><Detail  /></Route>
  <Route path='/Add'><Add /></Route>
</Switch>
      </div>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
