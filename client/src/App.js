import { useEffect } from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom"
import AppNavBar from "./component/AppNavBar"
import Dashboard from './component/pages/Dashboard';
import Home from './component/pages/Home';
import {useDispatch} from "react-redux"
import { getAuthUser } from './redux/actions/authActions';


function App() {
  const dispatch=useDispatch()
  const getUser=()=>dispatch(getAuthUser())

  useEffect(()=>{
    getUser()
  })

  return (
    <div className="App">
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashbord" element={<Dashboard />}/>
      </Routes>
    </div>
  );
}

export default App;
