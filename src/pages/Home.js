import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faUser, faCircleXmark, faCirclePlus, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(fas, faUser, faCircleXmark, faCirclePlus, faEnvelope, faPhone )


function Home() {
  return (
    <div className="home container">
      <div className="d-block justify-content-center p-2 bd-highlight h-75 w-50">
        <h2>User Information</h2>
        <hr className="w-50" />
        <div className="m-3">

          <div className="d-flex justify-content-between w-50 mt-2">
              <FontAwesomeIcon className="fs-4 mt-2" icon={faUser}/>
              <p className="fs-4">Username</p>
              <FontAwesomeIcon className="fs-4 mt-2" style={{marginLeft:"100px"}} icon={faCircleXmark} />
              <FontAwesomeIcon className="fs-4 mt-2" icon={faCirclePlus} />
          </div> 
          <hr className="w-50 my-0"/>
          <div className="d-flex justify-content-between w-50 mt-4">
              <FontAwesomeIcon className="fs-4 mt-2" icon={faEnvelope}/>
              <p className="fs-4">Email-id</p>
              <FontAwesomeIcon className="fs-4 mt-2" style={{marginLeft:"118px"}} icon={faCircleXmark} />
              <FontAwesomeIcon className="fs-4 mt-2" icon={faCirclePlus} />
          </div>
          <hr className="w-50 my-0"/>
          <div className="d-flex justify-content-between w-50 mt-4">
              <FontAwesomeIcon className="fs-4 mt-2" icon={faPhone}/>
              <p className="fs-4">Contact</p>
              <FontAwesomeIcon className="fs-4 mt-2" style={{marginLeft:"118px"}} icon={faCircleXmark} />
              <FontAwesomeIcon className="fs-4 mt-2" icon={faCirclePlus} />
          </div>
          <hr className="w-50 my-0"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
