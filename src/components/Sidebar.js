import React,{useState} from "react";

 import * as FaIcons from "react-icons/fa";
 import * as AiIcons from "react-icons/ai"
 import { Link } from "react-router-dom";
 import {SidebarData} from './SidebarData';
 import SubMenu from './SubMenu'

 import "./Sidebar.css";

 function Sidebar(props) {
     const [sidebar,setSidebar] = useState(false)

     // const showSidebar=()=>setSidebar(!sidebar)
     const showSidebar = () => {
       if(sidebar === false){
         setSidebar(true);
       }
       else {
         setSidebar(false)
       }
     }
  
   return (
     <>
      
         <div className="navbar">
           
           <Link to="/" className="menu-bars">
             <FaIcons.FaBars onClick={showSidebar} />
           </Link>
           <h1><span>{" " + props.title}</span></h1>
           
         </div>
         <nav className={sidebar ? 'nav-menu active' :'nav-menu'}>
         
             <ul className='nav-menu-items' onClick={showSidebar}>
               {/* <li className='navbar-toggle'>
                   <Link to={{state : {fromDashboard:true}}} className="menu-bars">
                       <AiIcons.AiOutlineClose/>
                  </Link>
               </li> */}
               {SidebarData.map((item, index)=>{
                 return <SubMenu item={item} key={index} />;
                  
               })}
                

             </ul>
         </nav>

    
     </>
   );
 }
 export default Sidebar;
