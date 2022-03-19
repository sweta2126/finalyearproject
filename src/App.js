import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router,
  Route,
  Routes } from 'react-router-dom';
// import Switch from '@material-ui/core/Switch';
  

import Home from './pages/Home';
import {Units , RegisterOwner , RegisterOccupier} from './pages/Units';
import Society from './pages/Society';
import {Committee , CommitteeRole , Committees} from './pages/Committee';


function App() {
  return (
    <>
      <Router>
        <Sidebar title="BUMA" />
        <Routes>
          <Route exact path='/home' element={<Home/>}/> 
          <Route exact path='/society' element={<Society/>} />
          <Route exact path='/units' element={<Units/>} />
          <Route exact path='/units/registerowner' element={<RegisterOwner/>} />
          <Route exact path='/units/registeroccupier' element={<RegisterOccupier/>} />
          <Route exact path='/committee' element={<Committee/>} />
          <Route exact path='/committee/committeerole' element={<CommitteeRole/>} />
          <Route exact path='/committee/committees' element={<Committees/>} />
          

        </Routes>
      </Router>
    </>
  );
}

export default App;
